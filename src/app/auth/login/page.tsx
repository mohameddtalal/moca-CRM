import Image from "next/image";

const Page=() => {
  return (
    <div className="flex" style={{ flex: 1 ,position:'relative',zIndex:"1",justifyContent:"end",marginRight:"180px"}}>
        <div className="w-[454px] bg-white  card-bg  flex flex-col items-center" style={{padding:"48px"}}>
  {/* hello moca' */}
  <div className="text-center justify-center items-center mb-10">
    <p className="text-[24px] " style={{fontFamily:"Athena Signature " , color:'var(--purple)'}}>hello</p>
    <Image
        src="/assets/Asset1.svg"
        alt="logo"
        width={115} height={24}
        style={{display:"flex",justifyContent:"center"}}
    />
  </div>

  {/* Email */}
  <div className="w-full mb-6">
    <label className="card-description-sm" style={{color:"#9E9E9E"}}>E-Mail</label>
    <input
      type="email"
      style={{fontSize:"12px",color:"#9E9E9E"}}
      className="w-full mt-2 px-4 py-3 rounded-full border border-gray-300 outline-none focus:border-purple-500"
      placeholder="john doe@gmail.com"
    />
  </div>

  {/* Password */}
  <div className="w-full mb-2">
  <label className="card-description-sm" style={{color:"#9E9E9E"}}>Password</label>
  <div className="mt-2 w-full flex items-center border border-gray-300 rounded-full px-4 py-3 focus-within:border-purple-500">
    <input
      type="password"
      className="flex-1 outline-none"
      style={{fontSize:"12px",color:"#9E9E9E"}}
      placeholder="Enter Password"
    />
    <Image src="/assets/Eyeclosed.svg" alt="eye" width={20} height={20} />
  </div>
</div>




  {/* Forgot Password */}
  <button className="mt-2" style={{fontSize:"14px",color:"#565656",fontWeight:"600",marginBottom:"16px"}}>
    Forget Password?
  </button>

  {/* Sign In Button */}
  <button style={{backgroundColor:"var(--hot-purple)",width:"182px",height:"48px",borderRadius:"1536px",color:"#F7F7F7"}}>
    Sign In
  </button>

  {/* Footer text */}
 <div className="mt-10 text-center text-gray-500 text-sm leading-relaxed flex justify-center items-center gap-1 flex-wrap card-description-sm" style={{color:"#9E9E9E"}}>
  <span>Logging in is just the start</span>
  <Image src="/assets/hand.svg" alt="quote" width={12} height={12}/>
  <span>The real magic is inside!</span>
  <Image src="/assets/hand2.svg" alt="quote" width={12} height={12}/>
  <span>Hit that button and let’s blast off!</span>
</div>

</div>

      
      </div>

  );
}

export default Page;