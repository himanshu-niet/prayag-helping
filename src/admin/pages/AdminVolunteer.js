import React from 'react'
import AdminNavbar from '../components/AdminNavbar';
import VolunteerTr from '../components/VolunteerTr';
const AdminVolunteer = () => {
  return (
    <div className="font-manrope overflow-hidden">
      <AdminNavbar page="Manage Volunteer" />
      <div className="w-[100%]  mt-[60px] py-[4%] md:px-[5%] px-3">
        <h1 className="text-center text-3xl font-semibold ">Volunteer</h1>
        <div className="bg-white my-8">
          <div class="flex flex-col">
            <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div class=" inline-block min-w-full sm:px-6 lg:px-8">
                <div class="overflow-hidden">
                  <table class="min-w-full">
                    <thead class="border-b bg-gray-800 text-white">
                      <tr>
                        <th scope="col" className="py-3">
                          Id
                        </th>
                        <th scope="col" className="py-3">
                          Name
                        </th>
                        <th scope="col" className="py-3">
                          Phone
                        </th>
                        <th scope="col" className="py-3">
                          Email
                        </th>
                        <th scope="col" className="py-3">
                          DOB
                        </th>
                        <th scope="col" className="py-3">
                          Address
                        </th>
                        <th scope="col" className="py-3">
                          Position
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <VolunteerTr />
                      <VolunteerTr />
                      <VolunteerTr />
                      <VolunteerTr />
                      <VolunteerTr />
                      <VolunteerTr />
                      <VolunteerTr />
                      <VolunteerTr />
                      <VolunteerTr />
                      <VolunteerTr />
                      <VolunteerTr />
                      <VolunteerTr />
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminVolunteer