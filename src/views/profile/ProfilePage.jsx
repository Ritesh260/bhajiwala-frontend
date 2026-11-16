
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  UserRound,
  MapPin,
  Heart,
  Package,
  LogOut,
  Edit3,
  Plus,
  Trash2,
  Star,
  Home,
  BriefcaseBusiness,
  MapPinned,
  X,
  Save,
  Loader2,
  ChevronRight,
  ShoppingBag,
  Mail,
  Phone,
  CheckCircle2,
  AlertCircle,
  ArrowLeft,
  Leaf,
  RefreshCw,
  UploadCloud,
  ImagePlus,
} from "lucide-react";

import { useAuth } from "@/context/AuthContext";

import {
  getUserProfile,
  updateUserProfile,
  uploadProfileImage,
} from "@/api/profile_apis";

import {
  getAddresses,
  addAddress,
  updateAddress,
  deleteAddress,
  setDefaultAddress,
} from "@/api/address_apis";

import {
  getWishlist,
  removeFromWishlist,
} from "@/api/wishlist_apis";

const menuItems = [
  { id: "profile", label: "My Profile", icon: UserRound },
  { id: "orders", label: "My Orders", icon: Package },
  { id: "addresses", label: "Saved Addresses", icon: MapPin },
  { id: "wishlist", label: "My Wishlist", icon: Heart },
];

const emptyAddress = {
  fullName: "",
  phone: "",
  addressType: "Home",
  houseNo: "",
  area: "",
  landmark: "",
  city: "",
  state: "",
  pincode: "",
  isDefault: false,
};

