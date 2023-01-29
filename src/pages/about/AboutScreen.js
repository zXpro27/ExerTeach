import React from "react";
import PageTitle from "../../components/Common/PageTitle";

function AboutScreen() {
  return (
    <div>
      <div className="p-4">
        <div className="bg-white rounded-xl p-3 font-title">
          <PageTitle title="About Me" />
          <div className="mt-4 mb-5 flex flex-row items-center">
            <img
              src="https://avatars.githubusercontent.com/zXpro27"
              className="h-12 mr-3 rounded-full"
              alt="Git"
            />
            <div>
              <a
                href="https://github.com/zXpro27"
                target={"_blank"}
                className="underline cursor-pointer"
                rel="noreferrer"
              >
                Hi, I'm Aldiansyah
              </a>
              <h1> I also open to discussions and free talk</h1>
            </div>
          </div>

          <PageTitle title="Receipt Maker" />
          <div className="mt-2 pl-4 text-sm">
            <ul class="list-disc">
              <li> Can Easily Pre-Manage Your Products</li>
              <li> Can Easily Pre-Manage Your Clients</li>
              <li> Can Export PDF </li>
              <li> Can Export Image </li>
            </ul>
          </div>
          <div className="font-title mt-3 mb-5">
            <div>
              🤝 I’m looking for help with JS dev to build Many My Free Softwares
              to help people who can't afford !!
            </div>
            <div>
              📫 How to reach me{" "}
              <a
                href="mailto:alditarakez.dev@gmail.com"
                className="underline cursor-pointer"
              >
                Alditarakez.dev@gmail.com
              </a>{" "}
              (or){" "}
              <a
                href="https://www.instagram.com/alditarakez.dev/"
                target={"_blank"}
                className="underline cursor-pointer"
                rel="noreferrer"
              >
                Instagram
              </a>
            </div>
            <div>
              <span>🎁 </span>
              <a
                href="https://github.com/zXpro27/ExerTeach"
                className="underline cursor-pointer"
                target={"_blank"}
                rel="noreferrer"
              >
                {" "}
                Repo Link Here
              </a>
            </div>
          </div>

          <PageTitle title="Build By" />
          <div className="mt-2 mb-5 pl-4 text-sm">
            <ul class="list-disc">
              <li> Framer Motion For each component Animation</li>
              <li> Lottiefiles For Dashboard Widgets Icons</li>
              <li> IndexedDB for Local Storage </li>
              <li> ReactJS </li>
            </ul>
          </div>

          <PageTitle title="Contact" />
          <div className="mt-2 pl-1 text-sm">
            <a
              href="https://wa.me/+6282114024096?text=Hi%2C%20Saya%20dari%20ExerTeach"
              className="underline cursor-pointer"
              target={"_blank"}
              rel="noreferrer"
            >
              {" "}
              +62 82114024096
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AboutScreen;
