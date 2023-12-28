   // Necessary if using App Router to ensure this file runs on the client
   "use client";
    
    import { datadogRum } from "@datadog/browser-rum";
    
    datadogRum.init({
        applicationId: '66f0680a-55df-4ff3-bd28-b3401cf83679',
        clientToken: 'pubbc7a697b2335ac3b450bcaf33baceeba',
        site: 'datadoghq.eu',
        service: 'jumbohack',
        env: 'prod',
      // Specify a version number to identify the deployed version of your application in Datadog
      // version: '1.0.0',
      sessionSampleRate: 100,
      sessionReplaySampleRate: 100,
      trackUserInteractions: true,
      trackResources: true,
      trackLongTasks: true,
      defaultPrivacyLevel: "mask-user-input",
      // Specify URLs to propagate trace headers for connection between RUM and backend trace
      allowedTracingUrls: [
        // { match: "https://example.com/api/", propagatorTypes: ["tracecontext"] },
      ],
    });
    
    export default function DatadogInit() {
      // Render nothing - this component is only included so that the init code
      // above will run client-side
      return null;
    }
   
