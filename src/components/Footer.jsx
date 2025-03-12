
const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="text-xl font-bold text-purple-500">Somesh.dev</span>
          </div>

          <div className="flex flex-col md:flex-row items-center">
            <p className="text-gray-400 text-sm mb-2 md:mb-0 md:mr-4">
              &copy; {currentYear} Somesh Chincholkar. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

