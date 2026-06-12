import { motion, AnimatePresence } from "framer-motion";
import {
  FiShoppingCart, FiX, FiPlus, FiMinus, FiTrash2, FiPackage,
} from "react-icons/fi";


function CartDrawer({ isOpen, onClose, cart, onIncrease, onDecrease, onRemove }) {
  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const count = cart.reduce((s, i) => s + i.qty, 0);
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm" />
          <motion.aside initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} transition={{ type: "spring", stiffness: 300, damping: 35 }}
            className="fixed top-0 right-0 h-full w-full max-w-md z-50 bg-white shadow-2xl flex flex-col">
            <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
              <div className="flex items-center gap-2">
                <h2 className="font-bold text-gray-900 text-lg">Cart</h2>
                {count > 0 && <span className="bg-gray-900 text-white text-xs font-bold px-2 py-0.5 rounded-full">{count}</span>}
              </div>
              <motion.button whileTap={{ scale: 0.9 }} onClick={onClose} className="p-2 text-gray-500 hover:text-gray-900"><FiX size={20} /></motion.button>
            </div>
            <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
              {cart.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
                  <FiShoppingCart size={40} className="text-gray-200" />
                  <p className="text-gray-400 text-sm">Your cart is empty</p>
                  <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} onClick={onClose}
                    className="bg-gray-900 text-white px-6 py-2.5 rounded-full text-sm font-semibold">Start Shopping</motion.button>
                </div>
              ) : (
                <AnimatePresence>
                  {cart.map(item => (
                    <motion.div key={item.id} layout initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }} className="flex gap-4 items-center">
                      <div className="w-16 h-16 rounded-xl overflow-hidden bg-gray-50 flex-shrink-0">
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-gray-900 truncate">{item.name}</p>
                        <p className="text-xs text-gray-400 mt-0.5">${item.price}</p>
                        <div className="flex items-center gap-2 mt-2">
                          <button onClick={() => onDecrease(item.id)} className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-200"><FiMinus size={10} /></button>
                          <span className="text-sm font-bold text-gray-900 w-5 text-center">{item.qty}</span>
                          <button onClick={() => onIncrease(item.id)} className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-200"><FiPlus size={10} /></button>
                        </div>
                      </div>
                      <div className="text-right flex-shrink-0">
                        <p className="text-sm font-bold text-gray-900">${(item.price * item.qty).toFixed(2)}</p>
                        <button onClick={() => onRemove(item.id)} className="mt-2 text-gray-300 hover:text-red-500 transition-colors"><FiTrash2 size={14} /></button>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              )}
            </div>
            {cart.length > 0 && (
              <div className="px-6 py-5 border-t border-gray-100 space-y-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">Subtotal ({count} items)</span>
                  <span className="font-semibold text-gray-900">${total.toFixed(2)}</span>
                </div>
                <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                  className="w-full bg-gray-900 text-white py-4 rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-gray-700 transition-colors">
                  <FiPackage size={16} /> Checkout — ${total.toFixed(2)}
                </motion.button>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}

export default CartDrawer
