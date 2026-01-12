// Simulates an API call to fetch current user
// In a real app, this would be an actual API endpoint

const mockUser = {
  id: 1,
  name: "Jane Smith",
  email: "jane.smith@example.com",
  role: "Admin",
  avatar: "https://i.pravatar.cc/150?img=5",
  joinedAt: "2023-01-15",
};

export async function fetchCurrentUser() {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 800));

  // Simulate occasional errors (uncomment to test error handling)
  if (Math.random() > 0.8) {
    throw new Error("Failed to fetch user data");
  }

  return mockUser;
}

export async function updateUser(updates) {
  await new Promise((resolve) => setTimeout(resolve, 500));
  return { ...mockUser, ...updates };
}