export default function ProfilePage() {
  const router = useRouter();
  const { user, loading: authLoading, logout } = useAuth();

  const [activeTab, setActiveTab] = useState("profile");

  const [profile, setProfile] = useState(null);
  const [addresses, setAddresses] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  const [profileForm, setProfileForm] = useState({
    name: "",
    phone: "",
    email: "",
    profileImage: "",
  });

  const [addressForm, setAddressForm] = useState(emptyAddress);
  const [editingAddressId, setEditingAddressId] = useState(null);

  const [showAddressForm, setShowAddressForm] = useState(false);
  const [isEditingProfile, setIsEditingProfile] = useState(false);

  const [pageLoading, setPageLoading] = useState(true);
  const [profileSaving, setProfileSaving] = useState(false);
  const [addressSaving, setAddressSaving] = useState(false);
  const [actionId, setActionId] = useState(null);

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [selectedProfileFile, setSelectedProfileFile] = useState(null);
  const [profilePreview, setProfilePreview] = useState("");
  const [isDragging, setIsDragging] = useState(false);
  const [imageUploading, setImageUploading] = useState(false);

  // Clean up temporary preview URLs when replaced or when page unmounts.
  useEffect(() => {
    if (!profilePreview) return;

    return () => URL.revokeObjectURL(profilePreview);
  }, [profilePreview]);

  // =====================================
  // AUTH CHECK
  // =====================================

  useEffect(() => {
    if (!authLoading && !user) {
      router.replace("/login?redirect=/profile");
    }
  }, [authLoading, user, router]);

  // =====================================
  // LOAD PROFILE
  // =====================================

  const loadProfile = async () => {
    try {
      const response = await getUserProfile();
      const userData = response.user || response.data?.user || response.data;

      if (userData) {
        setProfile(userData);

        setProfileForm({
          name: userData.name || "",
          phone: userData.phone || "",
          email: userData.email || "",
          profileImage: userData.profileImage || "",
        });
      }
    } catch (err) {
      setError(
        err.response?.data?.message || "Unable to load profile"
      );
    }
  };

  // =====================================
  // LOAD ADDRESSES
  // =====================================

  const loadAddresses = async () => {
    try {
      const response = await getAddresses();

      const addressData =
        response.addresses ||
        response.data?.addresses ||
        response.data ||
        [];

      setAddresses(Array.isArray(addressData) ? addressData : []);
    } catch (err) {
      console.error("Address loading error:", err);
    }
  };

  // =====================================
  // LOAD WISHLIST
  // =====================================

  const loadWishlist = async () => {
    try {
      const response = await getWishlist();

      const wishlistData =
        response.wishlist ||
        response.data?.wishlist ||
        response.products ||
        response.data?.products ||
        response.data ||
        [];

      setWishlist(Array.isArray(wishlistData) ? wishlistData : []);
    } catch (err) {
      console.error("Wishlist loading error:", err);
    }
  };

  // =====================================
  // LOAD ALL DATA
  // =====================================

  const loadAllData = async () => {
    setPageLoading(true);
    setError("");

    await Promise.all([
      loadProfile(),
      loadAddresses(),
      loadWishlist(),
    ]);

    setPageLoading(false);
  };

  useEffect(() => {
    if (user) {
      loadAllData();
    }
  }, [user]);

  // =====================================
  // PROFILE INPUT
  // =====================================

  const handleProfileChange = (e) => {
    const { name, value } = e.target;

    setProfileForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // =====================================
  // SAVE PROFILE
  // =====================================

  const handleProfileSave = async (e) => {
    e.preventDefault();

    try {
      setProfileSaving(true);
      setError("");
      setSuccess("");

      const response = await updateUserProfile({
        name: profileForm.name,
        phone: profileForm.phone,
        email: profileForm.email,
      });

      const updatedUser =
        response.user || response.data?.user || response.data;

      if (updatedUser) {
        setProfile(updatedUser);

        setProfileForm({
          name: updatedUser.name || "",
          phone: updatedUser.phone || "",
          email: updatedUser.email || "",
          profileImage: updatedUser.profileImage || "",
        });
      }

      setIsEditingProfile(false);
      setSuccess("Profile updated successfully!");
    } catch (err) {
      setError(
        err.response?.data?.message || "Failed to update profile"
      );
    } finally {
      setProfileSaving(false);
    }
  };
  // ==========================================
  // HANDLE PROFILE IMAGE SELECTION
  // ==========================================
  const handleProfileFile = (file) => {
  if (!file) return;

  const allowedTypes = ["image/jpeg", "image/png", "image/webp"];

  if (!allowedTypes.includes(file.type)) {
    setError("Only JPG, PNG and WEBP images are allowed.");
    return;
  }

  if (file.size > 5 * 1024 * 1024) {
    setError("Image size must be less than 5 MB.");
    return;
  }

  setError("");
  setSuccess("");
  setSelectedProfileFile(file);
  setProfilePreview(URL.createObjectURL(file));
};

  // ==========================================
  // DRAG AND DROP
  // ==========================================
  const handleProfileDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);

    const file = e.dataTransfer.files?.[0];
    if (file) handleProfileFile(file);
  };

  // ==========================================
  // UPLOAD PROFILE IMAGE
  // ==========================================
  const handleProfileImageUpload = async () => {
    if (!selectedProfileFile) {
      setError("Please select an image first.");
      return;
    }

    try {
      setImageUploading(true);
      setError("");
      setSuccess("");

      const response = await uploadProfileImage(selectedProfileFile);
      const updatedUser = response.user || response.data?.user;
      const imageUrl =
        updatedUser?.profileImage ||
        response.profileImage ||
        response.data?.profileImage;

      if (!imageUrl) {
        throw new Error("Image uploaded but profile image URL was not returned.");
      }

      setProfile((prev) => ({
        ...(prev || {}),
        ...(updatedUser || {}),
        profileImage: imageUrl,
      }));

      setProfileForm((prev) => ({
        ...prev,
        profileImage: imageUrl,
      }));

      setSelectedProfileFile(null);
      setProfilePreview("");
      setSuccess("Profile image updated successfully!");
    } catch (err) {
      console.error("Profile Image Upload Error:", err);
      setError(
        err.response?.data?.message ||
        err.message ||
        "Failed to upload profile image."
      );
    } finally {
      setImageUploading(false);
    }
  };

  // ==========================================
  // REMOVE SELECTED IMAGE
  // ==========================================
  const handleRemoveSelectedImage = () => {
    setSelectedProfileFile(null);
    setProfilePreview("");
  };
  // =====================================
  // OPEN ADD ADDRESS FORM
  // =====================================

  const openAddAddress = () => {
    setEditingAddressId(null);

    setAddressForm({
      ...emptyAddress,
      fullName: profile?.name || user?.name || "",
      phone: profile?.phone || user?.phone || "",
      isDefault: addresses.length === 0,
    });

    setShowAddressForm(true);
    setError("");
    setSuccess("");
  };

  // =====================================
  // OPEN EDIT ADDRESS FORM
  // =====================================

  const openEditAddress = (address) => {
    setEditingAddressId(address._id);

    setAddressForm({
      fullName: address.fullName || "",
      phone: address.phone || "",
      addressType: address.addressType || "Home",
      houseNo: address.houseNo || "",
      area: address.area || "",
      landmark: address.landmark || "",
      city: address.city || "",
      state: address.state || "",
      pincode: address.pincode || "",
      isDefault: address.isDefault || false,
    });

    setShowAddressForm(true);
    setError("");
    setSuccess("");
  };

  // =====================================
  // ADDRESS INPUT
  // =====================================

  const handleAddressChange = (e) => {
    const { name, value, type, checked } = e.target;

    setAddressForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // =====================================
  // SAVE ADDRESS
  // =====================================

  const handleAddressSave = async (e) => {
    e.preventDefault();

    try {
      setAddressSaving(true);
      setError("");
      setSuccess("");

      if (editingAddressId) {
        await updateAddress(editingAddressId, addressForm);
        setSuccess("Address updated successfully!");
      } else {
        await addAddress(addressForm);
        setSuccess("Address added successfully!");
      }

      setShowAddressForm(false);
      setEditingAddressId(null);
      setAddressForm(emptyAddress);

      await loadAddresses();
    } catch (err) {
      setError(
        err.response?.data?.message || "Failed to save address"
      );
    } finally {
      setAddressSaving(false);
    }
  };

  // =====================================
  // DELETE ADDRESS
  // =====================================

  const handleDeleteAddress = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this address?"
    );

    if (!confirmDelete) return;

    try {
      setActionId(id);
      setError("");

      await deleteAddress(id);
      await loadAddresses();

      setSuccess("Address deleted successfully!");
    } catch (err) {
      setError(
        err.response?.data?.message || "Failed to delete address"
      );
    } finally {
      setActionId(null);
    }
  };

  // =====================================
  // SET DEFAULT ADDRESS
  // =====================================

  const handleSetDefault = async (id) => {
    try {
      setActionId(id);
      setError("");

      await setDefaultAddress(id);
      await loadAddresses();

      setSuccess("Default address updated!");
    } catch (err) {
      setError(
        err.response?.data?.message || "Failed to update default address"
      );
    } finally {
      setActionId(null);
    }
  };

  // =====================================
  // REMOVE WISHLIST PRODUCT
  // =====================================

  const handleRemoveWishlist = async (productId) => {
    try {
      setActionId(productId);
      setError("");

      await removeFromWishlist(productId);

      setWishlist((prev) =>
        prev.filter((item) => item._id !== productId)
      );

      setSuccess("Product removed from wishlist!");
    } catch (err) {
      setError(
        err.response?.data?.message || "Failed to remove product"
      );
    } finally {
      setActionId(null);
    }
  };

  // =====================================
  // LOGOUT
  // =====================================

  const handleLogout = async () => {
    try {
      await logout();
      router.replace("/login");
    } catch (err) {
      console.error("Logout error:", err);
    }
  };

  // =====================================
  // HELPERS
  // =====================================

  const getProductPrice = (product) => {
    const price = Number(product.discountPrice || product.price || 0);
    return price;
  };

  const getProductImage = (product) => {
    if (Array.isArray(product.images)) {
      const firstImage = product.images[0];

      if (typeof firstImage === "string") return firstImage;
      if (firstImage?.url) return firstImage.url;
    }

    if (typeof product.image === "string") return product.image;

    return "/images/product-placeholder.png";
  };

  const getAddressIcon = (type) => {
    if (type === "Work") return BriefcaseBusiness;
    if (type === "Other") return MapPinned;
    return Home;
  };

  // =====================================
  // LOADING SCREEN
  // =====================================

  if (authLoading || pageLoading) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <Loader2 className="w-10 h-10 animate-spin text-green-600 mx-auto" />
          <p className="mt-3 text-sm font-medium text-gray-500">
            Loading your account...
          </p>
        </div>
      </div>
    );
  }

  if (!user) return null;

  // =====================================
  // PAGE UI
  // =====================================

  return (
    <main className="min-h-screen bg-[#f7f9f6] pb-12">

      {/* PAGE HEADER */}

      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5">
          <div className="flex items-center gap-3">
            <button
              onClick={() => router.back()}
              className="md:hidden p-2 rounded-xl hover:bg-gray-100"
            >
              <ArrowLeft size={21} />
            </button>

            <div>
              <p className="text-xs text-gray-400 font-medium">
                BhajiWala / Account
              </p>

              <h1 className="text-xl sm:text-2xl font-extrabold text-gray-900">
                My Account
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-7">

        {/* NOTIFICATIONS */}

        {error && (
          <div className="mb-5 flex items-center gap-2 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
            <AlertCircle size={18} />
            {error}
            <button
              onClick={() => setError("")}
              className="ml-auto"
            >
              <X size={17} />
            </button>
          </div>
        )}

        {success && (
          <div className="mb-5 flex items-center gap-2 rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700">
            <CheckCircle2 size={18} />
            {success}
            <button
              onClick={() => setSuccess("")}
              className="ml-auto"
            >
              <X size={17} />
            </button>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-6">

          {/* SIDEBAR */}

          <aside className="space-y-5">

            {/* USER CARD */}

            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 shrink-0 rounded-full bg-green-100 flex items-center justify-center overflow-hidden">
                  {profile?.profileImage ? (
                    <img
                      src={profile.profileImage}
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <UserRound size={28} className="text-green-700" />
                  )}
                </div>

                <div className="min-w-0">
                  <h2 className="font-bold text-gray-900 truncate">
                    {profile?.name || user.name || "Customer"}
                  </h2>

                  <p className="text-sm text-gray-500 mt-1">
                    {profile?.phone || user.phone || "Your account"}
                  </p>
                </div>
              </div>

              <div className="mt-5 rounded-xl bg-green-50 px-3 py-3 flex items-center gap-2">
                <Leaf size={17} className="text-green-700" />
                <p className="text-xs font-semibold text-green-800">
                  Fresh choices, happy living!
                </p>
              </div>
            </div>

            {/* NAVIGATION */}

            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-3">
              <p className="px-3 pt-2 pb-3 text-xs font-bold uppercase tracking-wider text-gray-400">
                Account Menu
              </p>

              <nav className="space-y-1">
                {menuItems.map((item) => {
                  const Icon = item.icon;
                  const active = activeTab === item.id;

                  return (
                    <button
                      key={item.id}
                      onClick={() => {
                        setActiveTab(item.id);
                        setShowAddressForm(false);
                        setError("");
                        setSuccess("");
                      }}
                      className={`w-full flex items-center gap-3 px-3 py-3 rounded-xl text-sm font-semibold transition ${
                        active
                          ? "bg-green-50 text-green-700"
                          : "text-gray-600 hover:bg-gray-50"
                      }`}
                    >
                      <Icon size={19} />

                      <span>{item.label}</span>

                      {item.id === "wishlist" && wishlist.length > 0 && (
                        <span className="ml-auto text-xs bg-green-100 text-green-700 rounded-full px-2 py-1">
                          {wishlist.length}
                        </span>
                      )}

                      {active && (
                        <ChevronRight size={17} className="ml-auto" />
                      )}
                    </button>
                  );
                })}
              </nav>

              <div className="border-t border-gray-100 mt-3 pt-3">
                <Link
                  href="/"
                  className="w-full flex items-center gap-3 px-3 py-3 rounded-xl text-sm font-semibold text-gray-600 hover:bg-gray-50"
                >
                  <ShoppingBag size={19} />
                  Continue Shopping
                </Link>

                <button
                  onClick={handleLogout}
                  className="w-full flex items-center gap-3 px-3 py-3 rounded-xl text-sm font-semibold text-red-600 hover:bg-red-50"
                >
                  <LogOut size={19} />
                  Logout
                </button>
              </div>
            </div>
          </aside>

          {/* MAIN CONTENT */}

          <section className="min-w-0">

            {/* ================= PROFILE ================= */}

            {activeTab === "profile" && (
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm">

                <div className="p-5 sm:p-7 border-b border-gray-100 flex items-center justify-between gap-3">
                  <div>
                    <h2 className="text-lg font-extrabold text-gray-900">
                      Personal Information
                    </h2>

                    <p className="text-sm text-gray-500 mt-1">
                      Manage your account details
                    </p>
                  </div>

                  {!isEditingProfile && (
                    <button
                      onClick={() => {
                        setIsEditingProfile(true);
                        setError("");
                        setSuccess("");
                      }}
                      className="flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2.5 rounded-xl text-sm font-bold hover:bg-green-100"
                    >
                      <Edit3 size={16} />
                      Edit
                    </button>
                  )}
                </div>

               
<form
  onSubmit={handleProfileSave}
  className="p-5 sm:p-7"
>
  {/* PROFILE IMAGE */}
  <div className="flex flex-col sm:flex-row items-center gap-5 mb-8">
    <div className="w-24 h-24 rounded-full bg-green-50 overflow-hidden flex items-center justify-center border-4 border-green-100 shrink-0">
      {profilePreview || profileForm.profileImage ? (
        <img
          src={profilePreview || profileForm.profileImage}
          alt="Profile"
          className="w-full h-full object-cover"
        />
      ) : (
        <UserRound size={40} className="text-green-700" />
      )}
    </div>

    <div className="text-center sm:text-left">
      <h3 className="font-bold text-gray-900">
        {profileForm.name || "Your Name"}
      </h3>
      <p className="text-sm text-gray-500 mt-1">
        Your BhajiWala account
      </p>
    </div>
  </div>

  {/* DRAG AND DROP IMAGE UPLOAD */}
  {isEditingProfile && (
    <div className="mb-8">
      <label className="block text-sm font-semibold text-gray-700 mb-3">
        Profile Photo
      </label>

      <div
        onDragOver={(e) => {
          e.preventDefault();
          setIsDragging(true);
        }}
        onDragLeave={(e) => {
          e.preventDefault();
          setIsDragging(false);
        }}
        onDrop={handleProfileDrop}
        onClick={() =>
          document.getElementById("profileImageInput")?.click()
        }
        className={`relative cursor-pointer rounded-2xl border-2 border-dashed p-6 sm:p-8 text-center transition ${
          isDragging
            ? "border-green-600 bg-green-50"
            : "border-gray-300 bg-gray-50 hover:border-green-500 hover:bg-green-50/50"
        }`}
      >
        <input
          id="profileImageInput"
          type="file"
          accept="image/jpeg,image/png,image/webp"
          className="hidden"
          onClick={(e) => e.stopPropagation()}
          onChange={(e) => {
            handleProfileFile(e.target.files?.[0]);
            e.target.value = "";
          }}
        />

        <div className="flex flex-col items-center gap-3">
          <div className="w-14 h-14 rounded-2xl bg-green-100 flex items-center justify-center">
            {isDragging ? (
              <ImagePlus size={28} className="text-green-700" />
            ) : (
              <UploadCloud size={28} className="text-green-700" />
            )}
          </div>

          <div>
            <p className="font-bold text-gray-800">
              {isDragging
                ? "Drop your image here"
                : "Drag & Drop your image here"}
            </p>

            <p className="text-sm text-gray-500 mt-1">
              or click to browse files
            </p>
          </div>

          <span className="text-xs text-gray-400">
            JPG, PNG, WEBP · Maximum 5 MB
          </span>
        </div>
      </div>

      {/* SELECTED IMAGE DETAILS */}
      {selectedProfileFile && (
        <div className="mt-3 flex items-center justify-between gap-3 p-3 rounded-xl border border-green-100 bg-green-50">
          <div className="flex items-center gap-3 min-w-0">
            <ImagePlus size={20} className="text-green-700 shrink-0" />

            <div className="min-w-0">
              <p className="text-sm font-semibold text-gray-800 truncate">
                {selectedProfileFile.name}
              </p>
              <p className="text-xs text-gray-500">
                {(selectedProfileFile.size / (1024 * 1024)).toFixed(2)} MB
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              handleRemoveSelectedImage();
            }}
            className="p-2 rounded-lg text-red-500 hover:bg-red-100"
          >
            <X size={18} />
          </button>
        </div>
      )}

      {/* UPLOAD BUTTON */}
      {selectedProfileFile && (
        <button
          type="button"
          onClick={handleProfileImageUpload}
          disabled={imageUploading}
          className="mt-3 flex items-center justify-center gap-2 w-full sm:w-auto bg-green-600 text-white px-5 py-3 rounded-xl font-bold hover:bg-green-700 disabled:opacity-60"
        >
          {imageUploading ? (
            <Loader2 size={17} className="animate-spin" />
          ) : (
            <UploadCloud size={17} />
          )}

          {imageUploading ? "Uploading..." : "Upload Photo"}
        </button>
      )}
    </div>
  )}

  {/* PROFILE DETAILS */}
  <div className="grid sm:grid-cols-2 gap-5">
    <div>
      <label className="block text-sm font-semibold text-gray-700 mb-2">
        Full Name
      </label>

      <div className="relative">
        <UserRound
          size={18}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
        />

        <input
          name="name"
          value={profileForm.name}
          onChange={handleProfileChange}
          disabled={!isEditingProfile}
          required
          className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-green-500 disabled:bg-gray-50 disabled:text-gray-500"
          placeholder="Enter your name"
        />
      </div>
    </div>

    <div>
      <label className="block text-sm font-semibold text-gray-700 mb-2">
        Mobile Number
      </label>

      <div className="relative">
        <Phone
          size={18}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
        />

        <input
          name="phone"
          value={profileForm.phone}
          onChange={handleProfileChange}
          disabled={!isEditingProfile}
          required
          maxLength={10}
          className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-green-500 disabled:bg-gray-50 disabled:text-gray-500"
          placeholder="10 digit mobile number"
        />
      </div>
    </div>

    <div>
      <label className="block text-sm font-semibold text-gray-700 mb-2">
        Email Address
      </label>

      <div className="relative">
        <Mail
          size={18}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
        />

        <input
          type="email"
          name="email"
          value={profileForm.email}
          onChange={handleProfileChange}
          disabled={!isEditingProfile}
          required
          className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-green-500 disabled:bg-gray-50 disabled:text-gray-500"
          placeholder="Enter email"
        />
      </div>
    </div>
  </div>

  {/* SAVE / CANCEL */}
  {isEditingProfile && (
    <div className="flex flex-wrap gap-3 mt-7">
      <button
        type="submit"
        disabled={profileSaving || imageUploading || Boolean(selectedProfileFile)}
        className="flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-green-700 disabled:opacity-60"
      >
        {profileSaving ? (
          <Loader2 size={17} className="animate-spin" />
        ) : (
          <Save size={17} />
        )}
        Save Changes
      </button>

      <button
        type="button"
        onClick={() => {
          setIsEditingProfile(false);

          setProfileForm({
            name: profile?.name || "",
            phone: profile?.phone || "",
            email: profile?.email || "",
            profileImage: profile?.profileImage || "",
          });

          setSelectedProfileFile(null);
          setProfilePreview("");
          setIsDragging(false);
          setError("");
          setSuccess("");
        }}
        className="px-6 py-3 rounded-xl border border-gray-200 text-gray-600 font-bold hover:bg-gray-50"
      >
        Cancel
      </button>
    </div>
  )}
</form>

              </div>
            )}

            {/* ================= ORDERS ================= */}

            {activeTab === "orders" && (
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-8">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center">
                    <Package size={24} className="text-green-700" />
                  </div>

                  <div>
                    <h2 className="text-lg font-extrabold text-gray-900">
                      My Orders
                    </h2>

                    <p className="text-sm text-gray-500">
                      Track and manage your orders
                    </p>
                  </div>
                </div>

                <div className="mt-8 text-center py-10 bg-gray-50 rounded-2xl">
                  <Package
                    size={45}
                    className="mx-auto text-gray-300"
                  />

                  <h3 className="mt-4 font-bold text-gray-800">
                    Order history integration pending
                  </h3>

                  <p className="text-sm text-gray-500 mt-2 max-w-sm mx-auto">
                    Your order history will appear here once the existing
                    Order backend API is connected.
                  </p>

                  <Link
                    href="/"
                    className="inline-flex mt-5 items-center gap-2 bg-green-600 text-white px-5 py-3 rounded-xl text-sm font-bold hover:bg-green-700"
                  >
                    <ShoppingBag size={17} />
                    Start Shopping
                  </Link>
                </div>
              </div>
            )}

            {/* ================= ADDRESSES ================= */}

            {activeTab === "addresses" && (
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm">

                <div className="p-5 sm:p-7 border-b border-gray-100 flex items-center justify-between gap-3">
                  <div>
                    <h2 className="text-lg font-extrabold text-gray-900">
                      Saved Addresses
                    </h2>

                    <p className="text-sm text-gray-500 mt-1">
                      Manage your delivery locations
                    </p>
                  </div>

                  {!showAddressForm && (
                    <button
                      onClick={openAddAddress}
                      className="flex items-center gap-2 bg-green-600 text-white px-4 py-2.5 rounded-xl text-sm font-bold hover:bg-green-700"
                    >
                      <Plus size={17} />
                      Add New
                    </button>
                  )}
                </div>

                {showAddressForm ? (
                  <form
                    onSubmit={handleAddressSave}
                    className="p-5 sm:p-7"
                  >
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="font-extrabold text-gray-900">
                        {editingAddressId ? "Edit Address" : "Add New Address"}
                      </h3>

                      <button
                        type="button"
                        onClick={() => setShowAddressForm(false)}
                        className="p-2 rounded-lg hover:bg-gray-100"
                      >
                        <X size={20} />
                      </button>
                    </div>

                    <div className="mb-5">
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Address Type
                      </label>

                      <div className="flex flex-wrap gap-2">
                        {["Home", "Work", "Other"].map((type) => {
                          const Icon = getAddressIcon(type);

                          return (
                            <button
                              key={type}
                              type="button"
                              onClick={() =>
                                setAddressForm((prev) => ({
                                  ...prev,
                                  addressType: type,
                                }))
                              }
                              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border text-sm font-bold ${
                                addressForm.addressType === type
                                  ? "border-green-600 bg-green-50 text-green-700"
                                  : "border-gray-200 text-gray-600"
                              }`}
                            >
                              <Icon size={17} />
                              {type}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      {[
                        ["fullName", "Full Name", "Enter full name"],
                        ["phone", "Mobile Number", "10 digit number"],
                        ["houseNo", "House / Flat / Building", "Flat, house or building"],
                        ["area", "Area / Street", "Enter area or street"],
                        ["landmark", "Landmark (Optional)", "Nearby landmark"],
                        ["city", "City", "Enter city"],
                        ["state", "State", "Enter state"],
                        ["pincode", "Pincode", "6 digit pincode"],
                      ].map(([name, label, placeholder]) => (
                        <div key={name}>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            {label}
                          </label>

                          <input
                            name={name}
                            value={addressForm[name]}
                            onChange={handleAddressChange}
                            placeholder={placeholder}
                            required={
                              !["landmark"].includes(name)
                            }
                            maxLength={
                              name === "phone" ? 10 :
                              name === "pincode" ? 6 :
                              undefined
                            }
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-green-500"
                          />
                        </div>
                      ))}
                    </div>

                    <label className="flex items-center gap-3 mt-5 text-sm font-semibold text-gray-700">
                      <input
                        type="checkbox"
                        name="isDefault"
                        checked={addressForm.isDefault}
                        onChange={handleAddressChange}
                        className="w-4 h-4 accent-green-600"
                      />
                      Set as default delivery address
                    </label>

                    <div className="flex flex-wrap gap-3 mt-7">
                      <button
                        type="submit"
                        disabled={addressSaving}
                        className="flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-green-700 disabled:opacity-60"
                      >
                        {addressSaving ? (
                          <Loader2 size={17} className="animate-spin" />
                        ) : (
                          <Save size={17} />
                        )}

                        {editingAddressId ? "Update Address" : "Save Address"}
                      </button>

                      <button
                        type="button"
                        onClick={() => setShowAddressForm(false)}
                        className="px-6 py-3 rounded-xl border border-gray-200 text-gray-600 font-bold"
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                ) : (
                  <div className="p-5 sm:p-7">
                    {addresses.length === 0 ? (
                      <div className="text-center py-12">
                        <MapPin
                          size={45}
                          className="mx-auto text-gray-300"
                        />

                        <h3 className="mt-4 font-bold text-gray-800">
                          No saved addresses
                        </h3>

                        <p className="text-sm text-gray-500 mt-2">
                          Add an address for faster delivery.
                        </p>

                        <button
                          onClick={openAddAddress}
                          className="mt-5 bg-green-600 text-white px-5 py-3 rounded-xl text-sm font-bold"
                        >
                          Add Your First Address
                        </button>
                      </div>
                    ) : (
                      <div className="grid md:grid-cols-2 gap-4">
                        {addresses.map((address) => {
                          const Icon = getAddressIcon(address.addressType);

                          return (
                            <div
                              key={address._id}
                              className={`rounded-2xl border p-5 ${
                                address.isDefault
                                  ? "border-green-300 bg-green-50/50"
                                  : "border-gray-200"
                              }`}
                            >
                              <div className="flex items-start justify-between gap-3">
                                <div className="flex items-center gap-2">
                                  <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-green-700">
                                    <Icon size={20} />
                                  </div>

                                  <div>
                                    <h3 className="font-extrabold text-gray-900">
                                      {address.addressType}
                                    </h3>

                                    <p className="text-xs text-gray-500">
                                      {address.fullName}
                                    </p>
                                  </div>
                                </div>

                                {address.isDefault && (
                                  <span className="text-[10px] font-extrabold text-green-700 bg-green-100 px-2.5 py-1 rounded-full">
                                    DEFAULT
                                  </span>
                                )}
                              </div>

                              <p className="text-sm text-gray-600 leading-6 mt-4">
                                {address.houseNo}, {address.area}
                                {address.landmark && `, ${address.landmark}`}
                                , {address.city}, {address.state} - {address.pincode}
                              </p>

                              <p className="text-sm text-gray-600 mt-2">
                                <Phone size={14} className="inline mr-1" />
                                {address.phone}
                              </p>

                              <div className="flex flex-wrap items-center gap-3 border-t border-gray-200/70 mt-5 pt-4">
                                <button
                                  onClick={() => openEditAddress(address)}
                                  className="flex items-center gap-1 text-xs font-bold text-gray-700 hover:text-green-700"
                                >
                                  <Edit3 size={14} />
                                  Edit
                                </button>

                                <button
                                  onClick={() => handleDeleteAddress(address._id)}
                                  disabled={actionId === address._id}
                                  className="flex items-center gap-1 text-xs font-bold text-red-600"
                                >
                                  {actionId === address._id ? (
                                    <Loader2 size={14} className="animate-spin" />
                                  ) : (
                                    <Trash2 size={14} />
                                  )}
                                  Delete
                                </button>

                                {!address.isDefault && (
                                  <button
                                    onClick={() => handleSetDefault(address._id)}
                                    disabled={actionId === address._id}
                                    className="ml-auto text-xs font-bold text-green-700"
                                  >
                                    Set Default
                                  </button>
                                )}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}

            {/* ================= WISHLIST ================= */}

            {activeTab === "wishlist" && (
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm">

                <div className="p-5 sm:p-7 border-b border-gray-100 flex items-center justify-between">
                  <div>
                    <h2 className="text-lg font-extrabold text-gray-900">
                      My Wishlist
                    </h2>

                    <p className="text-sm text-gray-500 mt-1">
                      Your favourite products
                    </p>
                  </div>

                  <span className="text-sm font-bold text-green-700 bg-green-50 px-3 py-2 rounded-xl">
                    {wishlist.length} Items
                  </span>
                </div>

                <div className="p-5 sm:p-7">
                  {wishlist.length === 0 ? (
                    <div className="text-center py-12">
                      <Heart
                        size={45}
                        className="mx-auto text-gray-300"
                      />

                      <h3 className="mt-4 font-bold text-gray-800">
                        Your wishlist is empty
                      </h3>

                      <p className="text-sm text-gray-500 mt-2">
                        Save products you love and find them here.
                      </p>

                      <Link
                        href="/"
                        className="inline-flex mt-5 bg-green-600 text-white px-5 py-3 rounded-xl text-sm font-bold"
                      >
                        Explore Products
                      </Link>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
                      {wishlist.map((item) => {
                        const product = item.product || item;
                        const productId = product._id;

                        return (
                          <div
                            key={productId}
                            className="border border-gray-100 rounded-2xl overflow-hidden hover:shadow-md transition"
                          >
                            <div className="relative bg-gray-50 h-44 flex items-center justify-center p-4">
                              <img
                                src={getProductImage(product)}
                                alt={product.name || "Product"}
                                className="h-full w-full object-contain"
                              />

                              <button
                                onClick={() => handleRemoveWishlist(productId)}
                                disabled={actionId === productId}
                                className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white shadow flex items-center justify-center text-red-500 hover:bg-red-50"
                              >
                                {actionId === productId ? (
                                  <Loader2 size={17} className="animate-spin" />
                                ) : (
                                  <Heart size={18} fill="currentColor" />
                                )}
                              </button>
                            </div>

                            <div className="p-4">
                              <h3 className="font-bold text-gray-900 line-clamp-1">
                                {product.name}
                              </h3>

                              <p className="text-xs text-gray-500 mt-1">
                                {product.brand || product.category || "Fresh Product"}
                              </p>

                              <div className="flex items-center justify-between mt-4">
                                <div>
                                  <span className="font-extrabold text-gray-900">
                                    ₹{getProductPrice(product)}
                                  </span>

                                  {product.price &&
                                    product.discountPrice > 0 &&
                                    product.price > product.discountPrice && (
                                      <span className="ml-2 text-xs text-gray-400 line-through">
                                        ₹{product.price}
                                      </span>
                                    )}
                                </div>

                                <Link
                                  href="/"
                                  className="text-xs font-bold text-green-700 bg-green-50 px-3 py-2 rounded-lg"
                                >
                                  Shop Now
                                </Link>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>
            )}

          </section>
        </div>
      </div>
    </main>
  );
}