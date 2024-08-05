export default function Home() {

  const peopleCount = 2;
  const people = Array.from({ length: peopleCount }, (_, i) => i); // Initialize with indices

  const PersonForm = (guestNo) => {

    return (
    <div className="border rounded-lg px-8 py-6 my-8">
    <h2 className="text-2xl font-medium mb-4">Confirm booking details for Guest {guestNo + 1}</h2>
    <form>
        <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">First Name</label>
            <input type="text" id="name" name="name"
                className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400" required/>
        </div>
        <div className="mb-4">
            <label htmlFor="surname" className="block text-gray-700 font-medium mb-2">Surname</label>
            <input type="text" id="surname" name="surname"
                className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400" required/>
        </div>
        <div className="mb-4">
            <label htmlFor="company" className="block text-gray-700 font-medium mb-2">Company Name</label>
            <input type="text" id="company" name="company"
                className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400" required/>
        </div>
        <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email address</label>
            <input type="email" id="email" name="email"
                className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400" required/>
        </div>
        <div className="mb-4">
            <label htmlFor="menu" className="block text-gray-700 font-medium mb-2">Menu Option</label>
            <select id="menu" name="menu"
                className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400" required>
                <option value="main">Main Menu</option>
                <option value="vegetarian">Vegetarian</option>
                <option value="vegan">Vegan</option>
            </select>
        </div>
        <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Allergies or dietary requirements</label>
            <div className="flex flex-wrap -mx-2">
              <div className="px-2 w-1/3">
                  <label htmlFor="allergen-celery" className="block text-gray-700 font-medium mb-2">
                      <input type="checkbox" id="allergen-celery" name="allergen[]" value="celery" className="mr-2"/>Celery
                  </label>
              </div>
              <div className="px-2 w-1/3">
                  <label htmlFor="allergen-cereals" className="block text-gray-700 font-medium mb-2">
                      <input type="checkbox" id="allergen-cereals" name="allergen[]" value="cereals" className="mr-2"/>Cereals containing Gluten
                  </label>
              </div>
              <div className="px-2 w-1/3">
                  <label htmlFor="allergen-crustaceans" className="block text-gray-700 font-medium mb-2">
                      <input type="checkbox" id="allergen-crustaceans" name="allergen[]" value="crustaceans" className="mr-2"/>Crustaceans
                  </label>
              </div>
              <div className="px-2 w-1/3">
                  <label htmlFor="allergen-eggs" className="block text-gray-700 font-medium mb-2">
                      <input type="checkbox" id="allergen-eggs" name="allergen[]" value="eggs" className="mr-2"/>Eggs
                  </label>
              </div>
              <div className="px-2 w-1/3">
                  <label htmlFor="allergen-fish" className="block text-gray-700 font-medium mb-2">
                      <input type="checkbox" id="allergen-fish" name="allergen[]" value="fish" className="mr-2"/>Fish
                  </label>
              </div>
              <div className="px-2 w-1/3">
                  <label htmlFor="allergen-lupin" className="block text-gray-700 font-medium mb-2">
                      <input type="checkbox" id="allergen-lupin" name="allergen[]" value="lupin" className="mr-2"/>Lupin
                  </label>
              </div>
              <div className="px-2 w-1/3">
                  <label htmlFor="allergen-milk" className="block text-gray-700 font-medium mb-2">
                      <input type="checkbox" id="allergen-milk" name="allergen[]" value="milk" className="mr-2"/>Milk
                  </label>
              </div>
              <div className="px-2 w-1/3">
                  <label htmlFor="allergen-molluscs" className="block text-gray-700 font-medium mb-2">
                      <input type="checkbox" id="allergen-molluscs" name="allergen[]" value="molluscs" className="mr-2"/>Molluscs
                  </label>
              </div>
              <div className="px-2 w-1/3">
                  <label htmlFor="allergen-mustard" className="block text-gray-700 font-medium mb-2">
                      <input type="checkbox" id="allergen-mustard" name="allergen[]" value="mustard" className="mr-2"/>Mustard
                  </label>
              </div>
              <div className="px-2 w-1/3">
                  <label htmlFor="allergen-peanuts" className="block text-gray-700 font-medium mb-2">
                      <input type="checkbox" id="allergen-peanuts" name="allergen[]" value="peanuts" className="mr-2"/>Peanuts
                  </label>
              </div>
              <div className="px-2 w-1/3">
                  <label htmlFor="allergen-sesame" className="block text-gray-700 font-medium mb-2">
                      <input type="checkbox" id="allergen-sesame" name="allergen[]" value="sesame" className="mr-2"/>Sesame
                  </label>
              </div>
              <div className="px-2 w-1/3">
                  <label htmlFor="allergen-soybeans" className="block text-gray-700 font-medium mb-2">
                      <input type="checkbox" id="allergen-soybeans" name="allergen[]" value="soybeans" className="mr-2"/>Soy Beans
                  </label>
              </div>
              <div className="px-2 w-1/3">
                  <label htmlFor="allergen-sulphur" className="block text-gray-700 font-medium mb-2">
                      <input type="checkbox" id="allergen-sulphur" name="allergen[]" value="sulphur" className="mr-2"/>Sulphur Dioxide and Sulphites
                  </label>
              </div>
              <div className="px-2 w-1/3">
                  <label htmlFor="allergen-treenuts" className="block text-gray-700 font-medium mb-2">
                      <input type="checkbox" id="allergen-treenuts" name="allergen[]" value="treenuts" className="mr-2"/>Tree Nuts
                  </label>
              </div>
              <div className="px-2 w-1/3">
                  <label htmlFor="allergen-pregnant" className="block text-gray-700 font-medium mb-2">
                      <input type="checkbox" id="allergen-pregnant" name="allergen[]" value="pregnant" className="mr-2"/>Pregnant
                  </label>
              </div>
          </div>
        </div>
        <div className="mb-4">
            <label htmlFor="additional-notes" className="block text-gray-700 font-medium mb-2">Additional notes about dietary requirements</label>
            <textarea id="additional-notes" name="additional-notes"
                className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400" rows="5"></textarea>
        </div>
        <div>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">Save</button>
        </div>
      </form>
    </div>
    )
  }

  return (
    <main className="flex flex-col mx-auto min-h-screen items-center justify-center max-w-4xl">
      <div className="border rounded-lg px-8 py-6 my-8">
        You&apos;ve bought <span className="font-bold">{peopleCount} Individual Tickets</span>
      </div>
      {people.map((x, i) => PersonForm(i))}
    </main>
  );
}
