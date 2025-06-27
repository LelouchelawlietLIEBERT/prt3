import { PinContainer } from "./ui/3d-pin";

export default function AnimatedPinDemo() {
  return (
    <div className="h-[40rem] w-full flex items-center justify-center ">
      <PinContainer title="Visit →" href="https://rtc-nexv.onrender.com/">
        <div className="flex justify-center items-center basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] mt-6.5">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold text-center text-base text-slate-100 translate-x-30">
            WEBCL : Video Call && Chat
          </h3>
          <div className="text-base !m-0 !p-0 font-normal translate-x-[40%] w-2xl">
            <span className="text-neutral-300">
              A realtime Implementation of websockets and webrtc <br />Video Call stream with your friends in a room, with room id !
            </span>
          </div>
          <div className="flex justify-center items-center w-[35rem] h-full rounded-lg translate-x-34 translate-y-20">
            <img
              src='/images/room.png'
              className="w-[100%]"
            />
          </div>
        </div>
      </PinContainer>
    </div>
  );
}
