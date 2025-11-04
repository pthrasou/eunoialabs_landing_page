import { Card } from "@/components/ui/card";
import { QRCodeSVG } from 'qrcode.react';

export default function DownloadSection() {
  const appStoreUrl = "https://apps.apple.com/galinia";
  const playStoreUrl = "https://play.google.com/store/apps/galinia";

  return (
    <section className="py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <Card className="p-6 md:p-8 bg-gradient-to-br from-card via-card to-card/50 backdrop-blur-xl border-card-border">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-2" data-testid="text-download-title">
              Get Galinia Today
            </h2>
            <p className="text-sm text-muted-foreground" data-testid="text-download-subtitle">
              Scan the QR code or download directly
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a 
                href="https://apps.apple.com/galinia" 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={() => console.log('App Store download')}
                data-testid="button-download-app-store"
              >
                <img 
                  src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83&releaseDate=1280548800" 
                  alt="Download on the App Store" 
                  className="h-11"
                />
              </a>
              <a 
                href="https://play.google.com/store/apps/galinia" 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={() => console.log('Play Store download')}
                data-testid="button-download-play-store"
              >
                <img 
                  src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" 
                  alt="Get it on Google Play" 
                  className="h-11"
                />
              </a>
            </div>

            <div className="flex justify-center gap-6">
              <div className="text-center space-y-2">
                <Card className="p-3 inline-block bg-white">
                  <QRCodeSVG 
                    value={appStoreUrl} 
                    size={100}
                    level="H"
                    data-testid="qr-app-store"
                  />
                </Card>
                <p className="text-xs text-muted-foreground">App Store</p>
              </div>
              <div className="text-center space-y-2">
                <Card className="p-3 inline-block bg-white">
                  <QRCodeSVG 
                    value={playStoreUrl} 
                    size={100}
                    level="H"
                    data-testid="qr-play-store"
                  />
                </Card>
                <p className="text-xs text-muted-foreground">Play Store</p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
