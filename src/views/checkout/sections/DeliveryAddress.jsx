
"use client";

import { useEffect, useState } from "react";
import {
  User,
  Phone,
  MapPin,
  Home,
  Building2,
  Landmark,
  Plus,
  Pencil,
  CheckCircle2,
  Loader2,
  X,
} from "lucide-react";

import {
  getAddresses,
  addAddress,
  updateAddress,
  setDefaultAddress,
} from "@/api/address_apis";

const initialForm = {
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

export default function DeliveryAddress({
  selectedAddress,
  onAddressSelect,
}) {
  const [addresses, setAddresses] = useState([]);
  const [form, setForm] = useState(initialForm);
  const [editingId, setEditingId] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  // =====================================
  // FETCH ALL SAVED ADDRESSES
  // =====================================

  const fetchAddresses = async (preferredAddressId = null) => {
    try {
      setLoading(true);
      setError("");

      const data = await getAddresses();

      const list = data.addresses || data.data || [];

      setAddresses(list);

      if (list.length > 0) {
        const preferredAddress = list.find(
          (address) => address._id === preferredAddressId
        );

        const currentAddress = list.find(
          (address) => address._id === selectedAddress?._id
        );

        const defaultAddress = list.find(
          (address) => address.isDefault
        );

        const addressToSelect =
          preferredAddress ||
          currentAddress ||
          defaultAddress ||
          list[0];

        onAddressSelect(addressToSelect);
      } else {
        onAddressSelect(null);
      }
    } catch (err) {
      setError(
        err.response?.data?.message ||
          "Unable to load saved addresses"
      );
    } finally {
      setLoading(false);
    }
  };

  // =====================================
  // INITIAL ADDRESS LOAD
  // =====================================

  useEffect(() => {
    fetchAddresses();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // =====================================
  // HANDLE INPUT CHANGE
  // =====================================

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // =====================================
  // OPEN ADD ADDRESS FORM
  // =====================================

  const openAddForm = () => {
    setEditingId(null);
    setForm(initialForm);
    setError("");
    setShowForm(true);
  };

  // =====================================
  // OPEN EDIT ADDRESS FORM
  // =====================================

  const openEditForm = (address) => {
    setEditingId(address._id);

    setForm({
      fullName: address.fullName || "",
      phone: address.phone || "",
      addressType: address.addressType || "Home",
      houseNo: address.houseNo || "",
      area: address.area || "",
      landmark: address.landmark || "",
      city: address.city || "",
      state: address.state || "",
      pincode: address.pincode || "",
      isDefault: Boolean(address.isDefault),
    });

    setError("");
    setShowForm(true);
  };

  // =====================================
  // ADD / UPDATE ADDRESS
  // =====================================

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setSaving(true);
      setError("");

      const payload = {
        ...form,
        fullName: form.fullName.trim(),
        phone: form.phone.trim(),
        houseNo: form.houseNo.trim(),
        area: form.area.trim(),
        landmark: form.landmark.trim(),
        city: form.city.trim(),
        state: form.state.trim(),
        pincode: form.pincode.trim(),
      };

      let savedAddressId = editingId;

      if (editingId) {
        await updateAddress(editingId, payload);
      } else {
        const response = await addAddress(payload);

        savedAddressId =
          response.address?._id ||
          response.data?._id ||
          response._id ||
          null;
      }

      setShowForm(false);
      setEditingId(null);
      setForm(initialForm);

      await fetchAddresses(savedAddressId);
    } catch (err) {
      setError(
        err.response?.data?.message ||
          "Unable to save address"
      );
    } finally {
      setSaving(false);
    }
  };

  // =====================================
  // SET DEFAULT ADDRESS
  // =====================================

  const handleDefault = async (address) => {
    try {
      setError("");

      await setDefaultAddress(address._id);

      await fetchAddresses(address._id);
    } catch (err) {
      setError(
        err.response?.data?.message ||
          "Unable to select address"
      );
    }
  };

  return (
    <section className="bg-white rounded-[30px] shadow-sm border border-gray-100 p-6 lg:p-8">
      <div className="flex flex-wrap justify-between items-center gap-4 mb-8">
        <div>
          <span className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
            Delivery Details
          </span>

          <h2 className="mt-4 text-3xl font-bold text-gray-900">
            Delivery Address
          </h2>

          <p className="mt-2 text-gray-500">
            Select where you want your order delivered.
          </p>
        </div>

        <button
          type="button"
          onClick={openAddForm}
          className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-xl font-semibold"
        >
          <Plus size={18} />
          Add Address
        </button>
      </div>

      {error && (
        <p className="mb-5 rounded-xl bg-red-50 text-red-600 p-3 text-sm">
          {error}
        </p>
      )}

      {loading ? (
        <div className="flex justify-center py-10 text-green-600">
          <Loader2 className="animate-spin" size={30} />
        </div>
      ) : addresses.length === 0 ? (
        <div className="text-center py-8 bg-gray-50 rounded-2xl">
          <MapPin className="mx-auto text-green-600" size={35} />

          <p className="mt-3 font-semibold text-gray-800">
            No saved address found
          </p>

          <p className="text-sm text-gray-500 mt-1">
            Add your delivery address to continue.
          </p>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 gap-4">
          {addresses.map((address) => {
            const active = selectedAddress?._id === address._id;

            return (
              <div
                key={address._id}
                className={`rounded-2xl border-2 p-5 transition ${
                  active
                    ? "border-green-600 bg-green-50"
                    : "border-gray-200"
                }`}
              >
                <button
                  type="button"
                  onClick={() => onAddressSelect(address)}
                  className="w-full text-left"
                >
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2 font-bold text-gray-900">
                      {address.addressType === "Work" ? (
                        <Building2 className="text-green-600" size={19} />
                      ) : (
                        <Home className="text-green-600" size={19} />
                      )}

                      {address.addressType}
                    </div>

                    {active && (
                      <CheckCircle2 className="text-green-600" size={22} />
                    )}
                  </div>

                  <p className="mt-4 font-semibold text-gray-900">
                    {address.fullName}
                  </p>

                  <p className="text-sm text-gray-600 mt-1">
                    {address.phone}
                  </p>

                  <p className="text-sm text-gray-600 mt-2 leading-6">
                    {address.houseNo}, {address.area}
                    {address.landmark && `, ${address.landmark}`}
                    <br />
                    {address.city}, {address.state} - {address.pincode}
                  </p>
                </button>

                <div className="flex flex-wrap gap-4 mt-4 pt-4 border-t border-gray-200">
                  <button
                    type="button"
                    onClick={() => openEditForm(address)}
                    className="flex items-center gap-1 text-sm font-semibold text-green-700"
                  >
                    <Pencil size={15} />
                    Edit
                  </button>

                  {!address.isDefault && (
                    <button
                      type="button"
                      onClick={() => handleDefault(address)}
                      className="text-sm font-semibold text-gray-600"
                    >
                      Set Default
                    </button>
                  )}

                  {address.isDefault && (
                    <span className="text-xs font-semibold text-green-700">
                      Default Address
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {showForm && (
        <div className="mt-8 border-t border-gray-200 pt-7">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold text-gray-900">
              {editingId ? "Edit Address" : "Add New Address"}
            </h3>

            <button
              type="button"
              onClick={() => setShowForm(false)}
              className="p-2 rounded-full bg-gray-100"
            >
              <X size={20} />
            </button>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="relative">
                <User className="absolute left-4 top-4 text-green-600" size={19} />

                <input
                  name="fullName"
                  value={form.fullName}
                  onChange={handleChange}
                  placeholder="Full Name"
                  required
                  className="w-full border border-gray-200 rounded-xl pl-12 pr-4 py-4 outline-none focus:border-green-600"
                />
              </div>

              <div className="relative">
                <Phone className="absolute left-4 top-4 text-green-600" size={19} />

                <input
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Mobile Number"
                  pattern="[0-9]{10}"
                  maxLength={10}
                  required
                  className="w-full border border-gray-200 rounded-xl pl-12 pr-4 py-4 outline-none focus:border-green-600"
                />
              </div>

              <div className="relative md:col-span-2">
                <MapPin className="absolute left-4 top-4 text-green-600" size={19} />

                <input
                  name="houseNo"
                  value={form.houseNo}
                  onChange={handleChange}
                  placeholder="House No / Building / Street"
                  required
                  className="w-full border border-gray-200 rounded-xl pl-12 pr-4 py-4 outline-none focus:border-green-600"
                />
              </div>

              <input
                name="area"
                value={form.area}
                onChange={handleChange}
                placeholder="Area"
                required
                className="border border-gray-200 rounded-xl px-4 py-4 outline-none focus:border-green-600"
              />

              <input
                name="landmark"
                value={form.landmark}
                onChange={handleChange}
                placeholder="Nearby Landmark (Optional)"
                className="border border-gray-200 rounded-xl px-4 py-4 outline-none focus:border-green-600"
              />

              <input
                name="city"
                value={form.city}
                onChange={handleChange}
                placeholder="City"
                required
                className="border border-gray-200 rounded-xl px-4 py-4 outline-none focus:border-green-600"
              />

              <input
                name="state"
                value={form.state}
                onChange={handleChange}
                placeholder="State"
                required
                className="border border-gray-200 rounded-xl px-4 py-4 outline-none focus:border-green-600"
              />

              <input
                name="pincode"
                value={form.pincode}
                onChange={handleChange}
                placeholder="Pincode"
                pattern="[0-9]{6}"
                maxLength={6}
                required
                className="border border-gray-200 rounded-xl px-4 py-4 outline-none focus:border-green-600"
              />

              <div className="md:col-span-2">
                <p className="font-semibold text-gray-800 mb-3">
                  Address Type
                </p>

                <div className="flex gap-3">
                  {["Home", "Work", "Other"].map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() =>
                        setForm((prev) => ({
                          ...prev,
                          addressType: type,
                        }))
                      }
                      className={`px-5 py-3 rounded-xl font-semibold ${
                        form.addressType === type
                          ? "bg-green-600 text-white"
                          : "bg-gray-100 text-gray-700"
                      }`}
                    >
                      {type === "Work" ? (
                        <Building2 className="inline mr-1" size={16} />
                      ) : type === "Other" ? (
                        <Landmark className="inline mr-1" size={16} />
                      ) : (
                        <Home className="inline mr-1" size={16} />
                      )}
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              <label className="md:col-span-2 flex items-center gap-3 text-sm text-gray-700">
                <input
                  type="checkbox"
                  name="isDefault"
                  checked={form.isDefault}
                  onChange={handleChange}
                  className="accent-green-600 w-4 h-4"
                />
                Set as default address
              </label>
            </div>

            <button
              type="submit"
              disabled={saving}
              className="mt-6 w-full md:w-auto flex justify-center items-center gap-2 bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white px-8 py-4 rounded-xl font-semibold"
            >
              {saving && <Loader2 className="animate-spin" size={18} />}
              {editingId ? "Update Address" : "Save Address"}
            </button>
          </form>
        </div>
      )}
    </section>
  );
}
