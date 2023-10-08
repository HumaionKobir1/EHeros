import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";



const AddEmploy = () => {
    const {user} = useContext(AuthContext);

    const handleEmployAdd = (event) => {
        event.preventDefault();

    }

    return (
        
        <div className="w-full md:w-5/6 mx-auto px-3 py-5 bg-gray-100">
            <h1 className="text-2xl font-bold my-4 text-center text-gray-600">Add A Employ</h1>
            <form onSubmit={handleEmployAdd} className="md:w-9/12 mx-auto rounded-lg bg-white shadow-lg p-8">
                <div className="mb-4 md:flex gap-5">
                    <div className="w-full md:mb-0 mb-4">
                    <label htmlFor="pictureUrl" className="block font-medium">Picture URL of the Employ:</label>
                    <input
                        type="text"
                        id="pictureUrl"
                        name="photo"
                        className="border border-gray-300 p-2 w-full"
                        required
                    />
                    </div>
                    
                    <div className="w-full md:mb-0 mb-4">
                    <label htmlFor="Title" className="block font-medium">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="title"
                        className="border border-gray-300 p-2 w-full"
                        required
                    />
                    </div>
                </div>

                <div className="mb-4 md:flex gap-5">
                    <div className="w-full md:mb-0 mb-4">
                    <label htmlFor="sellerName" className="block font-medium">Seller Name:</label>
                    <input
                        type="text"
                        id="sellerName"
                        name="userName"
                        defaultValue={user?.displayName}
                        className="border border-gray-300 p-2 w-full"
                    />
                    </div>
                    <div className="w-full md:mb-0 mb-4">
                    <label htmlFor="sellerEmail" className="block font-medium">Employ Email:</label>
                    <input
                        type="email"
                        id="sellerEmail"
                        name="email"
                        defaultValue={user?.email}
                        className="border border-gray-300 p-2 w-full"
                    />
                    </div>
                </div>

                <div className="mb-4 md:flex gap-5">
                    <div className="w-full md:mb-0 mb-4">
                    <label htmlFor="subCategory" className="block font-medium">Sub-category:</label>
                    <select
                        id="subCategory"
                        className="border border-gray-300 p-2 w-full"
                        name="subCategory"
                        required
                    >
                        <option value="">Select a sub-category</option>
                        <option value="It">It</option>
                        <option value="salte">salte</option>
                        <option value="Finace">FINACE</option>
                        <option value="Marketing">Marketing</option>
                        <option value="SUPPORT">SUPPORT</option>
                    </select>
                    </div>
                    <div className="w-full md:mb-0 mb-4">
                    <label htmlFor="price" className="block font-medium">Abulable status</label>
                    <input
                        type="number"
                        id="status"
                        name="status"
                        className="border border-gray-300 p-2 w-full"
                        required
                    />
                    </div>
                </div>
                
                <div className="mb-4 md:flex gap-5">
                    <div className="w-full md:mb-0 mb-4">
                    <label htmlFor="rating" className="block font-medium">Details:</label>
                    <input
                        type="text"
                        id="details"
                        name="detail"
                        className="border border-gray-300 p-2 w-full"
                        required
                    />
                    </div>
                    <div className="w-full md:mb-0 mb-4">
                    <label htmlFor="quantity" className="block font-medium">Available Quantity:</label>
                    <input
                        type="number"
                        id="quantity"
                        name="quantity"
                        className="border border-gray-300 p-2 w-full"
                        required
                    />
                    </div>
                </div>
                
                <div className=" md:mb-0 mb-4">
                <label htmlFor="description" className="block font-medium">Detail Description:</label>
                <textarea
                    id="description"
                    className="border border-gray-300 p-2 w-full h-24"
                    name="details"
                    required
                ></textarea>
                </div>
                <button type="submit" className="w-full bg-[#77153db2] hover:bg-[#77153ce2] text-gray-800 font-bold py-2 px-4 rounded">
                Add Employ
                </button>
            </form>
        </div>
    );
};

export default AddEmploy;