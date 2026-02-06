function UserProfile() {
  return (
    <div className="user-profile mx-auto my-20 max-w-sm rounded-lg bg-gray-100 p-8 shadow-lg">
      <img
        src="https://as2.ftcdn.net/v2/jpg/10/91/01/27/1000_F_1091012713_TPfuvkjNYjX53QDLW5lpPhzI1FUBKapt.jpg"
        alt="User"
        className="h-36 w-36 rounded-full object-cover"
      />
      <h1 className="my-4 text-xl text-blue-800">John Doe</h1>
      <p className="text-base text-gray-600">
        Developer at Example Co. Loves to write code and explore new
        technologies.
      </p>
    </div>
  );
}

export default UserProfile;
