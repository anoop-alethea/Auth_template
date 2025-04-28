import { useState, useEffect } from "react";
import { useAuth } from "../../hooks/useAuth";
import { useProfile } from "../../hooks/useProfile";

const EditProfile: React.FC = () => {
  const { user } = useAuth();
  const { profile, fetchProfile, updateProfile } = useProfile();
  const [fullName, setFullName] = useState("");

  useEffect(() => {
    if (user) {
      fetchProfile(user.id);
    }
  }, [user, fetchProfile]);

  useEffect(() => {
    if (profile?.fullName) {
      setFullName(profile.fullName);
    }
  }, [profile]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;
    try {
      await updateProfile({ ...user, fullName });
      alert("Profile updated!");
    } catch (error) {
      console.error(error);
      alert("Failed to update profile.");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-12 space-y-6">
      <h1 className="text-2xl font-bold text-center">Edit Profile</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Full Name"
          className="border p-2"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
        />
        <button type="submit" className="bg-blue-700 text-white p-2 rounded">
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default EditProfile;
