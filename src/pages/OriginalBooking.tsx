import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/common/PageHeader";

// ================= DATA =================

const brochureData = [
  {
    developerName: "DLF",
    project: "Camellias",
    category: "Residential",
    location: "Golf Course Road",
    brochure: "/brochures/camellias.pdf",
  },
  {
    developerName: "DLF",
    project: "The Arbour",
    category: "Residential",
    location: "Golf Course Road",
    brochure: "/brochures/arbour.pdf",
  },
  {
    developerName: "DLF",
    project: "The Magnolias",
    category: "Residential",
    location: "Golf Course Road",
    brochure: "/brochures/magnolias.pdf",
  },
  {
    developerName: "Godrej Properties",
    project: "Godrej Aria",
    category: "Residential",
    location: "Sector 33",
    brochure: "/brochures/godrej-aria.pdf",
  },
  {
    developerName: "Godrej Properties",
    project: "Godrej Meridien",
    category: "Residential",
    location: "Sector 103",
    brochure: "/brochures/godrej-meridien.pdf",
  },
  {
    developerName: "Tata Realty",
    project: "Raisina Residency",
    category: "Residential",
    location: "Sector 59",
    brochure: "/brochures/raisina.pdf",
  },
  {
    developerName: "M3M",
    project: "M3M Golf Estate",
    category: "Residential",
    location: "Sector 65",
    brochure: "/brochures/m3m-golf.pdf",
  },
  {
    developerName: "M3M",
    project: "M3M Altitude",
    category: "Commercial",
    location: "Sector 65",
    brochure: "/brochures/m3m-altitude.pdf",
  },
  {
    developerName: "Emaar",
    project: "Emaar Digital Greens",
    category: "Commercial",
    location: "Sector 62",
    brochure: "/brochures/emaar-digital.pdf",
  },
  {
    developerName: "Emaar",
    project: "Emaar Gurgaon Greens",
    category: "Residential",
    location: "Sector 102",
    brochure: "/brochures/emaar-greens.pdf",
  },
  {
    developerName: "Oberoi Realty",
    project: "Oberoi Esquire",
    category: "Residential",
    location: "Sector 58",
    brochure: "/brochures/oberoi-esquire.pdf",
  },
  {
    developerName: "Puri Constructions",
    project: "Puri The Diplomat",
    category: "Residential",
    location: "Sector 111",
    brochure: "/brochures/puri-diplomat.pdf",
  },
  {
    developerName: "Hero Homes",
    project: "Hero Homes 2",
    category: "Residential",
    location: "Sector 104",
    brochure: "/brochures/hero-homes.pdf",
  },
  {
    developerName: "Adani Realty",
    project: "Adani Samsara",
    category: "Residential",
    location: "Sector 60",
    brochure: "/brochures/adani-samsara.pdf",
  },
  {
    developerName: "Brigade Group",
    project: "Brigade Gateway",
    category: "Commercial",
    location: "Sector 62",
    brochure: "/brochures/brigade-gateway.pdf",
  },
];

// ================= COMPONENT =================

export default function OriginalBooking() {
  return (
    <Layout>
      <PageHeader
        title="Original Booking"
        subtitle="Download brochures for premium projects directly from developers"
        breadcrumbs={[{ name: "Original Booking" }]}
        backgroundImage="/web/project.jpeg"
      />

      <section className="section-padding">
        <div className="container-custom">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border">
            {/* Table Header */}
            <div className="bg-gradient-to-r from-yellow-400 to-orange-500 px-6 py-4">
              <h2
                className="text-xl font-semibold text-black"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                Project Brochures
              </h2>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50 border-b">
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                      Developer Name
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                      Projects
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                      Category
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                      Location
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                      Download Brochure
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {brochureData.map((item, index) => (
                    <tr
                      key={index}
                      className="border-b hover:bg-gray-50 transition-colors"
                    >
                      <td className="px-6 py-4 text-sm text-gray-900 font-medium">
                        {item.developerName}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700">
                        {item.project}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700">
                        {item.category}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700">
                        {item.location}
                      </td>
                      <td className="px-6 py-4 text-sm">
                        <a
                          href={item.brochure}
                          download
                          className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-semibold rounded-full hover:shadow-md transition-all text-sm"
                        >
                          Download Brochure
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
