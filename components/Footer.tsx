import React from "react";
import Language from "./Language";

function Footer() {
  return (
    <div>
      <footer className="gray-border">
        <div className="max-w-[1000px] text-white underline py-[70px] px-5 md:px-[45px] w-[90%] mx-auto">
          <h2 className="pb-5 cursor-pointer">Questions? Contact Us</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 text-[12px] md:text-[13px]">
            <div className="text-sm">
              <div className=" cursor-pointer">FAQ</div>
              <div className=" cursor-pointer">Investor Relations</div>
              <div className=" cursor-pointer">Privacy</div>
              <div className=" cursor-pointer">Speed Test</div>
              {/* <Language /> */}
            </div>
            <div className="text-sm">
              <div className=" cursor-pointer">Help Center</div>
              <div className=" cursor-pointer">Jobs</div>
              <div className=" cursor-pointer">Cookie Preferences</div>
              <div className=" cursor-pointer">Legal Notices</div>
            </div>
            <div className="text-sm">
              <div className="footer-item">Account</div>
              <div className="footer-item">Ways to Watch</div>
              <div className="footer-item">Corporate Information</div>
              <div className="footer-item">Only on Netflix</div>
            </div>
            <div className="text-sm">
              <div className="footer-item">Media Center</div>
              <div className="footer-item">Terms of use</div>
              <div className="footer-item">Contact Us</div>
            </div>
          </div>
          <h2 className="pt-5 text-[12px] md:text-[13px]">Netflix Azerbaijan</h2>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
