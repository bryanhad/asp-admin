export default function TextSkeleton({className}:{className:string}) {
  return (
    <div className={`animate-pulse bg-active dark:bg-active-dark p-3 rounded-md ${className}`}/>
      
  )
}
