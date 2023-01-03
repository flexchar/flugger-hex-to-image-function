import { AzureFunction, Context, HttpRequest } from '@azure/functions';
import { createCanvas } from 'canvas';

// https://docs.microsoft.com/en-us/aspnet/web-api/overview/web-api-routing-and-actions/attribute-routing-in-web-api-2#route-constraints

const httpTrigger: AzureFunction = async function (
    context: Context,
    req: HttpRequest
): Promise<void> {
    const { hex, width, height } = req.params;
    const widthInt = parseInt(width);
    const heightInt = parseInt(height);

    // Debug
    // if (0) {
    //     context.res = {
    //         body: JSON.stringify(req),
    //         headers: {
    //             'Content-type': 'application/json',
    //         },
    //     };
    //     return;
    // }

    if (!isHexColor(hex)) {
        context.res = {
            status: 401,
            body: JSON.stringify(
                'A 6-digit hex color is missing. It can be like ff85a9 or 41427a. These can be uppercase or lowercase but must be 6 hex digits.'
            ),
            headers: {
                'Content-type': 'application/json',
            },
        };

        return;
    }

    // context.log('🏳️‍🌈 HEX Received: ' + hex);

    const canvas = createCanvas(widthInt, heightInt);
    const canvaContext = canvas.getContext('2d');
    canvaContext.fillStyle = `#${hex}`;
    canvaContext.fillRect(0, 0, widthInt, heightInt);
    const buffer = canvas.toBuffer('image/png');

    context.res = {
        status: 200,
        body: Buffer.from(buffer),
        headers: {
            'Content-type': 'image/png',
            'Content-Disposition': `inline; filename="#${hex}.png"`,
        },
    };
};

export default httpTrigger;

function isHexColor(hex) {
    return (
        typeof hex === 'string' &&
        hex.length === 6 &&
        !isNaN(Number('0x' + hex))
    );
}
