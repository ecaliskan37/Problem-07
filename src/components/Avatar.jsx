import Image from 'next/image'

function Avatar(props) {
  return (
    <div className="group block p-8 flex-shrink-0">
      <div className="flex items-center">
        <div>
          <Image
            className="inline-block h-12 w-12 rounded-full"
            src={props.imageSrc}
            alt=""
            width={500}
            height={500}
          />
        </div>
        <div className="flex flex-col items-center justify-center ml-25">
          <div className=" py-1 text-base font-medium text-gray-700 group-hover:text-gray-900">
            {props.name}
          </div>
          <div
            className="py-20 text-sm text-right font-medium text-gray-500
           group-hover:text-gray-700"
          >
            {props.profileText}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Avatar
