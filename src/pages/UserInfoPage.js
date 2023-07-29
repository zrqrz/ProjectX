import React from "react";
import React, { useState } from "react";
import './App.css';

function UserInfoPage() {
  const [avatar, setAvatar] = useState("https://bootdey.com/img/Content/avatar/avatar6.png");

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setAvatar(URL.createObjectURL(file));
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row md:items-start md:space-x-8">
        <div className="w-full md:w-1/3 mx-auto">
          <div className="bg-gray-100 p-4 rounded-md my-4 text-center">
            <img
              src={avatar}
              className="rounded-full w-24 h-24 mx-auto"
              alt="User avatar"
            />
            <input
              type="file"
              className="form-input mt-4 w-full"
              accept="image/*"
              onChange={handleAvatarChange}
            />
          </div>
        </div>
        <div className="w-full md:w-2/3 mx-auto">
          <form>
            <div className="bg-gray-100 p-4 rounded-md my-4">
              <h4 className="text-lg font-bold mb-4">User info</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block">Location</label>
                  <select className="form-select mt-1 w-full">
                    <option defaultValue>Select country</option>
                    <option>Canada</option>
                    <option>China</option>
                    <option>United States</option>
                  </select>
                </div>
                <div>
                  <label className="block">Full name</label>
                  <input type="text" className="form-input mt-1 w-full" />
                </div>
                <div>
                  <label className="block">Position</label>
                  <input type="text" className="form-input mt-1 w-full" />
                </div>
              </div>
            </div>

            <div className="bg-gray-100 p-4 rounded-md my-4">
              <h4 className="text-lg font-bold mb-4">Contact info</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block">Work number</label>
                  <input type="tel" className="form-input mt-1 w-full" />
                </div>
                <div>
                  <label className="block">Mobile number</label>
                  <input type="tel" className="form-input mt-1 w-full" />
                </div>
                <div>
                  <label className="block">E-mail address</label>
                  <input type="email" className="form-input mt-1 w-full" />
                </div>
              </div>
            </div>

            <div className="bg-gray-100 p-4 rounded-md my-4">
              <h4 className="text-lg font-bold mb-4">Security</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block">Current password</label>
                  <input type="password" className="form-input mt-1 w-full" />
                </div>
                <div>
                  <label className="block">New password</label>
                  <input type="password" className="form-input mt-1 w-full" />
                </div>
                <div className="col-span-2 flex items-center mt-4">
                  <input
                    className="form-checkbox mr-2"
                    type="checkbox"
                    id="checkbox_1"
                  />
                  <label htmlFor="checkbox_1">
                    Make this account public
                  </label>
                </div>
                <div className="col-span-2 flex space-x-4 mt-8">
                  <button type="submit" className="py-2 px-4 bg-blue-600 text-white rounded">
                    Submit
                  </button>
                  <button type="reset" className="py-2 px-4 bg-gray-600 text-white rounded">
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UserInfoPage;
