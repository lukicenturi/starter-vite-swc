import { Button } from '@/components/ui/button.tsx';
import { Check, Clock3, CreditCard } from 'lucide-react';
import { Badge } from '@/components/ui/badge.tsx';

function Home() {
  return (
    <div className="overflow-x-auto flex gap-10 p-10 bg-black items-center [&>*]:min-w-[300px]">
      {/*First Card*/}
      <div className="px-6 py-4 rounded-xl bg-neutral-900 text-white max-h-[406px] overflow-hidden">
        <div className="flex items-center justify-between mb-10">
          <div className="font-medium">Earnings</div>
          <Button variant="default" className="border border-neutral-600 bg-transparent">View all</Button>
        </div>
        <div className="flex flex-col gap-3 mb-7">
          <h1 className="text-4xl font-normal">$8,960.53</h1>
          <div className="flex gap-1 text-xs">
            <div className="text-green-500">10%</div>
            <div className="text-neutral-500">since last month</div>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex rounded-xl bg-neutral-800 p-3.5 justify-between">
            <div className="flex flex-col">
              <div>$2,859.36</div>
              <div className="text-neutral-500 text-xs">Est. Arrival Apr 12, 2024</div>
            </div>
            <div className="size-4 rounded-full bg-neutral-500 flex items-center justify-center">
              <Clock3 className="stroke-white"/>
            </div>
          </div>
          <div className="flex rounded-xl bg-neutral-800 p-3.5 justify-between">
            <div className="flex flex-col">
              <div>$1,224.59</div>
              <div className="text-neutral-500 text-xs">Completed Apr 01, 2024</div>
            </div>
            <div className="size-4 rounded-full bg-green-500 flex items-center justify-center">
              <Check className="stroke-white size-3" strokeWidth={3}/>
            </div>
          </div>
          <div className="flex rounded-xl bg-neutral-800 p-3.5 justify-between">
            <div className="flex flex-col">
              <div>$729.20</div>
              <div className="text-neutral-500 text-xs">Completed Mar 28, 2024</div>
            </div>
            <div className="size-4 rounded-full bg-green-500 flex items-center justify-center">
              <Check className="stroke-white size-3" strokeWidth={3}/>
            </div>
          </div>
        </div>
      </div>

      {/*Second Card*/}
      <div className="border-white border-4 rounded-xl relative overflow-hidden h-[300px]">
        <img src="/map.png" className="w-full h-full object-cover object-center" />
        <div className="absolute top-4 left-4 bg-white rounded-xl p-4 text-neutral-500 text-sm font-medium">
          <div className="mb-3.5">Delivering to:</div>
          <div className="mb-2.5 text-black font-semibold text-base">Edward Kim</div>
          <div>
            <div>22 47th Ave</div>
            <div>Long Island City, NY 11101</div>
          </div>
        </div>
      </div>

      {/*Third Card*/}
      <div className="px-6 rounded-xl bg-neutral-900 text-white flex flex-col divide-y divide-neutral-800">
        <div className="flex items-center justify-between py-5">
          <div className="font-medium flex items-center gap-4">
            <CreditCard className="stroke-neutral-700" />
            <div>Days off</div>
          </div>
          <Button variant="default" className="border border-neutral-600 bg-transparent">See all</Button>
        </div>
        <div className="pt-7 pb-10 flex flex-col items-center">
          <svg viewBox="0 0 200 100" className="w-[220px] aspect-2">
            <path d="M10 100 A90 90 0 0 1 190 100" className="stroke-neutral-700" fill="none" strokeWidth="20"></path>
            <path d="M10 100 A90 90 0 0 1 190 100" stroke="orange" className="stroke-orange-600" strokeWidth="20"
                  fill="none" strokeDasharray="282.7433388230814 565.4866776461628"
                  strokeDashoffset="56.548667764616255"></path>
          </svg>
          <div className="flex flex-col gap-3 items-center -mt-14">
            <div className="text-5xl font-bold">16</div>
            <div className="text-neutral-500 font-medium">OUT OF 20</div>
          </div>
        </div>
        <div className="flex flex-col pb-7">
          <div className="py-3 flex flex-wrap gap-1 items-center justify-between border-b border-neutral-800">
            <div className="text-neutral-500 text-sm">March 3, 2024</div>
            <Badge className="bg-orange-600 font-normal w-20 text-center justify-center">Pending</Badge>
          </div>
          <div className="py-3 flex flex-wrap gap-1 items-center justify-between border-b border-neutral-800">
            <div className="text-neutral-500 text-sm">March 3, 2024</div>
            <Badge className="bg-green-600 font-normal w-20 text-center justify-center">Confirmed</Badge>
          </div>
        </div>
      </div>

      {/*Fourth Card*/}
      <div className="bg-white rounded-xl p-6 flex flex-col gap-6">
        <div className="pt-6 flex items-baseline gap-2.5">
          <div className="text-6xl font-semibold">25%</div>
          <div className="text-neutral-500">5 of 12 done</div>
        </div>
        <div className="w-full rounded-full h-4 bg-neutral-100">
          <div className="w-1/4 bg-violet-600 h-full rounded-full" />
        </div>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <div className="font-semibold">Team Training</div>
            <div className="font-medium text-sm text-neutral-500">Designed to foster inclusivity and leverage diverse perspectives.</div>
          </div>
          <a className="text-violet-600 text-sm font-semibold underline cursor-pointer" href="#">Resume Course</a>
        </div>
      </div>

      {/*Fifth Card*/}
      <div className="px-6 py-4 rounded-xl bg-neutral-900 text-white flex flex-col">
        <div className="pb-4 border-b border-neutral-800">
          Activity
        </div>
        <div className="flex flex-col gap-4 pt-6">
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-4">
              <div className="size-10 shrink-0 overflow-hidden bg-neutral-300 rounded-full">
                <img src="/avatar-1.png" className="w-full h-full"/>
              </div>
              <div>
                <div className="font-medium text-sm">Isaac Johns</div>
                <div className="text-neutral-500 text-xs">2 days ago</div>
              </div>
            </div>
            <div className="ml-5 border-l-2 border-neutral-800 pl-5 pb-5">
              <div className="rounded-xl p-4 bg-neutral-800 text-neutral-400 text-xs">Reviewed and sent the invoice to <a
                href="#" className="underline">time@acme.com</a></div>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-4">
              <div className="size-10 shrink-0 overflow-hidden bg-neutral-300 rounded-full">
                <img src="/avatar-2.png" className="w-full h-full"/>
              </div>
              <div>
                <div className="font-medium text-sm">Alex Parkinson</div>
                <div className="text-neutral-500 text-xs">1 day ago</div>
              </div>
            </div>
            <div className="ml-5 pl-5 pb-5">
              <div className="rounded-xl p-4 bg-violet-500 text-white text-xs">Sent the invoice DGR 8263 to <a
                href="#" className="underline">time@acme.com</a></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
