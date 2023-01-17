import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import HeroImage from "../../assests/images/h1_hero1.jpg";
import BgImage from "../../assests/images/bg1.jpg";

import Img1 from "../../assests/images/about.jpg";
import Img2 from '../../assests/images/services2.svg'
import Img3 from "../../assests/images/services1.svg";
import BgImg from "../../assests/images/section-bg2.jpg";
import JoinImg1 from "../../assests/images/joining1.jpg";
import JoinImg2 from "../../assests/images/joining2.jpg";


const HomePage = () => {
  return (
    <div className="font-manrope overflow-hidden">
      <Navbar />
      <main>
        <div
          className="lg:h-screen bg-cover h-96 relative"
          style={{ backgroundImage: `url(${HeroImage})` }}
        >
          <div className="lg:w-[45%] md:w-[60%] w-[80%] text-white lg:translate-y-[50%] md:translate-y-[30%] translate-x-[15%]  translate-y-[30%]">
            <h1 className="lg:text-6xl md:text-5xl text-3xl sm:text-5xl font-bold tracking-wider">
              Support a causes you care about
            </h1>
            <p className="my-6 font-medium tracking-wide lg:text-xl md:text-lg sm:text-lg text-sm">
              Sedac odio aliquet, fringilla odio eget, tincidunt nunc. Duis
              aliquet pulvinar ante tempor etiam lacus eros
            </p>

            <div className="text-center my-10 text-xl grid grid-cols-2 gap-4">
              <Link
                to="/"
                className="bg-primary hover:bg-secondary duration-500  py-3 text-white rounded-full font-semibold shadow-lg border border-1 "
              >
                DONATE
              </Link>

              <Link
                to="/"
                className="bg-primary hover:bg-secondary duration-500   py-3 text-white rounded-full font-semibold shadow-lg border border-1 "
              >
                JOIN
              </Link>
            </div>
          </div>
        </div>

        <div className=" py-[5%] px-[5%] bg-[#fcf8f9] grid grid-cols-1 md:grid-cols-2">
          <div className="lg:pr-12">
            <img className="w-[100%] rounded-lg" src={Img1} alt="img1" />
          </div>
          <div className="pl-5 md:pl-10 tracking-wider">
            <h1 className=" text-2xl md:text-4xl font-bold text-secondary mb-7 mt-7 md:mt-0">
              Who we are ?
            </h1>
            <div>
              <p className="text-md  md:text-lg text-secondary font-semibold">
                Sedac odio aliquet, fringilla odio eget, tincidunt nunc. Duis
                aliquet pulvinar ante tempor etiam lacus eros
              </p>
              <p className="text-md  md:text-lg text-secondary my-4">
                The legal definition of a charitable organization (and of
                charity) varies between countries and in some instances regions
                of the country. The regulation, the tax treatment, and the way
                in which charity law affects charitable organizations also vary.
              </p>
              <div className="my-9">
                <Link
                  to="/about"
                  className="text-sm bg-primary hover:bg-secondary duration-500 px-7  py-3 text-white rounded-full font-semibold shadow-lg "
                >
                  LEARN MORE
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div
          className="  text-white bg-cover grid md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 py-[5%] px-[7%] md:gap-5 gap-3"
          style={{ backgroundImage: `url(${BgImage})` }}
        >
          <div className="flex  md:mt-5 mt-3">
            <img
              className="md:h-[60px] h-[40px]"
              src="https://preview.colorlib.com/theme/chariter/assets/img/icon/count-icon1.svg"
              alt="img1"
            />
            <div className="ml-6 ">
              <h1 className="md:text-5xl text-3xl  font-bold mb-2">35+</h1>
              <p className="md:text-xl text-lg">Active Cases</p>
            </div>
          </div>
          <div className="flex md:mt-5 mt-3">
            <img
              className="md:h-[60px] h-[40px]"
              src="https://preview.colorlib.com/theme/chariter/assets/img/icon/count-icon2.svg"
              alt="img1"
            />
            <div className="ml-6">
              <h1 className="md:text-5xl text-3xl  font-bold mb-2">12M</h1>
              <p className="md:text-xl text-lg">People Joined</p>
            </div>
          </div>
          <div className="flex md:mt-5 mt-3">
            <img
              className="md:h-[60px] h-[40px]"
              src="https://preview.colorlib.com/theme/chariter/assets/img/icon/count-icon3.svg"
              alt="img1"
            />
            <div className="ml-6">
              <h1 className="md:text-5xl text-3xl  font-bold mb-2">200M</h1>
              <p className="md:text-xl text-lg">Cases every Year</p>
            </div>
          </div>
          <div className="flex md:mt-5 mt-3">
            <img
              className="md:h-[60px] h-[40px]"
              src="https://preview.colorlib.com/theme/chariter/assets/img/icon/count-icon4.svg"
              alt="img1"
            />
            <div className="ml-6 mb-5">
              <h1 className="md:text-5xl text-3xl  font-bold ">1200</h1>
              <p className="md:text-xl text-lg">People get help from us</p>
            </div>
          </div>
        </div>

        <div className="bg-white py-[10%] px-[5%] text-center">
          <h1 className="mt-4 text-3xl md:text-4xl font-bold text-secondary tracking-wide">
            We serve for peoples
          </h1>
          <div className="w-full ">
            <p className="mx-auto text-lg mt-5 tracking-wide text-[#6a6f86] max-w-[610px]">
              Sedac odio aliquet, fringilla odio eget, tincidunt nunc duis
              aliquet pulvinar ante.
            </p>
          </div>

          <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3 mt-10">
            <div className="p-3">
              <img
                className="h-[110px] w-[110px]  mx-auto my-5"
                src={Img2}
                alt="img"
              />
              <div>
                <h1 className="my-4 text-2xl font-semibold curser-pointer text-secondary hover:text-primary duration-500">
                  Pure Food & Water
                </h1>
                <p className="text-secondary text-gray-600">
                  Odio aliquet, fringilla odio eget, tincidunt nunc duis aliquet
                  pulvinar ante employees and organizations to support.
                </p>
              </div>
            </div>
            <div className="p-3">
              <img
                className="h-[110px] w-[110px] mx-auto my-5"
                src={Img2}
                alt="img"
              />
              <div>
                <h1 className="my-4 text-2xl font-semibold curser-pointer text-secondary hover:text-primary duration-500">
                  Health & Medicine
                </h1>
                <p className="text-secondary text-gray-600">
                  Odio aliquet, fringilla odio eget, tincidunt nunc duis aliquet
                  pulvinar ante employees and organizations to support.
                </p>
              </div>
            </div>
            <div className="p-3">
              <img
                className="h-[110px] w-[110px] mx-auto my-5"
                src={Img2}
                alt="img"
              />
              <div>
                <h1 className="my-4 text-2xl font-semibold curser-pointer text-secondary hover:text-primary duration-500">
                  Education
                </h1>
                <p className="text-secondary text-gray-600">
                  Odio aliquet, fringilla odio eget, tincidunt nunc duis aliquet
                  pulvinar ante employees and organizations to support.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="lg:h-screen bg-cover  grid md:grid-cols-2 grid-cols-1 py-[10%] px-[10%]"
          style={{ backgroundImage: `url(${BgImg})` }}
        >
          <div className="md:col-start-2 bg-white w-full py-5 px-6 rounded-lg shadow-lg">
            <h1 className="my-4 text-secondary text-3xl font-semibold">
              They Need Your Help
            </h1>
            <p className="text-gray-600 text-md  my-3">
              Sedac odio aliquet, fringilla odio eget, tincidunt nunc. Duis
              aliquet pulvinar ante tempor etiam lacus eros
            </p>
            <p className="text-gray-600 text-md my-3">
              Sedac odio aliquet, fringilla odio eget, tincidunt nunc. Duis
              aliquet pulvinar ante tempor etiam lacus eros
            </p>
            <div className="my-9">
              <Link
                to="/"
                className="bg-primary hover:bg-secondary duration-500  px-6 py-3 text-white rounded-full font-semibold shadow-lg "
              >
                Donate in a Case
              </Link>
            </div>
          </div>
        </div>

        <div className="bg-white grid lg:grid-cols-3 grid-cols-1 sm:grid-cols-2 py-[10%] px-[10%] gap-5">
          <div className="pr-5 text-center sm:text-left">
            <h1 className="text-5xl font-bold text-secondary mb-5 tracking-wide">
              Join with Us
            </h1>
            <p className="text-md text-secondary tracking-wide">
              The legal definition of a charitable organization (and of charity)
              varies between countries and in some instances regions of the
              country. The regulation, the tax treatment, and the way.
            </p>
            <div className="my-10">
              <Link
                to="/"
                className="bg-primary hover:bg-secondary duration-500  px-6 py-3 text-white rounded-full font-semibold shadow-lg "
              >
                Join Now
              </Link>
            </div>
          </div>
          <img className="rounded-lg" src={JoinImg1} alt="img" />
          <img className="rounded-lg" src={JoinImg2} alt="img" />
        </div>
      </main>
     
      <Footer />
    </div>
  );
}

export default HomePage;
