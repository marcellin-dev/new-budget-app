export default function NoPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center relative">
      <header className="bg-blue-600 w-full py-4 text-white text-center relative">
        <h1 className="text-4xl font-bold absolute top-0 w-full">
          Budget Manager
        </h1>
        <div className="mt-12">
          <img
            src="https://www.google.com/imgres?q=hjg&imgurl=https%3A%2F%2Flookaside.fbsbx.com%2Flookaside%2Fcrawler%2Fmedia%2F%3Fmedia_id%3D100064321583840&imgrefurl=https%3A%2F%2Fwww.facebook.com%2FHJG.Historic.Jetliners.Group%2F&docid=juRVYlSbt1s5RM&tbnid=NbBLGo0C76kdAM&vet=12ahUKEwjH1vyv8eyGAxULZ0EAHeP5B_MQM3oECEUQAA..i&w=1920&h=1080&hcb=2&ved=2ahUKEwjH1vyv8eyGAxULZ0EAHeP5B_MQM3oECEUQAA"
            alt="Budget Manager"
            className="w-full h-64 object-cover"
          />
        </div>
      </header>
      <main className="flex flex-col items-center mt-10">
        <h2 className="text-2xl mb-6">Welcome to Budget Manager</h2>
        <p className="text-center text-gray-700 mb-4">
          Keep track of your expenses and manage your budget efficiently.
        </p>
        <button className="bg-blue-600 text-white py-2 px-4 rounded shadow-lg hover:bg-blue-700 transition duration-200">
          Get Started
        </button>
      </main>
      <footer className="absolute bottom-0 w-full py-4 bg-gray-800 text-white text-center">
        <p>&copy; 2024 Budget Manager. All rights reserved.</p>
      </footer>
    </div>
  );
}
