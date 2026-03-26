import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contacto" className="border-t border-border bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-baseline gap-2 mb-3">
              <p className="text-lg font-black uppercase tracking-tight">MONTIER</p>
              <span className="text-xs text-primary tracking-widest lowercase">caps</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Tu destino para gorras de alta calidad. Estilo, comodidad y diseño en cada producto.
            </p>
          </div>

          <div>
            <p className="text-sm font-medium mb-3">Contacto</p>
            <div className="space-y-2">
              <a
                href="https://wa.me/573173450261"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                <Phone className="h-4 w-4" />
                <span>+57 317 345 0261</span>
              </a>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>info@montiercaps.com</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>Colombia</span>
              </div>
            </div>
          </div>

          <div>
            <p className="text-sm font-medium mb-3">Horario de atención</p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Lunes a Viernes: 9:00 AM - 6:00 PM<br />
              Sábados: 10:00 AM - 4:00 PM
            </p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2026 MONTIER caps. Todos los derechos reservados.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">
                Política de privacidad
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">
                Términos de servicio
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
