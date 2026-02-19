import React, { useState, useEffect } from 'react';
// Íconos de Material UI
import InventoryIcon from "@mui/icons-material/Inventory";
import BusinessIcon from "@mui/icons-material/Business";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import AssessmentIcon from "@mui/icons-material/Assessment";
import StorefrontIcon from "@mui/icons-material/Storefront";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";

const CalculadoraAdministracionIT = () => {
    const [cantidad, setCantidad] = useState(15);
    const [isDark, setIsDark] = useState(false);

    // 1. Detección automática de Modo Oscuro/Claro del sistema
    useEffect(() => {
        const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        setIsDark(darkModeMediaQuery.matches);
        const handler = (e: MediaQueryListEvent) => setIsDark(e.matches);
        darkModeMediaQuery.addEventListener('change', handler);
        return () => darkModeMediaQuery.removeEventListener('change', handler);
    }, []);

    // 2. Lógica de Negocio en Pesos Colombianos (COP)
    const COSTO_INTERNO_ESTIMADO = 280000; // Lo que gasta una empresa promedio por equipo (personal, fallos, tiempo)
    const TU_PRECIO_POR_EQUIPO = 45000;    // Tu precio competitivo

    const totalInterno = cantidad * COSTO_INTERNO_ESTIMADO;
    const totalNosotros = cantidad * TU_PRECIO_POR_EQUIPO;
    const ahorroMensual = totalInterno - totalNosotros;

    // 3. Formateador de moneda (COP)
    const formatoCOP = (valor: number) => {
        return new Intl.NumberFormat('es-CO', {
            style: 'currency',
            currency: 'COP',
            minimumFractionDigits: 0
        }).format(valor);
    };

    // 4. Función para enviar a WhatsApp
    const enviarWhatsApp = () => {
        const telefono = "573007538453";

        // Un mensaje mucho más cálido y conversacional
        const mensaje = `Hola VisionWeb! 

Estuve revisando su calculadora de costos y quedé muy interesado en el plan de administración para mi empresa. 

Estos son los datos que calculé:
- Tengo aproximadamente ${cantidad} equipos.
- El costo mensual me saldría en ${formatoCOP(totalNosotros)}.
- ¡Lo mejor es que me ahorraría ${formatoCOP(ahorroMensual)} al mes!

Me gustaría que me contaran más sobre cómo funcionan sus servicios y cómo podríamos empezar. ¡Quedo atento, gracias!`;

        const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;
        window.open(url, '_blank');
    };

    // 5. Paleta de colores dinámica
    const colors = {
        bg: isDark ? '#0D0D0C' : '#000000',
        card: isDark ? '#1e293b' : '#f8fafc',
        border: isDark ? '#334155' : '#e2e8f0',
        text: isDark ? '#f1f5f9' : '#1e293b',
        subtext: isDark ? '#94a3b8' : '#64748b',
        primary: '#2563eb', // Azul profesional
        success: '#10b981'  // Verde éxito
    };

    return (
        <div style={{
            backgroundColor: colors.bg,
            color: colors.text,
            padding: '40px 20px',
            borderRadius: '32px',
            fontFamily: 'system-ui, -apple-system, sans-serif',
            maxWidth: '1100px',
            margin: '40px auto',
            transition: 'all 0.3s ease',
            border: `1px solid ${colors.border}`
        }}>

            {/* CABECERA / PASO 1 */}
            <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    backgroundColor: isDark ? '#1e3a8a' : '#eff6ff',
                    color: colors.primary,
                    padding: '6px 16px',
                    borderRadius: '20px',
                    fontSize: '12px',
                    fontWeight: 'bold',
                    marginBottom: '16px'
                }}>
                    <InventoryIcon sx={{ fontSize: 16 }} /> CALCULADORA DE COSTOS
                </div>
                <h2 style={{ fontSize: '32px', fontWeight: 800, marginBottom: '10px' }}>¿Cuántos equipos vamos a administrar?</h2>
                <p style={{ color: colors.subtext }}>Ajusta la cantidad para ver tu ahorro inmediato.</p>

                <div style={{
                    maxWidth: '500px',
                    margin: '32px auto',
                    padding: '24px',
                    backgroundColor: colors.card,
                    borderRadius: '24px',
                    border: `1px solid ${colors.border}`
                }}>
                    <input
                        type="range" min="5" max="300" step="5" value={cantidad}
                        onChange={(e) => setCantidad(Number(e.target.value))}
                        style={{ width: '100%', cursor: 'pointer', accentColor: colors.primary }}
                    />
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '15px', marginTop: '16px' }}>
                        <span style={{ fontSize: '48px', fontWeight: 900, color: colors.primary }}>{cantidad}</span>
                        <span style={{ fontWeight: 700, opacity: 0.6, textTransform: 'uppercase', fontSize: '14px', letterSpacing: '1px' }}>Equipos</span>
                    </div>
                </div>
            </div>

            {/* COLUMNAS / PASO 2 Y 3 */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: '24px',
                alignItems: 'stretch'
            }}>

                {/* COLUMNA 1: GESTIÓN INTERNA */}
                <div style={{
                    padding: '32px',
                    borderRadius: '24px',
                    border: `1px solid ${colors.border}`,
                    backgroundColor: colors.card,
                    display: 'flex',
                    flexDirection: 'column'
                }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px', color: colors.subtext }}>
                        <BusinessIcon /> <span style={{ fontWeight: 800, fontSize: '12px', textTransform: 'uppercase' }}>Gestión por tu cuenta</span>
                    </div>
                    <div style={{ flexGrow: 1, fontSize: '14px', lineHeight: '2', color: colors.subtext }}>
                        <p>❌ Costo de personal técnico</p>
                        <p>❌ Riesgo de pérdida de información</p>
                        <p>❌ Equipos lentos por falta de soporte</p>
                    </div>
                    <div style={{ marginTop: '30px', borderTop: `1px solid ${colors.border}`, paddingTop: '16px' }}>
                        <small style={{ fontWeight: 700, color: colors.subtext, textTransform: 'uppercase' }}>Costo estimado hoy</small>
                        <div style={{ fontSize: '24px', fontWeight: 700, opacity: 0.5 }}>{formatoCOP(totalInterno)}</div>
                    </div>
                </div>

                {/* COLUMNA 2: TU SERVICIO (RESALTADO) */}
                <div style={{
                    padding: '32px',
                    borderRadius: '24px',
                    backgroundColor: colors.primary,
                    color: '#ffffff',
                    transform: 'scale(1.05)',
                    boxShadow: `0 20px 40px ${isDark ? 'rgba(0,0,0,0.4)' : 'rgba(37, 99, 235, 0.2)'}`,
                    zIndex: 1,
                    display: 'flex',
                    flexDirection: 'column'
                }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
                        <SupportAgentIcon /> <span style={{ fontWeight: 800, fontSize: '12px', textTransform: 'uppercase' }}>Nuestra Solución</span>
                    </div>
                    <div style={{ flexGrow: 1, fontSize: '14px', lineHeight: '2' }}>
                        <p>✅ Soporte profesional 24/7</p>
                        <p>✅ Mantenimiento preventivo</p>
                        <p>✅ <AssessmentIcon sx={{ fontSize: 14 }} /> Inventario en tiempo real</p>
                    </div>
                    <div style={{ borderTop: '1px solid rgba(255,255,255,0.2)', paddingTop: '16px' }}>
                        <small style={{ fontWeight: 700, opacity: 0.8, textTransform: 'uppercase' }}>Inversión Mensual</small>
                        <div style={{ fontSize: '38px', fontWeight: 900 }}>{formatoCOP(totalNosotros)}</div>
                    </div>
                </div>

                {/* COLUMNA 3: EL AHORRO */}
                <div style={{
                    padding: '32px',
                    borderRadius: '24px',
                    textAlign: 'center',
                    backgroundColor: isDark ? 'rgba(16, 185, 129, 0.1)' : '#f0fdf4',
                    border: `1px solid ${isDark ? '#065f46' : '#dcfce7'}`,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center'
                }}>
                    <h3 style={{ color: colors.success, fontWeight: 800, marginBottom: '20px', textTransform: 'uppercase' }}>Tu Ahorro Real</h3>
                    <div style={{ backgroundColor: colors.bg, padding: '20px', borderRadius: '20px', marginBottom: '16px' }}>
                        <span style={{ fontSize: '11px', fontWeight: 700, color: colors.subtext, textTransform: 'uppercase' }}>Al Mes</span>
                        <div style={{ fontSize: '32px', fontWeight: 900, color: colors.success }}>{formatoCOP(ahorroMensual)}</div>
                    </div>
                    <div style={{ backgroundColor: colors.success, color: '#fff', padding: '16px', borderRadius: '16px' }}>
                        <span style={{ fontSize: '10px', fontWeight: 800, textTransform: 'uppercase' }}>Ahorro al Año</span>
                        <div style={{ fontSize: '24px', fontWeight: 800 }}>{formatoCOP(ahorroMensual * 12)}</div>
                    </div>
                </div>

            </div>


            {/* BOTÓN FINAL CON WHATSAPP */}
            <div style={{ textAlign: 'center', marginTop: '60px' }}>
                <button
                    onClick={enviarWhatsApp}
                    style={{
                        backgroundColor: isDark ? colors.primary : '#1e293b',
                        color: '#fff',
                        padding: '20px 48px',
                        borderRadius: '20px',
                        border: 'none',
                        fontSize: '18px',
                        fontWeight: 800,
                        cursor: 'pointer',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '12px',
                        transition: 'transform 0.2s ease',
                        boxShadow: '0 10px 25px rgba(0,0,0,0.1)'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                >
                    QUIERO ESTE PRECIO <LocalShippingIcon />
                </button>
            </div>
        </div>
    );
};

export default CalculadoraAdministracionIT;