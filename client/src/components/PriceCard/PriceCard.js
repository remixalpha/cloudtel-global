import { CheckCircleIcon } from "@heroicons/react/20/solid";

const includedFeaturesOne = ["HTML – Full Tutorial for Beginners"];
const includedFeaturesTwo = ["HTML & CSS– Full Tutorial for Beginners"];

export default function PriceCard() {
  return (
    <div className="bg-white py-24 sm:py-10 min-h-screen ">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center sm:text-center mt-10 ">
          <h2 className=" text-4xl font-bold tracking-tight text-black sm:text-4xl lg:text-5xl">
            Choose the right plan for you
          </h2>
          <p className="mt-6 text-sm lg:text-md leading-8 text-gray-600">
            Distinctio et nulla eum soluta et neque labore quibusdam. Saepe et
            quasi iusto modi velit ut non voluptas in. Explicabo id ut laborum.
          </p>
        </div>
        <div className=" space-y-12 lg:grid lg:grid-cols-3  lg:space-y-20">
          {/* Price card one */}
          <div className="mx-auto mt-16 max-w-md  rounded-3xl  ring-1 ring-gray-200 sm:mt-20 hover:scale-110 shadow-lg transition-all duration-300">
            {/* Price */}
            <div className=" p-2 ">
              <div className="rounded-2xl bg-gray-50 py-10 text-start px-20  ">
                <div className="mx-auto max-w-xs px-2 ">
                  <h3 className="text-xl font-medium tracking-tight text-black  ">
                    One-year subscription
                  </h3>
                  <p className="mt-6 flex items-baseline justify-start gap-x-2">
                    <span className="text-5xl font-bold tracking-tight text-gray-900">
                      £ 120
                    </span>
                    {/* <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">
                      /month
                    </span> */}
                  </p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-8 sm:p-10 lg:flex-auto">
              <div className="flex items-center gap-x-4">
                <h4 className="flex-none text-sm font-semibold leading-6 text-blue-500">
                  What’s included
                </h4>
              </div>
              <ul
                role="list"
                className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-700 sm:grid-cols-1 sm:gap-6"
              >
                {includedFeaturesOne.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <CheckCircleIcon
                      className="h-6 w-5 flex-none text-blue-600"
                      aria-hidden="true"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className="mt-10 block w-full rounded-md bg-blue-500 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get access
              </a>
            </div>
          </div>
          {/* Price card Two */}
          <div className="mx-auto mt-16 max-w-md  rounded-3xl  ring-1 ring-gray-200 sm:mt-20 hover:scale-110 shadow-lg transition-all duration-300">
            {/* Price */}
            <div className=" p-2 ">
              <div className="rounded-2xl bg-gray-50 py-10 text-start px-20 ">
                <div className="mx-auto max-w-xs px-2 ">
                  <h3 className="text-xl font-medium tracking-tight text-black  ">
                    One-year subscription
                  </h3>
                  <p className="mt-6 flex items-baseline justify-start gap-x-2">
                    <span className="text-5xl font-bold tracking-tight text-gray-900">
                      £ 135
                    </span>
                    {/* <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">
                      /yearly
                    </span> */}
                  </p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-8 sm:p-10 lg:flex-auto">
              <div className="flex items-center gap-x-4">
                <h4 className="flex-none text-sm font-semibold leading-6 text-blue-500">
                  What’s included
                </h4>
              </div>
              <ul
                role="list"
                className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-700 sm:grid-cols-1 sm:gap-6"
              >
                {includedFeaturesTwo.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <CheckCircleIcon
                      className="h-6 w-5 flex-none text-blue-600"
                      aria-hidden="true"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className="mt-10 block w-full rounded-md bg-blue-500 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get access
              </a>
            </div>
          </div>
          {/* Price card Three */}
          <div className="mx-auto mt-16 max-w-md  rounded-3xl  ring-1 ring-gray-200 sm:mt-20 hover:scale-110 shadow-lg transition-all duration-300">
            {/* Price */}
            <div className=" p-2 ">
              <div className="rounded-2xl bg-gray-50 py-10 text-start px-20 ">
                <div className="mx-auto max-w-xs px-2 ">
                  <h3 className="text-xl font-medium tracking-tight text-black  ">
                    Monthly subscription
                  </h3>
                  <p className="mt-6 flex items-baseline justify-start gap-x-2">
                    <span className="text-5xl font-bold tracking-tight text-gray-900">
                      £ 15
                    </span>
                    {/* <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">
                      /month
                    </span> */}
                  </p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-8 sm:p-10 lg:flex-auto">
              <div className="flex items-center gap-x-4">
                <h4 className="flex-none text-sm font-semibold leading-6 text-blue-500">
                  What’s included
                </h4>
              </div>
              <ul
                role="list"
                className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-700 sm:grid-cols-1 sm:gap-6"
              >
                {includedFeaturesTwo.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <CheckCircleIcon
                      className="h-6 w-5 flex-none text-blue-600"
                      aria-hidden="true"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className="mt-10 block w-full rounded-md bg-blue-500 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get access
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
