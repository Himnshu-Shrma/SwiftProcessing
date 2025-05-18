import headerImage from '@/components/ui/medBill.jpg'
import Image from 'next/image';

export default function Home() {
  return (
    <main>
      <section className="relative h-screen flex items-center justify-center bg-secondary">
        <div className="absolute inset-0">
          <Image
            src={headerImage} // Replace with your image
            alt="Medical Billing Hero"
            layout="fill"
            objectFit="cover"
            className="opacity-70"
          />
        </div>
        <div className="relative text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-primary">
            Welcome to Swift Processing Solutions
          </h1>
          <p className="mt-4 text-md md:text-xl text-primary">
            Your Trusted Partner for Medical Billing Services
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-8">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-12 px-4 bg-gray-50">
            {/* Service: Payment Posting */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="https://cdn.pixabay.com/photo/2018/03/23/07/28/medical-3256210_1280.jpg"
                alt="Payment Posting"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">Payment Posting</h3>
                <p>
                  Accurate and timely payment mapping of insurance and patient payments to prevent revenue leakage and maintain clear financial visibility.
                </p>
              </div>
            </div>

            {/* Service: Claim Filing */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="https://cdn.pixabay.com/photo/2018/05/08/08/35/business-3385076_1280.jpg"
                alt="Claim Filing"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">Claim Filing</h3>
                <p>
                  Error-free submission of claims to private and government payers, reducing denials and speeding up reimbursements.
                </p>
              </div>
            </div>

            {/* Service: Credentialing */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="https://cdn.pixabay.com/photo/2021/10/10/08/15/doctor-6695964_1280.jpg"
                alt="Credentialing"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">Credentialing</h3>
                <p>
                  Fast and accurate provider enrollment with insurers to start billing patients without delay.
                </p>
              </div>
            </div>

            {/* Service: Charge Entry */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="https://cdn.pixabay.com/photo/2020/05/17/17/23/laptop-5180161_1280.jpg"
                alt="Charge Entry"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">Charge Entry</h3>
                <p>
                  We apply precise coding for services using CPT and ICD-10, ensuring clean claims and proper reimbursements.
                </p>
              </div>
            </div>

            {/* Service: AR Management */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="https://cdn.pixabay.com/photo/2016/11/29/12/54/analysis-1867539_1280.jpg"
                alt="Accounts Receivable"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">Accounts Receivable (AR)</h3>
                <p>
                  We monitor aging claims and follow up aggressively to minimize outstanding AR and maximize revenue collection.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}


