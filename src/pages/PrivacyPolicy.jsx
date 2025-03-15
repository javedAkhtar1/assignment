import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function PrivacyPolicy() {
  return (
    <>
      <Navbar />
      <div className="mt-[5.5rem] px-3 mb-20 md:px-12 lg:px-24">
        <h1 className="font-bold text-center text-3xl font-Lato mb-2">Privacy Policy</h1>
        <h2 className="text-center text-sm font-Lato text-gray-600">Last Updated: 01/03/2025</h2>

        <ol className="list-decimal list-inside mt-6 space-y-6">
          <li>
            <h3 className="font-semibold text-lg">Information We Collect</h3>
            <p className="text-gray-700 mt-1">
              We may collect various types of information, including personal, 
              non-personal, and usage data when you interact with our services. 
              This may include but is not limited to your name, email, and device 
              information.
            </p>
          </li>
          <li>
            <h3 className="font-semibold text-lg">How We Use Your Information</h3>
            <p className="text-gray-700 mt-1">
              The information we collect may be used to improve our services, 
              provide personalized experiences, and enhance security. We may also 
              use your data for communication, analytics, and compliance purposes.
            </p>
          </li>
          <li>
            <h3 className="font-semibold text-lg">Data Sharing & Disclosure</h3>
            <p className="text-gray-700 mt-1">
              We do not sell or rent your personal information. However, we may 
              share it with trusted third-party services for operational, legal, 
              or security reasons.
            </p>
          </li>
          <li>
            <h3 className="font-semibold text-lg">Cookies & Tracking Technologies</h3>
            <p className="text-gray-700 mt-1">
              Our service may use cookies, analytics tools, and tracking 
              technologies to enhance user experience, track usage patterns, and 
              deliver relevant content.
            </p>
          </li>
          <li>
            <h3 className="font-semibold text-lg">Data Security</h3>
            <p className="text-gray-700 mt-1">
              We take reasonable measures to protect your data from unauthorized 
              access, misuse, or disclosure. However, no method of transmission 
              over the internet is entirely secure.
            </p>
          </li>
          <li>
            <h3 className="font-semibold text-lg">Your Rights & Choices</h3>
            <p className="text-gray-700 mt-1">
              Depending on your location, you may have rights regarding data 
              access, correction, deletion, or opting out of certain data usage 
              practices. You can contact us for any privacy-related concerns.
            </p>
          </li>
          <li>
            <h3 className="font-semibold text-lg">Changes to this Policy</h3>
            <p className="text-gray-700 mt-1">
              We may update this Privacy Policy from time to time. Any changes 
              will be reflected on this page, and continued use of our services 
              constitutes acceptance of the updated policy.
            </p>
          </li>
          <li>
            <h3 className="font-semibold text-lg">Contact Us</h3>
            <p className="text-gray-700 mt-1">
              If you have any questions about this Privacy Policy, feel free to 
              reach out to us at [your contact email].
            </p>
          </li>
        </ol>
      </div>
      <Footer />
    </>
  );
}

export default PrivacyPolicy;
