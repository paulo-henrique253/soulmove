type ImagemInterativaProps = {
    principalSrc: string;
    principalAlt: string;
    secundarioSrc: string;
    secundarioAlt: string;
}

function ImagemInterativa( { principalSrc, principalAlt, secundarioSrc, secundarioAlt }: ImagemInterativaProps) {
    return (
        <div 
        className="relative w-full max-w-sm aspect-5/11 group cursor-pointer overflow-hidden rounded-xl shadow-lg border border-gray-200"
        >
            <img className="absolute inset-0 w-full h-full object-contain transition-opacity duration-500 ease-in-out group-hover:opacity-0 group-focus:opacity-0" 
            src={principalSrc} 
            alt={principalAlt} 
            />
            <img className="absolute inset-0 w-full h-full object-contain transition-opacity duration-500 ease-in-out group-hover:opacity-100 group-focus:opacity-100"
            src= {secundarioSrc}
            alt= {secundarioAlt}
            />
        </div>
    );
}

export default ImagemInterativa;