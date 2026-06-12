import {
  FiInstagram, FiTwitter, FiFacebook, FiLinkedin,
} from "react-icons/fi";


const footerLinks = {
  company: ["About Us", "Careers", "Press", "Blog"],
  support: ["Help Center", "Returns", "Order Status", "Warranty"],
  categories: ["Electronics", "Fashion", "Shoes", "Furniture"],
};

function Footer() {
  return (
    <footer className="bg-[#f5f4f0] border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          <div className="col-span-2">
            <a href="#home" className="text-xl font-bold text-gray-900">LAK <span className="font-light text-gray-400">Gallery</span></a>
            <p className="text-xs text-gray-500 mt-3 max-w-xs leading-relaxed">A curated marketplace of premium goods — thoughtfully designed, rigorously tested, built to last.</p>
            <div className="flex gap-2 mt-5">
              {[FiInstagram,FiTwitter,FiFacebook,FiLinkedin].map((Icon,i) => (
                <a key={i} href="#" className="w-8 h-8 bg-white border border-gray-200 rounded-lg flex items-center justify-center text-gray-400 hover:text-gray-900 hover:border-gray-400 transition-colors"><Icon size={13} /></a>
              ))}
            </div>
          </div>
          {[
            { title: "Company", links: footerLinks.company },
            { title: "Support", links: footerLinks.support },
            { title: "Shop", links: footerLinks.categories },
          ].map(col => (
            <div key={col.title}>
              <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-4">{col.title}</h4>
              <ul className="space-y-2.5">
                {col.links.map(l => <li key={l}><a href="#" className="text-xs text-gray-500 hover:text-gray-900 transition-colors">{l}</a></li>)}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-gray-200 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-400">© 2026 LAK Gallery. All rights reserved.</p>
          <div className="flex gap-4 text-xs text-gray-400">
            {["Privacy Policy","Terms","Cookies"].map(l => <a key={l} href="#" className="hover:text-gray-700 transition-colors">{l}</a>)}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer