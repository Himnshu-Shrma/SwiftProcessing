
import Image from 'next/image';

export default function Home() {
  return (
    <main>
      <section className="relative h-screen flex items-center justify-center bg-secondary">
        <div className="absolute inset-0">
          <Image
            src="https://picsum.photos/1920/1080" // Replace with your image
            alt="Medical Billing Hero"
            layout="fill"
            objectFit="cover"
            className="opacity-30"
          />
        </div>
        <div className="relative text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-primary">
            Welcome to MediBill Solutions
          </h1>
          <p className="mt-4 text-md md:text-xl text-primary">
            Your Trusted Partner for Medical Billing Services
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-8">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Replace with actual service cards */}
            <div className="bg-white rounded-lg shadow-md p-4">
              <h3 className="text-xl font-semibold mb-2">Service 1</h3>
              <p>Description of service 1.</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-4">
              <h3 className="text-xl font-semibold mb-2">Service 2</h3>
              <p>Description of service 2.</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-4">
              <h3 className="text-xl font-semibold mb-2">Service 3</h3>
              <p>Description of service 3.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}


    