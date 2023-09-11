import { CardHorizontal } from "@/components/cards/cardHorizontal";

export default function Home() {
  return (
    <main className="xl:max-w-[1248px] py-6 w-full lg:mx-auto min-h-screen">
      <section className='w-full h-screen justify-center grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6'>
        <div className="w-full flex flex-col px-2 pt-4 h-[30rem] border-2 border-black lg:col-span-2">
          <div>
            <h3 className="text-xl font-semibold">Featured</h3>
          </div> 
          <section className="grid grid-cols-3 gap-2 mb-4 h-full">
            <div className="w-full h-auto text-white flex items-center justify-center text-4xl bg-black col-span-2 border-2">
              Tumblr
            </div>
            <div className="w-full h-auto flex flex-col px-1 py-2 gap-2 col-span-1">
              <CardHorizontal/>
              <CardHorizontal/>
              <CardHorizontal/>
            </div>
          </section>
        </div>
        <div className="w-full h-[30rem] border-2 bg-gray-900 text-white text-2xl items-center justify-center border-black hidden lg:flex">
          Square pop
        </div>
        <section className="w-full h-auto border-2 pb-10 border-black xl:col-span-3">
          <div className="mx-2 mt-2 mb-6">
            <h3 className="text-xl font-semibold">More Videos</h3>
          </div> 
          <div className="grid grid-cols-3 gap-4 mx-2">
            <CardHorizontal/>
            <CardHorizontal/>
            <CardHorizontal/>
            <CardHorizontal/>
            <CardHorizontal/>
            <CardHorizontal/>
            <CardHorizontal/>
            <CardHorizontal/>
            <CardHorizontal/>
            <CardHorizontal/>
            <CardHorizontal/>
          </div>
        </section>
      </section>
    </main>
  )
}
