import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function TermsAndConditions() {
  return (
    <>
      <Navbar />
      <div className="mt-[5.5rem] mb-20 px-3 md:px-12 lg:px-24">
        <h1 className="font-bold text-center text-3xl font-Lato mb-2">Terms & Conditions</h1>
        <h2 className="text-center text-sm font-Lato text-gray-600">Last Updated: 01/03/2025</h2>

        <ol className="list-decimal mt-6 space-y-6">
          <li>
            <h3 className="font-semibold text-lg">Acceptance of Terms</h3>
            <p className="text-gray-700 mt-1">
              By using our Service, you acknowledge that you have read,
              understood, and agree to these Terms. If you do not agree, please
              discontinue use immediately.
            </p>
          </li>
          <li>
            <h3 className="font-semibold text-lg">Changes to Terms</h3>
            <p className="text-gray-700 mt-1">
              We reserve the right to modify or update these Terms at any time
              without prior notice. Continued use of the Service constitutes
              acceptance of the updated Terms.
            </p>
          </li>
          <li>
            <h3 className="font-semibold text-lg">Use of the Service</h3>
            <p className="text-gray-700 mt-1">
              You agree to use the Service for lawful purposes only. We may
              restrict, suspend, or terminate access to the Service at our
              discretion. Certain features may be subject to eligibility
              requirements, verification, or additional conditions.
            </p>
          </li>
          <li>
            <h3 className="font-semibold text-lg">User Content</h3>
            <p className="text-gray-700 mt-1">
              You retain ownership of any content you submit, but grant us a
              non-exclusive, worldwide license to use, display, and distribute
              such content. We are not responsible for the accuracy, legality,
              or appropriateness of user-generated content.
            </p>
          </li>
          <li>
            <h3 className="font-semibold text-lg">Third-Party Links & Services</h3>
            <p className="text-gray-700 mt-1">
              Our Service may contain links to third-party websites or services. 
              We are not responsible for the content, policies, or actions of 
              any third-party entities.
            </p>
          </li>
          <li>
            <h3 className="font-semibold text-lg">Indemnification</h3>
            <p className="text-gray-700 mt-1">
              You agree to indemnify and hold us harmless from any claims, losses, 
              liabilities, or expenses resulting from your use of the Service or 
              violation of these Terms.
            </p>
          </li>
          <li>
            <h3 className="font-semibold text-lg">Governing Law</h3>
            <p className="text-gray-700 mt-1">
              These Terms shall be governed by and interpreted in accordance 
              with the laws of [Your Jurisdiction]. Any disputes shall be 
              resolved in the courts.
            </p>
          </li>
        </ol>
      </div>
      <Footer />
    </>
  );
}

export default TermsAndConditions;
