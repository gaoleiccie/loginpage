export default function Button({ children, ...props}) { 
    return (
        <button className="text-stone-900 px-4 py-2 bg-amber-400 uppercase rounded font-semibold hover:bg-amber-500" {...props}>
            { children }
        </button>
    )
}