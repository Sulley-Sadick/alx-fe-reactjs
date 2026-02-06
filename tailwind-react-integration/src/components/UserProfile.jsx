function UserProfile() {
  return (
    <div className="user-profile mx-auto my-20 max-w-xs rounded-lg bg-gray-100 shadow-lg hover:shadow-xl sm:p-4 md:max-w-sm md:p-8">
      <img
        src="https://as2.ftcdn.net/v2/jpg/10/91/01/27/1000_F_1091012713_TPfuvkjNYjX53QDLW5lpPhzI1FUBKapt.jpg"
        alt="User"
        className="rounded-full object-cover transition-transform duration-300 ease-in-out hover:scale-110 sm:h-24 sm:w-24 md:h-36 md:w-36"
      />
      <h1 className="my-4 text-blue-800 hover:text-blue-500 sm:text-lg md:text-xl">
        John Doe
      </h1>
      <p className="text-gray-600 sm:text-sm md:text-base">
        Developer at Example Co. Loves to write code and explore new
        technologies.
      </p>
    </div>
  );
}

export default UserProfile;
