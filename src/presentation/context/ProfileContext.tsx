import React, { createContext, useContext, useState } from "react";
import { ProfileUseCase } from "../../core/usecases/ProfileUseCase";
import { SupabaseProfileService } from "../../infrastructure/services/SupabaseProfileService";
import { User } from "../../core/entities/User";

interface ProfileContextType {
  profile: User | null;
  fetchProfile: (userId: string) => Promise<void>;
  updateProfile: (user: User) => Promise<void>;
}

const ProfileContext = createContext<ProfileContextType | undefined>(undefined);

const profileUseCase = new ProfileUseCase(new SupabaseProfileService());

export const ProfileProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [profile, setProfile] = useState<User | null>(null);

  const fetchProfile = async (userId: string) => {
    const userProfile = await profileUseCase.fetchProfile(userId);
    setProfile(userProfile);
  };

  const updateProfile = async (user: User) => {
    const updatedUser = await profileUseCase.updateProfile(user);
    setProfile(updatedUser);
  };

  return (
    <ProfileContext.Provider value={{ profile, fetchProfile, updateProfile }}>
      {children}
    </ProfileContext.Provider>
  );
};

export const useProfileContext = () => {
  const context = useContext(ProfileContext);
  if (!context) {
    throw new Error("useProfileContext must be used within a ProfileProvider");
  }
  return context;
};
