function Breadcrumb({texto, descripcion}) {
  return (
    <div className="fondoBreadcrumb">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl pt-32 sm:pt-48 lg:pt-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-[color:var(--colorGris)] sm:text-6xl">
              {texto}
            </h1>
            <p className="mt-6 text-lg leading-8 text-[color:var(--colorGris)]">
              {descripcion}
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#salto"
                className="rounded-md bg-[color:var(--colorPrincipal)] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:scale-105 transiciones focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Saber Más
              </a>
              <a href="/contacto" className="text-sm font-semibold leading-6 text-[color:var(--colorGris)] hover:scale-105 transiciones">
                Contáctanos
              </a>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
        </div>
      </div>
      <svg width="100%" height="10%" id="svg" viewBox="0 0 1200 280" xmlns="http://www.w3.org/2000/svg"><path d="M 0,500 C 0,500 0,100 0,100 C 124.12440191387557,95.8755980861244 248.24880382775115,91.75119617224881 340,94 C 431.75119617224885,96.24880382775119 491.12918660287085,104.87081339712918 572,115 C 652.8708133971292,125.12918660287082 755.2344497607656,136.76555023923444 855,132 C 954.7655502392344,127.23444976076556 1051.933014354067,106.06698564593302 1149,98 C 1246.066985645933,89.93301435406698 1343.0334928229665,94.96650717703349 1440,100 C 1440,100 1440,500 1440,500 Z" stroke="none" strokeWidth="0" fill="#95c125" fillOpacity="0.265"></path><path d="M 0,500 C 0,500 0,200 0,200 C 89.02392344497608,204.2775119617225 178.04784688995215,208.55502392344496 291,217 C 403.95215311004785,225.44497607655504 540.8325358851674,238.0574162679426 626,230 C 711.1674641148326,221.9425837320574 744.6220095693778,193.21531100478467 839,192 C 933.3779904306222,190.78468899521533 1088.6794258373207,217.0813397129187 1199,223 C 1309.3205741626793,228.9186602870813 1374.6602870813397,214.45933014354065 1440,200 C 1440,200 1440,500 1440,500 Z" stroke="none" strokeWidth="0" fill="#95c125" fillOpacity="0.4" ></path><path d="M 0,500 C 0,500 0,300 0,300 C 90.72727272727272,300.066985645933 181.45454545454544,300.13397129186603 293,292 C 404.54545454545456,283.86602870813397 536.9090909090909,267.5311004784689 618,266 C 699.0909090909091,264.4688995215311 728.9090909090909,277.7416267942584 823,293 C 917.0909090909091,308.2583732057416 1075.4545454545455,325.5023923444976 1189,327 C 1302.5454545454545,328.4976076555024 1371.2727272727273,314.2488038277512 1440,300 C 1440,300 1440,500 1440,500 Z" stroke="none" strokeWidth="0" fill="#95c125" fillOpacity="0.53"></path><path d="M 0,500 C 0,500 0,400 0,400 C 83.48325358851676,413.3397129186603 166.96650717703352,426.6794258373206 254,425 C 341.0334928229665,423.3205741626794 431.61722488038265,406.622009569378 545,392 C 658.3827751196173,377.377990430622 794.5645933014355,364.83253588516743 891,369 C 987.4354066985645,373.16746411483257 1044.1244019138755,394.0478468899522 1129,402 C 1213.8755980861245,409.9521531100478 1326.9377990430621,404.9760765550239 1440,400 C 1440,400 1440,500 1440,500 Z" stroke="none" strokeWidth="0" fill="#95c125" fillOpacity="1"></path></svg>
    </div>
  )
}

export default Breadcrumb