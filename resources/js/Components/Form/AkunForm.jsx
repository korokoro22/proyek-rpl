import { Link } from '@inertiajs/react'
import React from 'react'

const AkunForm = () => {
  return (
    <div className="flex w-full justify-center items-center py-10 font-inter">
            <div className="lg:w-[55em] md:h-[23em] md:w-[45em] h-[22em] w-[21em] bg-[#E9E9E9] m-auto rounded-lg">
                <form action="" className="">
                    <div className="lg:w-[50em] md:w-[40em] w-[20em]  m-auto md:mt-10 mt-10 flex flex-col gap-y-3">
                        <h1 className="md:text-4xl text-3xl font-bold  color-black">
                            Edit Akun
                        </h1>
                        
                        <div className="">
                            <label
                                htmlFor=""
                                className="pl-1 font-bold text-lg"
                            >
                                Email
                            </label>
                            <input
                                type="text"
                                placeholder="Email"
                                className="input input-bordered  md:h-[3.5em] border-[#D1D1D1] w-full mt-1 "
                            />
                        </div>

                        <div className="">
                            <label
                                htmlFor=""
                                className="pl-1 font-bold text-lg"
                            >
                                Password
                            </label>
                            <input
                                type="password"
                                placeholder="Password"
                                className="input input-bordered  md:h-[3.5em] border-[#D1D1D1] w-full mt-1 "
                            />
                        </div>

                        <Link href='/user-akun'>
                        <button className="btn bg-[#F3D457] hover:bg-[#F3D457] mt-2 text-white text-lg w-full ">
                            Submit
                        </button>
                        </Link>
                        
                    </div>
                </form>
            </div>
        </div>
  )
}

export default AkunForm