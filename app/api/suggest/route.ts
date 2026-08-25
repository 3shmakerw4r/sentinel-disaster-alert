import {NextRequest,NextResponse} from "next/server";
type Place={name:string;admin1?:string;latitude:number;longitude:number};
export async function GET(request:NextRequest){
 const q=request.nextUrl.searchParams.get("q")?.trim()??"";if(q.length<2)return NextResponse.json({suggestions:[]});
 try{const url=new URL("https://geocoding-api.open-meteo.com/v1/search");url.searchParams.set("name",q);url.searchParams.set("count","7");url.searchParams.set("language","en");url.searchParams.set("countryCode","US");const response=await fetch(url,{headers:{"User-Agent":"Sentinel disaster awareness project"},next:{revalidate:86400}});if(!response.ok)throw new Error();const data=await response.json() as {results?:Place[]};return NextResponse.json({suggestions:(data.results??[]).map(place=>({label:[place.name,place.admin1].filter(Boolean).join(", "),latitude:place.latitude,longitude:place.longitude}))})}catch{return NextResponse.json({suggestions:[]})}
}
