import { useForm } from "react-hook-form";

const ProfileForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Handle form submission logic here
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* User Name */}
        <div>
          <label className="block text-sm font-medium">User Name</label>
          <input
            type="text"
            {...register("username", { required: "User Name is required" })}
            className="w-full border border-gray-300 rounded px-3 py-2 bg-[rgba(239,240,243,1)] outline-none "
          />
          {errors.username && (
            <p className="text-red-500 text-xs mt-1">
              {errors.username.message}
            </p>
          )}
        </div>

        {/* Phone Number */}
        <div>
          <label className="block text-sm font-medium">Phone Number</label>
          <input
            type="tel"
            {...register("phone", { required: "Phone Number is required" })}
            className="w-full border border-gray-300 rounded px-3 py-2 bg-[rgba(239,240,243,1)] outline-none"
          />
          {errors.phone && (
            <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium">Email</label>
          <input
            type="email"
            {...register("email", { required: "Email is required" })}
            className="w-full border border-gray-300 rounded px-3 py-2 bg-[rgba(239,240,243,1)] outline-none"
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* Country */}
        <div>
          <label className="block text-sm font-medium">Country</label>
          <select
            {...register("country", { required: "Country is required" })}
            className="w-full border border-gray-300 rounded px-3 py-2 bg-[rgba(239,240,243,1)] outline-none"
          >
            <option value="egypt">Egypt</option>
            <option value="saudi-arabia">Saudi Arabia</option>
            <option value="uae">United Arab Emirates</option>
            <option value="usa">USA</option>
            <option value="uk">United Kingdom</option>
          </select>
          {errors.country && (
            <p className="text-red-500 text-xs mt-1">
              {errors.country.message}
            </p>
          )}
        </div>

        {/* Password */}
        <div>
          <label className="block text-sm font-medium">Password</label>
          <input
            type="password"
            {...register("password", { required: "Password is required" })}
            className="w-full border border-gray-300 rounded px-3 py-2 bg-[rgba(239,240,243,1)] outline-none"
          />
          {errors.password && (
            <p className="text-red-500 text-xs mt-1">
              {errors.password.message}
            </p>
          )}
        </div>

        {/* Language */}
        <div>
          <label className="block text-sm font-medium">Language</label>
          <select
            {...register("language", { required: "Language is required" })}
            className="w-full border border-gray-300 rounded px-3  py-2 bg-[rgba(239,240,243,1)] outline-none"
          >
            <option value="arabic">Arabic</option>
            <option value="english">English</option>
            <option value="french">French</option>
          </select>
          {errors.language && (
            <p className="text-red-500 text-xs mt-1">
              {errors.language.message}
            </p>
          )}
        </div>
        
      </div>

      {/* Submit Button */}
      <div className="pt-4">
        <button
          type="submit"
          className="bg-[rgba(0,183,193,1)] text-white px-6 py-2 rounded-lg"
        >
          Save Changes
        </button>
      </div>
    </form>
  );
};

export default ProfileForm;
