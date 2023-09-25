interface LoadingDataProps {
    className?: string
}

export const LoadingData: React.FC<LoadingDataProps> = ({className}) => {
    return (
        <div className={`${className} flex justify-center`}>
            <div className='flex flex-col items-center justify-center'>
                <svg className='pb-10' width="100" viewBox="0 0 56 41" shapeRendering="geometricPrecision" textRendering="geometricPrecision">
                    <g id="snap-left-path_to" transform="translate(40.139293,-14.4914)">
                    <path id="snap-left-path" d="M23.9862,24.2972c-.0044-.1712-.0431-.3398-.1138-.4955s-.1722-.2956-.298-.411l-5.8556-5.1533c-.4794-.4629-.8577-1.021-1.1108-1.6389s-.3755-1.2819-.3593-1.9498c.0172-1.3755.571-2.6892,1.5422-3.6584s2.282-1.51644,3.6504-1.52392h20.7953l8.2357-7.96384c.125-.12095.2111-.27673.2472-.44728s.0206-.348079-.0445-.509707-.1769-.299964-.3209-.397192-.3136-.148899-.4871-.148357h-29.0763c-.8875.000251-1.7405.345885-2.3801.964436L2.28912,16.5651c-4.15493,4.0192-2.27718,10.6626,2.61073,12.4177L23.1544,25.4934c.2569-.0684.4815-.226.6338-.445s.2224-.4852.198-.7512Z" transform="translate(-25.369263,-14.4914)" fill="#1269c1" />
                    </g>
                    <g id="snap-right-path_to" transform="translate(9.289135,55.137952)">
                    <path id="snap-right-path" d="M30.6956,17.2819c.0046.167.044.3315.1157.4835s.1744.2886.3019.4014l5.9635,5.0264c.4861.4528.8696.9983,1.1263,1.6021.2566.6037.3808,1.2525.3646,1.9051-.0176,1.3476-.5833,2.6342-1.5744,3.5811-.9912.9469-2.3281,1.4778-3.721,1.4777h-21.0811L3.83882,39.5373c-.12553.1185-.21164.2706-.2473.4368s-.01925.3389.04713.496.17972.2914.32549.3858.31734.1446.49275.1441h29.48351c.9013-.0005,1.7676-.3378,2.418-.9415L52.708,24.8256c4.2095-3.9234,2.3052-10.4044-2.6519-12.1015l-18.517,3.4062c-.2567.0677-.4811.2195-.635.4296s-.2276.4652-.2085.722v0Z" transform="translate(-29.299708,-26.862052)" fill="#15339b" />
                    </g>
                </svg>
            <h3 className='font-semibold text-lg pb-4'>Loading data for your organization</h3>
            <p className="text-center text-gray-500 w-2/3">Please note: this process can take up to 20 seconds</p>
            </div>
        </div>
    )
}
