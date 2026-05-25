/* ═══════════════════════════════════════════
   DATA BANK — 30+ příkladů
═══════════════════════════════════════════ */
const ALL_TASKS = [
  {
    id: 1,
    name: "Jednoduchá třída A",
    desc: "Máš přidělenu IP adresu <strong>10.5.3.22</strong>. Urči třídu, výchozí masku, adresu sítě a výchozí bránu pro podsíť.",
    topology: "single",
    device_ip: "10.5.3.22",
    fields: [
      { key:"trida", label:"Třída sítě", type:"select", options:["A","B","C","D","E"], answer:"A", hint:"1–126 první oktet" },
      { key:"maska", label:"Výchozí maska", type:"text", answer:"255.0.0.0", hint:"Třída A = /8" },
      { key:"sit", label:"Adresa sítě", type:"text", answer:"10.0.0.0", hint:"Hostová část = 0" },
      { key:"broadcast", label:"Broadcast", type:"text", answer:"10.255.255.255", hint:"Hostová část = 255" },
      { key:"gateway", label:"Typická gateway", type:"text", answer:"10.5.3.1", hint:"První IP v podsíti" },
    ]
  },
  {
    id: 2,
    name: "Třída B síť",
    desc: "Zařízení má IP adresu <strong>172.16.100.50</strong>. Urči parametry sítě.",
    topology: "single",
    device_ip: "172.16.100.50",
    fields: [
      { key:"trida", label:"Třída sítě", type:"select", options:["A","B","C","D","E"], answer:"B", hint:"128–191 první oktet" },
      { key:"maska", label:"Výchozí maska", type:"text", answer:"255.255.0.0", hint:"Třída B = /16" },
      { key:"sit", label:"Adresa sítě", type:"text", answer:"172.16.0.0", hint:"Hostová část = 0" },
      { key:"broadcast", label:"Broadcast", type:"text", answer:"172.16.255.255", hint:"Hostová část = 255" },
      { key:"gateway", label:"Typická gateway", type:"text", answer:"172.16.100.1", hint:"První IP v podsíti" },
    ]
  },
  {
    id: 3,
    name: "Třída C kancelář",
    desc: "Router přidělil počítači IP <strong>192.168.1.45</strong>. Jaká je třída, výchozí maska a brána?",
    topology: "single",
    device_ip: "192.168.1.45",
    fields: [
      { key:"trida", label:"Třída sítě", type:"select", options:["A","B","C","D","E"], answer:"C", hint:"192–223 první oktet" },
      { key:"maska", label:"Výchozí maska", type:"text", answer:"255.255.255.0", hint:"Třída C = /24" },
      { key:"sit", label:"Adresa sítě", type:"text", answer:"192.168.1.0", hint:"Poslední oktet = 0" },
      { key:"broadcast", label:"Broadcast", type:"text", answer:"192.168.1.255", hint:"Poslední oktet = 255" },
      { key:"gateway", label:"Typická gateway", type:"text", answer:"192.168.1.1", hint:"První host" },
    ]
  },
  {
    id: 4,
    name: "VLSM /26",
    desc: "Síť <strong>192.168.10.0/26</strong>. Kolik hostů pojme? Jaký je rozsah a broadcast?",
    topology: "subnet",
    subnet_addr: "192.168.10.0",
    prefix: 26,
    fields: [
      { key:"maska", label:"Maska podsítě", type:"text", answer:"255.255.255.192", hint:"/26 = 192 ve 4. oktetu" },
      { key:"hosts", label:"Max. počet hostů", type:"text", answer:"62", hint:"2^6 - 2 = 62" },
      { key:"prvni", label:"První použitelná IP", type:"text", answer:"192.168.10.1", hint:"Adresa sítě + 1" },
      { key:"posledni", label:"Poslední použitelná IP", type:"text", answer:"192.168.10.62", hint:"Broadcast - 1" },
      { key:"broadcast", label:"Broadcast", type:"text", answer:"192.168.10.63", hint:"192 + 64 - 1 = 63" },
    ]
  },
  {
    id: 5,
    name: "VLSM /28",
    desc: "Máš přidělenu podsíť <strong>10.0.0.0/28</strong>. Určete masku, počet hostů a broadcast.",
    topology: "subnet",
    subnet_addr: "10.0.0.0",
    prefix: 28,
    fields: [
      { key:"maska", label:"Maska podsítě", type:"text", answer:"255.255.255.240", hint:"/28 = 240 ve 4. oktetu" },
      { key:"hosts", label:"Max. počet hostů", type:"text", answer:"14", hint:"2^4 - 2 = 14" },
      { key:"prvni", label:"První použitelná IP", type:"text", answer:"10.0.0.1", hint:"0 + 1 = 1" },
      { key:"posledni", label:"Poslední použitelná IP", type:"text", answer:"10.0.0.14", hint:"Broadcast - 1" },
      { key:"broadcast", label:"Broadcast", type:"text", answer:"10.0.0.15", hint:"0 + 16 - 1 = 15" },
    ]
  },
  {
    id: 6,
    name: "Konfigurace PC",
    desc: "Počítač je v síti <strong>192.168.5.0/24</strong>. Přiřaď mu IP <strong>.10</strong>, nastav masku a gateway.",
    topology: "pc",
    fields: [
      { key:"ip", label:"IP adresa PC", type:"text", answer:"192.168.5.10", hint:"Síť .5.0, hostová část .10" },
      { key:"maska", label:"Maska podsítě", type:"text", answer:"255.255.255.0", hint:"Třída C, /24" },
      { key:"gateway", label:"Výchozí brána", type:"text", answer:"192.168.5.1", hint:"Router, první IP v síti" },
      { key:"broadcast", label:"Broadcast", type:"text", answer:"192.168.5.255", hint:"Poslední IP v /24" },
    ]
  },
  {
    id: 7,
    name: "Router interface",
    desc: "Router má 2 rozhraní: Fa0/0 v síti <strong>192.168.1.0/24</strong> a Fa0/1 v síti <strong>10.0.0.0/8</strong>. Jaké IP dostane každé rozhraní (první host)?",
    topology: "router",
    fields: [
      { key:"fa00", label:"Fa0/0 IP adresa", type:"text", answer:"192.168.1.1", hint:"První host v .1.0/24" },
      { key:"maska00", label:"Fa0/0 maska", type:"text", answer:"255.255.255.0", hint:"/24" },
      { key:"fa01", label:"Fa0/1 IP adresa", type:"text", answer:"10.0.0.1", hint:"První host v 10.0.0.0/8" },
      { key:"maska01", label:"Fa0/1 maska", type:"text", answer:"255.0.0.0", hint:"/8 = třída A" },
    ]
  },
  {
    id: 8,
    name: "/30 Point-to-Point",
    desc: "WAN linka mezi dvěma routery používá síť <strong>172.16.0.0/30</strong>. Kolik hostů má tato podsíť? Jaké IP dostane R1 a R2?",
    topology: "wan",
    fields: [
      { key:"maska", label:"Maska /30", type:"text", answer:"255.255.255.252", hint:"/30 = 252 ve 4. oktetu" },
      { key:"hosts", label:"Počet hostů", type:"text", answer:"2", hint:"2^2 - 2 = 2" },
      { key:"r1", label:"IP Routeru R1", type:"text", answer:"172.16.0.1", hint:"První host" },
      { key:"r2", label:"IP Routeru R2", type:"text", answer:"172.16.0.2", hint:"Druhý host" },
      { key:"broadcast", label:"Broadcast", type:"text", answer:"172.16.0.3", hint:"0 + 4 - 1 = 3" },
    ]
  },
  {
    id: 9,
    name: "Privátní adresy",
    desc: "Která z těchto adres je <em>privátní</em>? <strong>A) 10.5.5.5</strong>  <strong>B) 172.32.0.1</strong>  <strong>C) 192.168.0.1</strong>  <strong>D) 11.0.0.1</strong>",
    topology: "quiz",
    fields: [
      { key:"privA", label:"10.5.5.5 je privátní?", type:"select", options:["ANO","NE"], answer:"ANO", hint:"10.0.0.0/8 je privátní" },
      { key:"privB", label:"172.32.0.1 je privátní?", type:"select", options:["ANO","NE"], answer:"NE", hint:"Privátní je 172.16–31, ne 172.32" },
      { key:"privC", label:"192.168.0.1 je privátní?", type:"select", options:["ANO","NE"], answer:"ANO", hint:"192.168.0.0/16 je privátní" },
      { key:"privD", label:"11.0.0.1 je privátní?", type:"select", options:["ANO","NE"], answer:"NE", hint:"11.x.x.x je veřejná" },
    ]
  },
  {
    id: 10,
    name: "VLSM /29",
    desc: "Podsíť <strong>192.168.20.0/29</strong>. Urči masku, počet hostů, první a poslední IP a broadcast.",
    topology: "subnet",
    subnet_addr: "192.168.20.0",
    prefix: 29,
    fields: [
      { key:"maska", label:"Maska podsítě", type:"text", answer:"255.255.255.248", hint:"/29 = 248" },
      { key:"hosts", label:"Max. počet hostů", type:"text", answer:"6", hint:"2^3 - 2 = 6" },
      { key:"prvni", label:"První použitelná IP", type:"text", answer:"192.168.20.1" },
      { key:"posledni", label:"Poslední použitelná IP", type:"text", answer:"192.168.20.6" },
      { key:"broadcast", label:"Broadcast", type:"text", answer:"192.168.20.7", hint:"0 + 8 - 1 = 7" },
    ]
  },
  {
    id: 11,
    name: "DHCP rozsah",
    desc: "Router přiděluje DHCP v síti <strong>192.168.100.0/24</strong>, rezervujeme .1–.10 pro statiku. Jaký je rozsah DHCP poolu?",
    topology: "dhcp",
    fields: [
      { key:"pool_start", label:"Začátek DHCP poolu", type:"text", answer:"192.168.100.11", hint:".1–.10 rezervováno" },
      { key:"pool_end", label:"Konec DHCP poolu", type:"text", answer:"192.168.100.254", hint:"Poslední použitelná" },
      { key:"maska", label:"Maska", type:"text", answer:"255.255.255.0" },
      { key:"gateway", label:"Výchozí brána", type:"text", answer:"192.168.100.1", hint:"Statická IP routeru" },
    ]
  },
  {
    id: 12,
    name: "Třída D/E",
    desc: "Roztřiď adresy: <strong>224.0.0.5</strong>, <strong>240.5.5.5</strong>, <strong>127.0.0.1</strong>.",
    topology: "quiz",
    fields: [
      { key:"d224", label:"224.0.0.5 třída", type:"select", options:["A","B","C","D","E","loopback"], answer:"D", hint:"224–239 = multicast = D" },
      { key:"e240", label:"240.5.5.5 třída", type:"select", options:["A","B","C","D","E","loopback"], answer:"E", hint:"240–255 = experimentální = E" },
      { key:"lo127", label:"127.0.0.1 je", type:"select", options:["A","B","C","D","E","loopback"], answer:"loopback", hint:"127.x.x.x = loopback" },
    ]
  },
  {
    id: 13,
    name: "CIDR /22",
    desc: "Škola dostala blok <strong>10.1.0.0/22</strong>. Kolik IP adres celkem? Kolik hostů?",
    topology: "subnet",
    subnet_addr: "10.1.0.0",
    prefix: 22,
    fields: [
      { key:"maska", label:"Maska /22", type:"text", answer:"255.255.252.0", hint:"252 ve 3. oktetu" },
      { key:"total", label:"Celkem IP adres", type:"text", answer:"1024", hint:"2^10 = 1024" },
      { key:"hosts", label:"Použitelných hostů", type:"text", answer:"1022", hint:"1024 - 2" },
      { key:"broadcast", label:"Broadcast", type:"text", answer:"10.1.3.255", hint:"10.1.0.0 + 1024 - 1" },
    ]
  },
  {
    id: 14,
    name: "Switch port security",
    desc: "Switch port je nakonfigurován: <strong>192.168.50.0/25</strong>. Najdi druhou podsíť /25 ve stejné /24 síti.",
    topology: "subnet",
    subnet_addr: "192.168.50.0",
    prefix: 25,
    fields: [
      { key:"maska", label:"Maska /25", type:"text", answer:"255.255.255.128", hint:"/25 = 128" },
      { key:"hosts", label:"Hostů v /25", type:"text", answer:"126", hint:"2^7 - 2 = 126" },
      { key:"sit2", label:"Adresa 2. podsítě", type:"text", answer:"192.168.50.128", hint:"0 + 128 = 128" },
      { key:"bc2", label:"Broadcast 2. podsítě", type:"text", answer:"192.168.50.255" },
    ]
  },
  {
    id: 15,
    name: "IPv4 loopback",
    desc: "Jaký je rozsah loopback adres? Jaká je nejznámější loopback adresa? Je loopback směrovatelný přes internet?",
    topology: "quiz",
    fields: [
      { key:"rozsah", label:"Rozsah loopback", type:"text", answer:"127.0.0.0/8", hint:"Celý blok 127.x.x.x" },
      { key:"znama", label:"Nejznámější loopback IP", type:"text", answer:"127.0.0.1", hint:"localhost" },
      { key:"internet", label:"Směrovatelný přes internet?", type:"select", options:["ANO","NE"], answer:"NE", hint:"Nikdy neopustí zařízení" },
    ]
  },
  {
    id: 16,
    name: "Tři PC v síti",
    desc: "Síť <strong>192.168.200.0/24</strong>. Přiřaď IP adresy třem PC (druhý, třetí a čtvrtý host). Gateway je .1.",
    topology: "multi_pc",
    fields: [
      { key:"pc1", label:"PC1 IP adresa", type:"text", answer:"192.168.200.2", hint:"Druhý host = .2" },
      { key:"pc2", label:"PC2 IP adresa", type:"text", answer:"192.168.200.3", hint:"Třetí host = .3" },
      { key:"pc3", label:"PC3 IP adresa", type:"text", answer:"192.168.200.4", hint:"Čtvrtý host = .4" },
      { key:"maska", label:"Maska", type:"text", answer:"255.255.255.0" },
      { key:"gateway", label:"Gateway všech PC", type:"text", answer:"192.168.200.1" },
    ]
  },
  {
    id: 17,
    name: "VLSM plánování",
    desc: "Firma potřebuje 50 hostů. Jaká je nejmenší podsíť (prefix), která to zvládne?",
    topology: "quiz",
    fields: [
      { key:"prefix", label:"Nejmenší prefix (/x)", type:"text", answer:"/26", hint:"2^6 - 2 = 62 >= 50" },
      { key:"maska", label:"Maska", type:"text", answer:"255.255.255.192", hint:"/26 = 192" },
      { key:"hosts", label:"Použitelných hostů", type:"text", answer:"62", hint:"2^6 - 2" },
    ]
  },
  {
    id: 18,
    name: "NAT/PAT",
    desc: "Router dělá NAT. Privátní síť <strong>192.168.1.0/24</strong> → veřejná IP <strong>203.0.113.5</strong>. Která část je inside local, inside global?",
    topology: "quiz",
    fields: [
      { key:"inside_local", label:"Inside local adresa (příklad)", type:"text", answer:"192.168.1.0", hint:"Privátní IP uvnitř sítě" },
      { key:"inside_global", label:"Inside global adresa", type:"text", answer:"203.0.113.5", hint:"Veřejná IP na WAN rozhraní" },
      { key:"typ", label:"Maska inside local sítě", type:"text", answer:"255.255.255.0", hint:"/24" },
    ]
  },
  {
    id: 19,
    name: "Supernet /23",
    desc: "Dvě sítě: <strong>192.168.4.0/24</strong> a <strong>192.168.5.0/24</strong> jsou sloučeny do supernetu. Jaká je výsledná adresa?",
    topology: "quiz",
    fields: [
      { key:"superip", label:"Supernetová adresa", type:"text", answer:"192.168.4.0", hint:"Nižší z obou = 192.168.4.0" },
      { key:"superprefix", label:"Supernetový prefix", type:"text", answer:"/23", hint:"O 1 méně než /24" },
      { key:"supermaska", label:"Supernet maska", type:"text", answer:"255.255.254.0", hint:"/23 = 254 ve 3. oktetu" },
    ]
  },
  {
    id: 20,
    name: "Ethernet frame",
    desc: "Identifikuj správné hodnoty. Která adresa je MAC? Která je IPv4? Jaký je prefix link-local adresy?",
    topology: "quiz",
    fields: [
      { key:"mac", label:"Příklad MAC adresy", type:"text", answer:"AA:BB:CC:DD:EE:FF", hint:"6 oktetů hex oddělených :" },
      { key:"ll", label:"Link-local prefix (IPv4)", type:"text", answer:"169.254.0.0/16", hint:"APIPA = 169.254.x.x" },
      { key:"broadcast_mac", label:"Broadcast MAC adresa", type:"text", answer:"FF:FF:FF:FF:FF:FF", hint:"Všechny bity = 1" },
    ]
  },
  {
    id: 21,
    name: "Maska v bin.",
    desc: "Převeď masku <strong>/20</strong> do dekadické tečkové notace a urči počet hostů.",
    topology: "quiz",
    fields: [
      { key:"maska", label:"Maska /20 v decimálním zápisu", type:"text", answer:"255.255.240.0", hint:"11111111.11111111.11110000.00000000" },
      { key:"hosts", label:"Max. hostů", type:"text", answer:"4094", hint:"2^12 - 2 = 4094" },
      { key:"blok", label:"Velikost bloku (krok)", type:"text", answer:"16", hint:"256 - 240 = 16" },
    ]
  },
  {
    id: 22,
    name: "WAN sériová linka",
    desc: "Sériová linka mezi routery: <strong>172.30.0.0/30</strong>. Jaké IP dostane DCE a DTE strana?",
    topology: "wan",
    fields: [
      { key:"maska", label:"Maska", type:"text", answer:"255.255.255.252" },
      { key:"dce", label:"DCE IP (první host)", type:"text", answer:"172.30.0.1", hint:"Nastaví hodinový signál" },
      { key:"dte", label:"DTE IP (druhý host)", type:"text", answer:"172.30.0.2" },
      { key:"broadcast", label:"Broadcast", type:"text", answer:"172.30.0.3" },
    ]
  },
  {
    id: 23,
    name: "Třída B s maskou",
    desc: "Firma použila adresu <strong>172.20.50.100</strong> s vlastní maskou <strong>/27</strong>. Urči adresu sítě a broadcast.",
    topology: "single",
    device_ip: "172.20.50.100",
    fields: [
      { key:"maska", label:"Maska /27", type:"text", answer:"255.255.255.224", hint:"224 ve 4. oktetu" },
      { key:"sit", label:"Adresa sítě", type:"text", answer:"172.20.50.96", hint:"100 AND 224 = 96" },
      { key:"broadcast", label:"Broadcast", type:"text", answer:"172.20.50.127", hint:"96 + 32 - 1 = 127" },
      { key:"hosts", label:"Počet hostů", type:"text", answer:"30", hint:"2^5 - 2 = 30" },
    ]
  },
  {
    id: 24,
    name: "Multicast třída D",
    desc: "Identifikuj multicast skupiny. Na jaké vrstvě pracuje OSPF multicast <strong>224.0.0.5</strong>?",
    topology: "quiz",
    fields: [
      { key:"trida", label:"Třída 224.0.0.5", type:"select", options:["A","B","C","D","E"], answer:"D" },
      { key:"vrstva", label:"OSPF pracuje na vrstvě (OSI)", type:"text", answer:"3", hint:"Síťová vrstva = L3" },
      { key:"ospf2", label:"All OSPF DRs multicast IP", type:"text", answer:"224.0.0.6", hint:"224.0.0.5 = all routers, .6 = DR" },
    ]
  },
  {
    id: 25,
    name: "Adresace VLAN",
    desc: "VLAN 10 má síť <strong>10.10.10.0/24</strong>, VLAN 20 má <strong>10.10.20.0/24</strong>. Jaké gateway adresy nastavíš PC v každé VLAN?",
    topology: "vlan",
    fields: [
      { key:"gw10", label:"Gateway VLAN 10", type:"text", answer:"10.10.10.1", hint:"První host v 10.10.10.0/24" },
      { key:"gw20", label:"Gateway VLAN 20", type:"text", answer:"10.10.20.1", hint:"První host v 10.10.20.0/24" },
      { key:"maska", label:"Maska obou VLAN", type:"text", answer:"255.255.255.0" },
      { key:"inter_vlan", label:"Název techniky mezi-VLAN routingu", type:"text", answer:"Router-on-a-Stick", hint:"Jedno fyzické rozhraní, subinterfaces" },
    ]
  },
  {
    id: 26,
    name: "/25 druhá podsíť",
    desc: "Síť <strong>192.168.8.0/24</strong> je rozdělena na dvě /25. Jaká je adresa a broadcast druhé podsítě?",
    topology: "subnet",
    subnet_addr: "192.168.8.0",
    prefix: 24,
    fields: [
      { key:"sit1", label:"1. podsíť adresa", type:"text", answer:"192.168.8.0" },
      { key:"bc1", label:"1. podsíť broadcast", type:"text", answer:"192.168.8.127" },
      { key:"sit2", label:"2. podsíť adresa", type:"text", answer:"192.168.8.128" },
      { key:"bc2", label:"2. podsíť broadcast", type:"text", answer:"192.168.8.255" },
    ]
  },
  {
    id: 27,
    name: "10.0.0.0 blok",
    desc: "Jak velký je privátní blok <strong>10.0.0.0/8</strong>? Kolik podsítí /24 se do něj vejde?",
    topology: "quiz",
    fields: [
      { key:"total", label:"Celkem IP adres v /8", type:"text", answer:"16777216", hint:"2^24" },
      { key:"subnets24", label:"Počet podsítí /24 v /8", type:"text", answer:"65536", hint:"2^16" },
      { key:"maska", label:"Maska /8", type:"text", answer:"255.0.0.0" },
    ]
  },
  {
    id: 28,
    name: "Konfigurace serveru",
    desc: "Server v DMZ dostane IP <strong>203.0.113.10/28</strong>. Jaká je maska, adresa sítě, gateway a broadcast?",
    topology: "single",
    device_ip: "203.0.113.10",
    fields: [
      { key:"maska", label:"Maska /28", type:"text", answer:"255.255.255.240" },
      { key:"sit", label:"Adresa sítě", type:"text", answer:"203.0.113.0", hint:"10 AND 240 = 0" },
      { key:"gateway", label:"Typická gateway", type:"text", answer:"203.0.113.1" },
      { key:"broadcast", label:"Broadcast", type:"text", answer:"203.0.113.15", hint:"0 + 16 - 1 = 15" },
    ]
  },
  {
    id: 29,
    name: "Subnetting /19",
    desc: "Blok <strong>172.16.0.0/19</strong>. Urči masku, počet hostů, a broadcast.",
    topology: "subnet",
    subnet_addr: "172.16.0.0",
    prefix: 19,
    fields: [
      { key:"maska", label:"Maska /19", type:"text", answer:"255.255.224.0", hint:"224 ve 3. oktetu" },
      { key:"hosts", label:"Max. hostů", type:"text", answer:"8190", hint:"2^13 - 2" },
      { key:"broadcast", label:"Broadcast", type:"text", answer:"172.16.31.255", hint:"172.16.0.0 + 8192 - 1" },
    ]
  },
  {
    id: 30,
    name: "Výchozí brána",
    desc: "PC má IP <strong>192.168.3.15/24</strong>. Může komunikovat s PC na adrese <strong>192.168.3.200</strong> bez routeru? A s <strong>10.0.0.5</strong>?",
    topology: "quiz",
    fields: [
      { key:"same", label:"Komunikace s 192.168.3.200 (bez routeru)?", type:"select", options:["ANO","NE"], answer:"ANO", hint:"Stejná /24 podsíť" },
      { key:"diff", label:"Komunikace s 10.0.0.5 (bez routeru)?", type:"select", options:["ANO","NE"], answer:"NE", hint:"Jiná síť = nutný router" },
      { key:"maska", label:"Maska PC", type:"text", answer:"255.255.255.0" },
      { key:"sit", label:"Adresa sítě PC", type:"text", answer:"192.168.3.0" },
    ]
  },
];

