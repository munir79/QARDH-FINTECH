import { NextResponse } from "next/server";
import ical from "node-ical";

export async function GET() {
  const url = "https://www.airbnb.com/calendar/ical/1471419946977142436.ics?s=a8aa6e57df234493b7e02d986d438680"; // Airbnb iCal URL

  try {
    const data = await ical.async.fromURL(url);
    console.log("Raw data from URL", data);

    // শুধুমাত্র ইভেন্ট টাইপ (VEVENT) গুলো রাখো
    const events = Object.values(data).filter(item => item.type === "VEVENT");
    console.log("Filtered events:", events); // ইভেন্টগুলো দেখতে হবে

    return NextResponse.json({
      success: true,
      events,
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: error.message,
    }, { status: 500 });
  }
}
