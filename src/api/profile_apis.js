
import api from "@/api/axios";

// ==========================================
// GET CUSTOMER PROFILE
// ==========================================
export const getUserProfile = async () => {
  const response = await api.get("/user/profile");
  return response.data;
};

// ==========================================
// UPDATE CUSTOMER PROFILE
// ==========================================
export const updateUserProfile = async (profileData) => {
  const response = await api.put("/user/profile", profileData);
  return response.data;
};

// ==========================================
// UPLOAD CUSTOMER PROFILE IMAGE
// ==========================================
export const uploadProfileImage = async (imageFile) => {
  if (!imageFile) {
    throw new Error("Please select an image.");
  }

  const formData = new FormData();
  formData.append("profileImage", imageFile);

  const response = await api.post(
    "/user/profile/image",
    formData
  );

  return response.data;
};