/* ═══════════════════════════════════════════
   EMOTION SYSTEM
═══════════════════════════════════════════ */
const EMOTIONS = {
  furious:  { label: "😤 FURIOUS",  color: "var(--furious)", comment: ["To je katastrofa! Přečti si učebnici 10×!","Packet Tracer pláče, já taky.","Jsi poslední, kdo by měl konfigurovat síť."] },
  angry:    { label: "😠 ANGRY",    color: "var(--angry)",   comment: ["Tohle nás fakt trápí... Zkus znovu.","Příšerný výsledek. Kde jsi byl na přednáškách?","Packet Tracer se stydí."] },
  medium:   { label: "😐 MEDIUM",   color: "var(--medium)",  comment: ["Ujde to, ale mohl bys lépe.","Průměr. Cisco čeká víc.","Ani špatné, ani dobré. Zkus víc."] },
  good:     { label: "😊 GOOD",     color: "var(--good)",    comment: ["Hezky! Cisco by tě pochválilo.","To se mi líbí. Pokračuj takhle!","Dobrá práce, ale excellence ještě čeká."] },
  excellent:{ label: "🤩 EXCELLENT",color: "var(--excellent)",comment: ["BRILLIANT! Jsi Cisco Packet Tracer MASTER!","Packet Tracer se raduje! Skvělý výkon!","Tohle je ten výkon, pro který se žije!"] },
};

function getEmotion(pct) {
  if (pct < 20) return 'furious';
  if (pct < 40) return 'angry';
  if (pct < 60) return 'medium';
  if (pct < 80) return 'good';
  return 'excellent';
}

/* ═══════════════════════════════════════════
   IMAGE CONFIG
   Nahraď prázdné řetězce cestami k obrázkům
   např: "teacher_excellent.jpg"
═══════════════════════════════════════════ */
const TEACHER_IMAGES = {
  furious:  "teacher/furious.jpg",
  angry:    "teacher/angry.jpg",
  medium:   "teacher/medium.jpg",
  good:     "teacher/good.jpg",
  excellent:"teacher/excellent.jpg",
};

/* ═══════════════════════════════════════════
   GAME STATE
═══════════════════════════════════════════ */
let state = {
  tasks: [],
  current: 0,
  score: 0,
  total: 10,
  streak: 0,
  timeLeft: 60,
  timerInterval: null,
  answered: false,
  totalTime: 0,
  taskStartTime: 0,
  taskTimes: [],
};

/* ═══════════════════════════════════════════
   UTILITIES
═══════════════════════════════════════════ */
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function norm(s) {
  return s.toString().trim().toLowerCase()
    .replace(/\s+/g,'')
    .replace(/['"]/g,'');
}

function checkAnswer(userVal, correctVal) {
  // Try exact match
  if (norm(userVal) === norm(correctVal)) return true;
  // Try numeric match
  const u = parseFloat(userVal), c = parseFloat(correctVal);
  if (!isNaN(u) && !isNaN(c) && u === c) return true;
  return false;
}

/* ═══════════════════════════════════════════
   SCREENS
═══════════════════════════════════════════ */
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById('screen-' + id).classList.add('active');
}

/* ═══════════════════════════════════════════
   TEACHER UPDATE
═══════════════════════════════════════════ */
function updateTeacher(emotionKey) {
  const e = EMOTIONS[emotionKey];
  const panel = document.getElementById('teacher-panel');
  panel.className = 'teacher-panel emotion-' + emotionKey;

  document.getElementById('emotion-label').textContent = e.label;
  document.getElementById('emotion-label').style.color = e.color;

  const bars = document.querySelectorAll('#emotion-bar span');
  const levels = {furious:1, angry:2, medium:3, good:4, excellent:5};
  const lvl = levels[emotionKey];
  bars.forEach((b,i) => {
    b.style.background = i < lvl ? e.color : 'rgba(255,255,255,0.05)';
  });

  // Comment
  const comments = e.comment;
  document.getElementById('teacher-comment').textContent =
    comments[Math.floor(Math.random() * comments.length)];

  // Image
  const imgSrc = TEACHER_IMAGES[emotionKey];
  const img = document.getElementById('teacher-img');
  const ph = document.getElementById('teacher-placeholder');
  const phHint = document.getElementById('ph-emotion-hint');
  if (imgSrc) {
    img.src = imgSrc;
    img.style.display = 'block';
    ph.style.display = 'none';
  } else {
    img.style.display = 'none';
    ph.style.display = 'flex';
    phHint.textContent = `[ teacher_${emotionKey}.jpg ]`;
  }
}

/* ═══════════════════════════════════════════
   SCORE HEARTS
═══════════════════════════════════════════ */
function renderHearts() {
  const wrap = document.getElementById('score-hearts');
  wrap.innerHTML = '';
  for (let i = 0; i < state.total; i++) {
    const h = document.createElement('span');
    h.className = 'heart' + (i < state.score ? ' active' : '');
    h.textContent = i < state.score ? '💙' : '🩶';
    wrap.appendChild(h);
  }
}

/* ═══════════════════════════════════════════
   TIMER
═══════════════════════════════════════════ */
function startTimer() {
  clearInterval(state.timerInterval);
  state.timeLeft = 60;
  state.taskStartTime = Date.now();
  renderTimer();
  state.timerInterval = setInterval(() => {
    state.timeLeft--;
    renderTimer();
    if (state.timeLeft <= 0) {
      clearInterval(state.timerInterval);
      if (!state.answered) autoFail();
    }
  }, 1000);
}

function renderTimer() {
  const el = document.getElementById('timer-value');
  el.textContent = state.timeLeft;
  el.className = 'timer-value';
  if (state.timeLeft <= 10) el.classList.add('danger');
  else if (state.timeLeft <= 20) el.classList.add('warn');
}

function autoFail() {
  state.answered = true;
  state.streak = 0;
  const elapsed = Math.round((Date.now() - state.taskStartTime) / 1000);
  state.taskTimes.push(elapsed);

  // Mark all wrong
  const task = state.tasks[state.current];
  task.fields.forEach(f => {
    const el = document.getElementById('field-' + f.key);
    if (el) {
      el.classList.add('wrong');
      el.disabled = true;
    }
  });
  showFeedback(false, task.fields, "⏱ Čas vypršel!");
  updateEmotionFromScore();
  document.getElementById('btn-check').disabled = true;
  document.getElementById('btn-next').style.display = 'inline-block';
  document.getElementById('streak-display').textContent = state.streak;
}

/* ═══════════════════════════════════════════
   TOPOLOGY SVG
═══════════════════════════════════════════ */
function renderTopology(task) {
  const w = 500, h = 180;
  const svgNS = "http://www.w3.org/2000/svg";
  const svg = document.createElementNS(svgNS,"svg");
  svg.setAttribute("viewBox",`0 0 ${w} ${h}`);
  svg.setAttribute("xmlns", svgNS);

  function line(x1,y1,x2,y2,dash=false) {
    const l = document.createElementNS(svgNS,"line");
    l.setAttribute("x1",x1); l.setAttribute("y1",y1);
    l.setAttribute("x2",x2); l.setAttribute("y2",y2);
    l.setAttribute("stroke","rgba(26,115,232,0.5)");
    l.setAttribute("stroke-width","2");
    if (dash) l.setAttribute("stroke-dasharray","6 3");
    svg.appendChild(l);
    return l;
  }

  function device(x,y,type,label,ip="") {
    const g = document.createElementNS(svgNS,"g");
    // shadow circle
    const shadow = document.createElementNS(svgNS,"circle");
    shadow.setAttribute("cx",x); shadow.setAttribute("cy",y);
    shadow.setAttribute("r","26");
    shadow.setAttribute("fill","rgba(0,188,235,0.08)");
    g.appendChild(shadow);

    const c = document.createElementNS(svgNS,"circle");
    c.setAttribute("cx",x); c.setAttribute("cy",y);
    c.setAttribute("r","22");
    const colors = {
      router: "#003a6b", switch: "#1a4a1a", pc: "#1a2a3a",
      server: "#2a1a3a", cloud: "#2a2a2a"
    };
    c.setAttribute("fill", colors[type] || "#1a2a3a");
    c.setAttribute("stroke","rgba(26,115,232,0.6)");
    c.setAttribute("stroke-width","1.5");
    g.appendChild(c);

    const icons = {
      router: "⟳", switch: "⇌", pc: "🖥",
      server: "🖧", cloud: "☁"
    };
    const icon = document.createElementNS(svgNS,"text");
    icon.setAttribute("x",x); icon.setAttribute("y",y+5);
    icon.setAttribute("text-anchor","middle");
    icon.setAttribute("font-size","16");
    icon.textContent = icons[type] || "?";
    g.appendChild(icon);

    const lbl = document.createElementNS(svgNS,"text");
    lbl.setAttribute("x",x); lbl.setAttribute("y",y+38);
    lbl.setAttribute("text-anchor","middle");
    lbl.setAttribute("font-size","11");
    lbl.setAttribute("fill","rgba(232,244,255,0.8)");
    lbl.setAttribute("font-family","'Share Tech Mono',monospace");
    lbl.textContent = label;
    g.appendChild(lbl);

    if (ip) {
      const ipl = document.createElementNS(svgNS,"text");
      ipl.setAttribute("x",x); ipl.setAttribute("y",y+51);
      ipl.setAttribute("text-anchor","middle");
      ipl.setAttribute("font-size","9");
      ipl.setAttribute("fill","rgba(0,188,235,0.9)");
      ipl.setAttribute("font-family","'Share Tech Mono',monospace");
      ipl.textContent = ip;
      g.appendChild(ipl);
    }

    svg.appendChild(g);
  }

  function label(x,y,text,color="#5a7a9a") {
    const t = document.createElementNS(svgNS,"text");
    t.setAttribute("x",x); t.setAttribute("y",y);
    t.setAttribute("text-anchor","middle");
    t.setAttribute("font-size","9");
    t.setAttribute("fill",color);
    t.setAttribute("font-family","'Share Tech Mono',monospace");
    t.textContent = text;
    svg.appendChild(t);
  }

  switch(task.topology) {
    case "single":
      line(250,90,400,90);
      device(130,90,"router","Router","GW: .1");
      device(250,90,"switch","Switch","");
      device(390,90,"pc","PC",task.device_ip||"???");
      label(190,80,"LAN");
      break;
    case "subnet":
      line(80,90,420,90);
      device(60,90,"router","Router","ISP");
      device(180,90,"switch","Switch","");
      device(300,90,"pc","PC1","");
      device(420,90,"pc","PC2","");
      label(100,78,task.subnet_addr+"/"+(task.prefix||"?"),"#00bceb");
      break;
    case "pc":
      line(200,90,350,90);
      device(120,90,"router","Router","GW");
      device(250,90,"switch","Switch","");
      device(390,90,"pc","PC","???");
      label(165,80,"LAN","#00bceb");
      break;
    case "router":
      line(80,90,240,90,true);
      line(260,90,420,90,true);
      device(60,90,"cloud","Cloud","WAN");
      device(250,90,"router","Router","R1");
      device(430,90,"switch","Switch","LAN");
      label(170,78,"Fa0/1","#00bceb");
      label(340,78,"Fa0/0","#00bceb");
      break;
    case "wan":
      line(80,90,250,90,true);
      line(250,90,420,90,true);
      device(60,90,"router","R1","DCE");
      device(250,90,"cloud","Cloud","WAN");
      device(430,90,"router","R2","DTE");
      label(165,78,"S0/0/0","#00bceb");
      label(340,78,"S0/0/1","#00bceb");
      break;
    case "vlan":
      line(120,90,250,90);
      line(250,90,380,90);
      line(250,90,250,50);
      device(90,90,"router","Router","GW");
      device(250,90,"switch","SW1","trunk");
      device(390,90,"pc","VLAN10","");
      device(250,30,"pc","VLAN20","");
      label(170,80,"trunk","#00bceb");
      break;
    case "dhcp":
      line(120,90,250,90);
      line(250,90,380,90);
      device(90,90,"server","DHCP","Server");
      device(250,90,"switch","Switch","");
      device(400,90,"pc","PC","DHCP");
      label(170,80,"LAN","#00bceb");
      break;
    case "multi_pc":
      line(120,90,230,90);
      line(230,90,340,90);
      line(230,90,230,40);
      device(90,90,"router","Router","GW");
      device(250,90,"switch","Switch","");
      device(370,90,"pc","PC1","");
      device(250,30,"pc","PC2","");
      break;
    default: // quiz
      device(120,90,"router","Router","");
      line(190,90,310,90,true);
      device(330,90,"cloud","Internet","");
      label(250,80,"?","#00bceb");
      break;
  }
  return svg;
}

/* ═══════════════════════════════════════════
   RENDER TASK
═══════════════════════════════════════════ */
function renderTask() {
  const task = state.tasks[state.current];
  const main = document.getElementById('game-main');
  state.answered = false;

  // Progress
  const pct = (state.current / state.total) * 100;
  document.getElementById('progress-fill').style.width = pct + '%';
  document.getElementById('topbar-progress').textContent =
    (state.current+1) + ' / ' + state.total;

  // Emotion (start at medium, then based on performance)
  const emotionPct = state.score > 0 ? (state.score / state.total) * 100 : 50;
  updateTeacher(getEmotion(emotionPct));
  renderHearts();
  document.getElementById('streak-display').textContent = state.streak;

  // Build HTML
  let fieldsHtml = '';
  task.fields.forEach(f => {
    const wide = task.fields.length <= 2 ? ' field-full' : '';
    if (f.type === 'select') {
      const opts = f.options.map(o =>
        `<option value="${o}">${o}</option>`).join('');
      fieldsHtml += `
        <div class="field-group${wide}">
          <label class="field-label">${f.label}</label>
          <select class="field-select" id="field-${f.key}" name="${f.key}">
            <option value="">-- vyber --</option>
            ${opts}
          </select>
          ${f.hint ? `<span class="field-hint">💡 ${f.hint}</span>` : ''}
        </div>`;
    } else {
      fieldsHtml += `
        <div class="field-group${wide}">
          <label class="field-label">${f.label}</label>
          <input class="field-input" id="field-${f.key}" name="${f.key}"
            type="text" placeholder="..." autocomplete="off" spellcheck="false">
          ${f.hint ? `<span class="field-hint">💡 ${f.hint}</span>` : ''}
        </div>`;
    }
  });

  main.innerHTML = `
    <div class="task-header">
      <span class="task-num">PŘÍKLAD ${state.current+1}/${state.total}</span>
      <h2 class="task-title">${task.name}</h2>
    </div>
    <div class="network-diagram">
      <div class="diagram-title">Topologie sítě</div>
      <div class="network-svg-wrap" id="svg-wrap"></div>
    </div>
    <div class="task-panel">
      <h3>Konfigurace</h3>
      <p class="task-desc">${task.desc}</p>
      <div class="form-grid">${fieldsHtml}</div>
      <div class="feedback-banner" id="feedback-banner"></div>
      <div>
        <button class="btn-check" id="btn-check">✔ ZKONTROLOVAT</button>
        <button class="btn-next" id="btn-next">→ DALŠÍ</button>
      </div>
    </div>
  `;

  // SVG
  document.getElementById('svg-wrap').appendChild(renderTopology(task));

  // Enter key
  main.querySelectorAll('input').forEach(inp => {
    inp.addEventListener('keydown', e => {
      if (e.key === 'Enter') document.getElementById('btn-check').click();
    });
  });

  document.getElementById('btn-check').addEventListener('click', checkTask);
  document.getElementById('btn-next').addEventListener('click', nextTask);

  startTimer();

  // Scroll to top
  main.scrollTop = 0;
}

/* ═══════════════════════════════════════════
   CHECK TASK
═══════════════════════════════════════════ */
function showFeedback(allCorrect, fields, extraMsg="") {
  const banner = document.getElementById('feedback-banner');
  if (allCorrect) {
    banner.className = 'feedback-banner success';
    banner.innerHTML = `✅ Správně! Výborná konfigurace!${extraMsg ? ' ' + extraMsg : ''}`;
  } else {
    let wrongInfo = fields.filter(f => {
      const el = document.getElementById('field-' + f.key);
      return el && el.classList.contains('wrong');
    }).map(f => `<div class="correct-answers">${f.label}: správně <span>${f.answer}</span></div>`).join('');
    banner.className = 'feedback-banner fail';
    banner.innerHTML = `❌ Chyba! Správné odpovědi:${extraMsg ? ' ' + extraMsg : ''}<br>${wrongInfo}`;
  }
}

function checkTask() {
  if (state.answered) return;
  clearInterval(state.timerInterval);
  state.answered = true;

  const elapsed = Math.round((Date.now() - state.taskStartTime) / 1000);
  state.taskTimes.push(elapsed);

  const task = state.tasks[state.current];
  let allCorrect = true;

  task.fields.forEach(f => {
    const el = document.getElementById('field-' + f.key);
    if (!el) return;
    const userVal = el.value.trim();
    const correct = checkAnswer(userVal, f.answer);
    el.classList.remove('correct','wrong');
    el.classList.add(correct ? 'correct' : 'wrong');
    el.disabled = true;
    if (!correct) allCorrect = false;
  });

  if (allCorrect) {
    state.score++;
    state.streak++;
  } else {
    state.streak = 0;
  }

  showFeedback(allCorrect, task.fields);
  updateEmotionFromScore();
  renderHearts();
  document.getElementById('streak-display').textContent = state.streak;
  document.getElementById('btn-check').disabled = true;
  document.getElementById('btn-next').style.display = 'inline-block';
}

function updateEmotionFromScore() {
  const pct = state.total ? (state.score / state.total) * 100 : 50;
  updateTeacher(getEmotion(pct));
}

/* ═══════════════════════════════════════════
   NEXT TASK
═══════════════════════════════════════════ */
function nextTask() {
  state.current++;
  if (state.current >= state.total) {
    showResults();
  } else {
    renderTask();
  }
}

/* ═══════════════════════════════════════════
   RESULTS
═══════════════════════════════════════════ */
function showResults() {
  clearInterval(state.timerInterval);
  showScreen('results');

  const pct = Math.round((state.score / state.total) * 100);
  const emotionKey = getEmotion(pct);
  const avg = state.taskTimes.length
    ? Math.round(state.taskTimes.reduce((a,b)=>a+b,0)/state.taskTimes.length)
    : 0;

  document.getElementById('res-correct').textContent = state.score;
  document.getElementById('res-total').textContent = state.total;
  document.getElementById('res-pct').textContent = pct + '%';
  document.getElementById('res-time').textContent = avg + 's';

  const stars = pct >= 80 ? '⭐⭐⭐' : pct >= 50 ? '⭐⭐' : '⭐';
  document.getElementById('result-stars').textContent = stars;

  const titles = {
    furious: "Katastrofa!", angry: "Potřebuješ více cvičení.",
    medium: "Průměrný výsledek.", good: "Pěkná práce!",
    excellent: "PACKET TRACER MASTER!"
  };
  document.getElementById('result-title').textContent = titles[emotionKey];
  document.getElementById('result-title').style.color = EMOTIONS[emotionKey].color;

  const e = EMOTIONS[emotionKey];
  document.getElementById('result-subtitle').textContent =
    e.comment[Math.floor(Math.random()*e.comment.length)];

  // Teacher image in results
  const imgSrc = TEACHER_IMAGES[emotionKey];
  const wrap = document.getElementById('result-teacher-wrap');
  if (imgSrc) {
    wrap.outerHTML = `<img class="result-teacher" src="${imgSrc}" alt="Martin Buriánek" id="result-teacher-wrap">`;
  } else {
    wrap.innerHTML = `
      <div style="font-size:3rem">${emotionKey==='excellent'?'🤩':emotionKey==='good'?'😊':emotionKey==='medium'?'😐':emotionKey==='angry'?'😠':'😤'}</div>
      <div style="font-size:0.7rem;margin-top:6px;color:var(--text-muted)">Martin Buriánek</div>
      <div style="font-size:0.55rem;opacity:0.6;color:var(--text-muted)">[ teacher_${emotionKey}.jpg ]</div>`;
    wrap.style.border = `4px solid ${e.color}`;
    wrap.style.boxShadow = `0 0 60px ${e.color}66`;
  }
}

/* ═══════════════════════════════════════════
   START GAME
═══════════════════════════════════════════ */
function startGame(count) {
  clearInterval(state.timerInterval);
  const shuffled = shuffle(ALL_TASKS);
  state = {
    tasks: shuffled.slice(0, Math.min(count, shuffled.length)),
    current: 0,
    score: 0,
    total: Math.min(count, shuffled.length),
    streak: 0,
    timeLeft: 60,
    timerInterval: null,
    answered: false,
    totalTime: 0,
    taskStartTime: Date.now(),
    taskTimes: [],
  };
  showScreen('game');
  renderTask();
}

/* ═══════════════════════════════════════════
   MENU INIT
═══════════════════════════════════════════ */
let selectedCount = 10;

document.getElementById('count-btns').addEventListener('click', e => {
  const btn = e.target.closest('.count-btn');
  if (!btn) return;
  document.querySelectorAll('.count-btn').forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');
  selectedCount = parseInt(btn.dataset.val);
});

document.getElementById('btn-start').addEventListener('click', () => {
  startGame(selectedCount);
});

document.getElementById('btn-restart').addEventListener('click', () => {
  showScreen('menu');
});

document.getElementById('btn-menu').addEventListener('click', () => {
  clearInterval(state.timerInterval);
  showScreen('menu');
});

document.getElementById('btn-help').addEventListener('click', () => {
  document.getElementById('cheatsheet-overlay').classList.add('open');
});

document.getElementById('cheatsheet-close').addEventListener('click', () => {
  document.getElementById('cheatsheet-overlay').classList.remove('open');
});

document.getElementById('cheatsheet-overlay').addEventListener('click', (e) => {
  if (e.target === e.currentTarget) {
    document.getElementById('cheatsheet-overlay').classList.remove('open');
  }
});

document.querySelector('.cheatsheet-img').addEventListener('click', (e) => {
  e.stopPropagation();
  e.currentTarget.classList.toggle('zoomed');
});

document.querySelector('.cheatsheet-img').addEventListener('wheel', (e) => {
  e.preventDefault();
  const img = e.currentTarget;
  const current = img.classList.contains('zoomed') ? 1.8 : 1;
  const delta = e.deltaY > 0 ? -0.3 : 0.3;
  const next = Math.max(1, Math.min(4, current + delta));
  if (next > 1) img.classList.add('zoomed');
  else img.classList.remove('zoomed');
  img.style.transform = `scale(${next})`;
}, { passive: false });
