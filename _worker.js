const Ds=V;import{connect as K}from'cloudflare:sockets';const _d=atob,_r2=new RegExp('^('+_d(Ds(0x29f))+'|http|https|ss):\x5c/\x5c/(.+)$','i'),_r3=new RegExp(_d(Ds(0x3a2))+'|'+_d('c2luZ2JveA==')+'|'+_d(Ds(0x1dd))+'|'+_d(Ds(0x647))+'|'+_d(Ds(0x52d))+'|'+_d(Ds(0x692))+'|'+_d(Ds(0x43d))),_r4=new RegExp(_d(Ds(0x1da)),'i'),_r0=new RegExp(Ds(0x1f4)+_d(Ds(0x160))+'|'+_d(Ds(0x4a8))+Ds(0x740)),_r1=new RegExp('^'+_d(Ds(0x160))+Ds(0x1be)),VERSION=Ds(0x348),DEPLOY_EDITION=Ds(0x482),__B=Ds(0x6cc)+Ds(0x4ba),__AC=Ds(0x4cd)+Ds(0x565);function e(){const Da=V;try{return Da(0x4a4)===DEPLOY_EDITION?'novel':'混淆版'===DEPLOY_EDITION?Da(0x388):Da(0x56a);}catch(H){return Da(0x56a);}}const s=Ds(0x518),i=Ds(0x1f5),l={'Tracking':{'url':'https://github.com/'+_d('NjY2T1M=')+Ds(0xd4)+_d(Ds(0x169))+Ds(0x43c),'ct':s},'Advertising':{'url':Ds(0x717)+_d(Ds(0x55e))+'/rules/raw/release/'+_d(Ds(0x169))+Ds(0x3b9),'ct':s},'AWAvenueAds':{'url':Ds(0x66a)+_d(Ds(0x72c))+'/'+_d(Ds(0x261))+'-Ads-Rule/main/Filters/'+_d(Ds(0x261))+Ds(0xe3)+_d(Ds(0x5af))+'.yaml','ct':i},'Direct':{'url':Ds(0x717)+_d('NjY2T1M=')+Ds(0xd4)+_d('bWlob21v')+Ds(0x3ac),'ct':s},'Private':{'url':Ds(0x717)+_d('NjY2T1M=')+Ds(0xd4)+_d(Ds(0x169))+Ds(0x677),'ct':s},'Download':{'url':Ds(0x717)+_d(Ds(0x55e))+Ds(0xd4)+_d(Ds(0x169))+'/domain/Download.mrs','ct':s},'AppleCN':{'url':'https://github.com/'+_d(Ds(0x55e))+'/rules/raw/release/'+_d(Ds(0x169))+Ds(0x325),'ct':s},'China':{'url':Ds(0x29e)+_d(Ds(0x20e))+'/'+_d(Ds(0x2aa))+Ds(0x11b)+_d(Ds(0x5af))+Ds(0x1dc),'ct':i},'AI':{'url':'https://github.com/'+_d(Ds(0x55e))+Ds(0xd4)+_d(Ds(0x169))+Ds(0x214),'ct':s},'Telegram':{'url':Ds(0x717)+_d('NjY2T1M=')+Ds(0xd4)+_d('bWlob21v')+Ds(0x566),'ct':s},'Twitter':{'url':'https://github.com/'+_d(Ds(0x55e))+Ds(0xd4)+_d(Ds(0x169))+Ds(0x715),'ct':s},'SocialMedia':{'url':Ds(0x717)+_d(Ds(0x55e))+Ds(0xd4)+_d(Ds(0x169))+Ds(0x4a0),'ct':s},'Netflix':{'url':'https://github.com/'+_d(Ds(0x55e))+Ds(0xd4)+_d(Ds(0x169))+Ds(0x3f3),'ct':s},[_d(Ds(0x298))]:{'url':Ds(0x717)+_d('NjY2T1M=')+Ds(0xd4)+_d(Ds(0x169))+Ds(0x1a5)+_d(Ds(0x298))+'.mrs','ct':s},'Google':{'url':'https://github.com/'+_d(Ds(0x55e))+Ds(0xd4)+_d(Ds(0x169))+Ds(0x3fa),'ct':s},'Microsoft':{'url':'https://cdn.jsdelivr.net/gh/'+_d(Ds(0x20e))+'/'+_d(Ds(0x2aa))+Ds(0x11b)+_d(Ds(0x5af))+Ds(0x1ac),'ct':i},'Proxy':{'url':Ds(0x717)+_d('NjY2T1M=')+'/rules/raw/release/'+_d(Ds(0x169))+'/domain/Proxy.mrs','ct':s},'Spotify':{'url':Ds(0x717)+_d(Ds(0x58a))+'/'+_d(Ds(0x48c))+Ds(0x5ae)+_d(Ds(0x169))+'-ruleset/spotify.mrs','ct':s},'TikTok':{'url':Ds(0x717)+_d(Ds(0x58a))+'/'+_d(Ds(0x48c))+Ds(0x5ae)+_d('bWlob21v')+'-ruleset/tiktok.mrs','ct':s},'disney':{'url':Ds(0x717)+_d('RHVzdGluV2lu')+'/'+_d(Ds(0x48c))+Ds(0x5ae)+_d(Ds(0x169))+Ds(0x41b),'ct':s},'github':{'url':'https://raw.githubusercontent.com/'+_d('YmxhY2ttYXRyaXg3')+'/'+_d(Ds(0x2aa))+Ds(0xd2)+_d('Q2xhc2g=')+Ds(0x125),'fallbackUrls':[Ds(0x29e)+_d(Ds(0x20e))+'/'+_d(Ds(0x2aa))+Ds(0x11b)+_d(Ds(0x5af))+Ds(0x125)],'ct':i},'PrivateIP':{'url':Ds(0x717)+_d('NjY2T1M=')+Ds(0xd4)+_d(Ds(0x169))+'/ip/Private.mrs','ct':s},'TelegramIP':{'url':Ds(0x717)+_d(Ds(0x55e))+Ds(0xd4)+_d('bWlob21v')+Ds(0x6f9),'ct':s},[_d('UHJveHlJUA==')]:{'url':'https://github.com/'+_d(Ds(0x55e))+'/rules/raw/release/'+_d('bWlob21v')+Ds(0x1e7),'ct':s},'ChinaIP':{'url':Ds(0x717)+_d(Ds(0x55e))+Ds(0xd4)+_d(Ds(0x169))+'/ip/China.mrs','ct':s}},c=new Map(),p=new Map();function d(H,W){return new Response(H,{'status':0xc8,'headers':{'Content-Type':W,'Cache-Control':'public,\x20max-age=86400'}});}const u=[Ds(0x77b),Ds(0x2ba),Ds(0x40d),Ds(0x367),Ds(0xff),Ds(0x689),'190.93.240.0/20',Ds(0x295),Ds(0x3e0),Ds(0x5f9),Ds(0x2d4),Ds(0x26e),'104.24.0.0/14',Ds(0x312),Ds(0x14a)],_CURATED_V4_CIDRS=['162.159.32.0/20',Ds(0x3b8),Ds(0x64f),'188.164.248.0/24',Ds(0x468),Ds(0x590),Ds(0x20f),Ds(0x192),Ds(0x1b6),Ds(0x59f),Ds(0x6ba),Ds(0x386),Ds(0x3c2),'104.17.144.0/20',Ds(0x40c),'104.17.176.0/20','104.17.208.0/20','104.18.33.0/24',Ds(0x1e6),Ds(0x357),'104.19.144.0/21',Ds(0x1f3),Ds(0x31a),Ds(0x74a),'104.16.205.0/24',Ds(0x274),'104.17.132.0/24','104.17.136.0/23',Ds(0xed),'104.17.140.0/24','104.18.35.0/24',Ds(0x63e),Ds(0x50b),Ds(0x708),'104.18.45.0/24',Ds(0x396),Ds(0x2e7),'104.19.17.0/24',Ds(0x4eb),Ds(0x45d),Ds(0x5de),'104.19.57.0/24',Ds(0xd9),Ds(0x69e),Ds(0x4a3),'141.101.113.0/24',Ds(0x2e6),'162.159.148.0/24','162.159.152.0/24',Ds(0x21c),Ds(0x2db),Ds(0x117),Ds(0x406),Ds(0x101),Ds(0x1c6),'172.64.153.0/24',Ds(0x63a),Ds(0x356),Ds(0x61b),Ds(0x64b),'172.66.129.0/24',Ds(0x3fd),'172.66.214.0/24',Ds(0x149),Ds(0x3a9),'172.67.163.0/24',Ds(0x569)],f=[Ds(0x26e),Ds(0x33b),Ds(0x312),Ds(0x2d4),Ds(0x295)],h=[Ds(0x320),'2606:4700::/32',Ds(0x2b6),Ds(0x675),Ds(0x3be),'2a06:98c0::/29','2c0f:f248::/32'],m=[Ds(0x3cb),Ds(0x320),Ds(0x2b6),'2a06:98c0::/29','2c0f:f248::/32'];let g=h['slice'](),b=0x0;function v(H){const DU=V;if(!Y(H=String(H||'')))return!0x1;if(H['indexOf'](':')>=0x0)return h[DU(0x75b)](a=>function(J,e0){const Dj=V,[e1,e2]=e0[Dj(0x59c)]('/'),e3=parseInt(e2,0xa),e4=e6=>{const Dk=V,e7=e6[Dk(0x1c9)]('::');let e8;if(e7>=0x0){const e9=e6[Dk(0x14f)](0x0,e7)[Dk(0x59c)](':')['filter'](Boolean),eD=e6['slice'](e7+0x2)[Dk(0x59c)](':')[Dk(0x1e1)](Boolean),eX=0x8-e9['length']-eD[Dk(0x1c8)];e8=[...e9,...Array(eX)[Dk(0x20b)]('0'),...eD];}else e8=e6[Dk(0x59c)](':');return e8[Dk(0x12d)](em=>em[Dk(0x4ea)](0x4,'0'));},e5=e6=>e6[Dj(0x12d)](e7=>parseInt(e7,0x10)[Dj(0x165)](0x2)[Dj(0x4ea)](0x10,'0'))[Dj(0x5da)]('');return e5(e4(J))[Dj(0x14f)](0x0,e3)===e5(e4(e1))[Dj(0x14f)](0x0,e3);}(H,a));const W=H[DU(0x59c)]('.')['map'](Number),G=(W[0x0]<<0x18|W[0x1]<<0x10|W[0x2]<<0x8|W[0x3])>>>0x0;return tt['some'](([a,o])=>G>=a&&G<=o);}const y={'HK':'香港','TW':'台湾','MO':'澳门','JP':'日本','SG':Ds(0x3d1),'US':'美国','KR':'韩国','DE':'德国','FR':'法国','GB':'英国','CA':'加拿大','AU':Ds(0x5cf),'SE':'瑞典','NL':'荷兰','FI':'芬兰','NO':'挪威','DK':'丹麦','CH':'瑞士','IT':Ds(0x699),'ES':'西班牙','PT':Ds(0x1a9),'IE':Ds(0x55d),'BE':Ds(0x74d),'AT':'奥地利','PL':'波兰','CZ':'捷克','RO':Ds(0x724),'HU':Ds(0x25c),'GR':'希腊','RU':'俄罗斯','TR':Ds(0x262),'UA':Ds(0x5a7),'IN':'印度','TH':'泰国','MY':Ds(0x278),'VN':'越南','PH':Ds(0x5ce),'ID':'印尼','BR':'巴西','MX':Ds(0x368),'AR':Ds(0x2cd),'CL':'智利','ZA':'南非','EG':'埃及','AE':Ds(0x440),'IL':Ds(0x6d2),'NZ':Ds(0x568),'KZ':Ds(0x2fa),'SA':'沙特','EE':'爱沙尼亚','IS':'冰岛','BG':Ds(0x37e),'RS':'塞尔维亚','MD':'摩尔多瓦','LT':'立陶宛','LV':Ds(0x61e),'SK':Ds(0x648),'SI':'斯洛文尼亚','HR':Ds(0x4e9),'CY':'塞浦路斯','LU':Ds(0x151)},x={};for(const t in y)x[y[t]]=t;x['印度尼西亚']='ID';const w={'HKG':'香港','TPE':'台湾','KHH':'台湾','TSA':'台湾','RMQ':'台湾','NRT':'日本','KIX':'日本','HND':'日本','CTS':'日本','FUK':'日本','SIN':Ds(0x3d1),'ICN':'韩国','KUL':Ds(0x278),'BKK':'泰国','MNL':'菲律宾','SGN':'越南','HAN':'越南','CGK':'印尼','DEL':'印度','BOM':'印度','MAA':'印度','DXB':Ds(0x440),'TLV':Ds(0x6d2),'RUH':'沙特','JED':'沙特','DOH':Ds(0x4a6),'FRA':'德国','MUC':'德国','DUS':'德国','HAM':'德国','BER':'德国','CGN':'德国','STR':'德国','AMS':'荷兰','CDG':'法国','MRS':'法国','NCE':'法国','LHR':'英国','LGW':'英国','MAN':'英国','MAD':'西班牙','BCN':'西班牙','MXP':Ds(0x699),'FCO':'意大利','PMO':Ds(0x699),'ZRH':'瑞士','GVA':'瑞士','VIE':Ds(0x387),'WAW':'波兰','PRG':'捷克','ARN':'瑞典','CPH':'丹麦','OSL':'挪威','HEL':'芬兰','DUB':Ds(0x55d),'LIS':Ds(0x1a9),'BRU':Ds(0x74d),'BUD':Ds(0x25c),'OTP':Ds(0x724),'ATH':'希腊','IST':'土耳其','SVO':Ds(0x42e),'DME':Ds(0x42e),'LED':'俄罗斯','JFK':'美国','EWR':'美国','LAX':'美国','SJC':'美国','SFO':'美国','SEA':'美国','ORD':'美国','DFW':'美国','IAD':'美国','ATL':'美国','MIA':'美国','BOS':'美国','DEN':'美国','PHX':'美国','MSP':'美国','DTW':'美国','PHL':'美国','CLT':'美国','LAS':'美国','PDX':'美国','SLC':'美国','SAN':'美国','AUS':'美国','IAH':'美国','MCI':'美国','BNA':'美国','SMF':'美国','RDU':'美国','YYZ':'加拿大','YVR':Ds(0x47a),'YUL':Ds(0x47a),'YOW':Ds(0x47a),'YYC':'加拿大','MEX':Ds(0x368),'GRU':'巴西','GIG':'巴西','EZE':Ds(0x2cd),'SCL':'智利','SYD':'澳大利亚','MEL':Ds(0x5cf),'BNE':Ds(0x5cf),'PER':Ds(0x5cf),'AKL':'新西兰','JNB':'南非','CAI':'埃及','ALA':Ds(0x2fa),'ALB':'美国','BDL':'美国','BHM':'美国','BIL':'美国','BOI':'美国','BUF':'美国','BUR':'美国','BTV':'美国','BWI':'美国','CAE':'美国','CHA':'美国','CLE':'美国','CMH':'美国','CPR':'美国','DAL':'美国','DAY':'美国','DSM':'美国','DTT':'美国','ECP':'美国','EYW':'美国','FLL':'美国','GRR':'美国','GSP':'美国','HIO':'美国','HNL':'美国','ICT':'美国','IND':'美国','JAX':'美国','LBB':'美国','MCO':'美国','MDW':'美国','MEM':'美国','MFE':'美国','MFR':'美国','MSY':'美国','OAK':'美国','OKC':'美国','OMA':'美国','ONT':'美国','ORF':'美国','PIT':'美国','PSC':'美国','PVD':'美国','RIC':'美国','RNO':'美国','RSW':'美国','SAT':'美国','SDF':'美国','SNA':'美国','STL':'美国','SWF':'美国','SYR':'美国','TPA':'美国','TUL':'美国','TUS':'美国','CTS':'日本','FUK':'日本','HND':'日本','BLR':'印度','CMB':Ds(0x656),'KWI':Ds(0x57c),'AMM':'约旦','BEY':Ds(0x237),'NBO':Ds(0x57e),'LOS':Ds(0x170),'ACC':'加纳','CPT':'南非','LIM':'秘鲁','BOG':Ds(0x623),'PTY':Ds(0x330)},k=Object[Ds(0x534)]({},y,w,{'USA':'美国'}),I=w,_REGION_SOURCES=[['HK','香港'],['TW','台湾'],['JP','日本'],['SG',Ds(0x3d1)],['US','美国'],['KR','韩国'],['DE','德国']],P=_REGION_SOURCES[Ds(0x12d)](H=>Ds(0x221)+_d(Ds(0x1bc))+Ds(0x20a)+H[0x0]+'/100.txt')[Ds(0x5da)]('\x0a'),_REGION_EXTRA_SOURCES={'HK':['https://bestcf.pages.dev/tiancheng/hk.txt',Ds(0x6d8),Ds(0x6c8)],'TW':[Ds(0x4ee),'https://bestcf.pages.dev/tiancheng2/tw.txt','https://bestcf.pages.dev/s5gy/tw.txt'],'JP':['https://bestcf.pages.dev/tiancheng/jp.txt',Ds(0x6fb),Ds(0x236)],'SG':[Ds(0x509),Ds(0x5a3),Ds(0x779),Ds(0x71b)],'US':[Ds(0x42d),Ds(0x222),'https://bestcf.pages.dev/gslege/US.txt',Ds(0x56d)],'KR':[Ds(0x268),Ds(0x5d9)],'DE':[Ds(0x455),Ds(0x2af)]},_DOMAIN_SOURCES=['https://bestcf.pages.dev/domain/all.txt',Ds(0x2d5),'https://bestcf.pages.dev/domain/ygkkk/all.txt',Ds(0x638)],_IPV6_SOURCES=[Ds(0x233),Ds(0x520),'https://raw.githubusercontent.com/ymyuuu/IPDB/refs/heads/main/BestCF/bestcfv6.txt',Ds(0x2dc),Ds(0x639)],_ISP_SOURCES={'电信':Ds(0x179),'移动':Ds(0x69b),'联通':Ds(0x1aa)},_MIX_ISP_SOURCE=Ds(0x5a4),C=/random-region\/[A-Z]{2,}\/\d+\.txt/i,S={'uuid':'','path':'','admin':'','clashSecret':'','login':'','adminInit':!0x1,'host':'','enableVless':!0x0,'enableTrojan':!0x1,'trojanPassword':'','enableXhttp':!0x1,[_d(Ds(0x2f8))]:'','ech':!0x1,'echHost':Ds(0x405),'echDns':'','tlsOnly':!0x1,'skipCertVerify':!0x1,'subName':Ds(0x361),'hosts':[],'nodeLimit':!0x0,'nodeLimitCount':0x96,'countryLabel':'','loadBalance':!0x0,'nodeOrder':Ds(0x285),'dialTimeout':0x5dc,'raceMs':0x96,'forceProxyDomains':'','useBuiltinProxy':!0x0,'preferredOrder':[],'ipv6Mode':'off','cpuLimit':!0x1,'freeCpu':!0x1,'cfAccountId':'','cfApiToken':'','quotaAuto':!0x1,'quotaStrict':!0x1,'tgBotToken':'','tgChatID':'','homeWan':!0x1,'hwCoexist':!0x0,'hwLimit':0x3c,'frontLimit':0x3c,'homeWanNodes':[],[_d(Ds(0x182))]:'','outboundProxy':'','outboundMode':'','masqueFront':'','mode':'','masqueEnable':!0x1,'masqueConf':'','masqueName':'','masqueEps':'','masqueSni':'','masqueNet':'','preferredDomains':P,'preferredIPs':[],'optimizer':{'source':Ds(0x524),'sourceURL':'','fallbackPool':'','port':0x1bb,'threads':0x5,'count':0x14,'useCidr':!0x0,'fillCount':0x0,'subMode':'','subRandomCount':0x10,'subIncludeDefault':!0x1},'filter':{'region':Ds(0x643),'ipType':[Ds(0x2d3)],'isp':['移动','联通','电信']}},A=[Ds(0xd5),Ds(0xd1),Ds(0x391)],T=[Ds(0x43b),'172.67.72.4','104.17.201.77',Ds(0x253),'104.16.88.7',Ds(0x3f7),Ds(0x4f7),Ds(0x15a),Ds(0xeb),Ds(0x39c),Ds(0x383),Ds(0x667),'104.20.15.15',Ds(0x15c),Ds(0x33c),Ds(0x6be),Ds(0x615),Ds(0x508),Ds(0x19c),'162.159.128.1'],U=[{'label':'香港','region':'HK','url':Ds(0x221)+_d('YmVzdGNm')+Ds(0x608),'count':0xc},{'label':'日本','region':'JP','url':Ds(0x221)+_d(Ds(0x1bc))+Ds(0x729),'count':0xc},{'label':'美国','region':'US','url':Ds(0x221)+_d(Ds(0x1bc))+Ds(0x61f),'count':0xc},{'label':Ds(0x3d1),'region':'SG','url':'https://'+_d(Ds(0x1bc))+'.pages.dev/random-region/SG/100.txt','count':0xc},{'label':'台湾','region':'TW','url':Ds(0x221)+_d(Ds(0x1bc))+Ds(0x308),'count':0xc}],E=[Ds(0x680),Ds(0x5a9),Ds(0x3d2),'104.16.125.96#优选IP-004',Ds(0x29b),Ds(0x150),'104.16.132.229#优选IP-007','104.16.248.248#优选IP-008',Ds(0x6c2),Ds(0x218),Ds(0x353),'104.17.24.252#优选IP-012',Ds(0x12b),Ds(0x563),Ds(0x6d7),Ds(0x691),Ds(0x2c2),'104.17.234.5#优选IP-018',Ds(0x378),Ds(0x39e),Ds(0x2a3),Ds(0x4ed),Ds(0xf8),Ds(0x1f8),Ds(0x6ec),Ds(0x65f),Ds(0xe7),Ds(0x2a4),'104.17.185.207#优选IP-029',Ds(0x477),Ds(0x6c4),Ds(0xdd),Ds(0x773),Ds(0x16b),Ds(0x3fe),Ds(0x3c8),'172.65.64.7#优选IP-037',Ds(0x297),Ds(0x63f),Ds(0x76d),Ds(0x6dc),Ds(0x41c),Ds(0x4aa),Ds(0x2ae),Ds(0x2c4),'188.114.98.144#优选IP-046',Ds(0x23f),Ds(0x13f),'162.159.4.175#优选IP-049',Ds(0x582),Ds(0x5ec),Ds(0xc8),Ds(0x67f),Ds(0x322),Ds(0x441),'104.16.223.195#优选IP-056',Ds(0x135),'172.64.81.44#优选IP-058',Ds(0x301),Ds(0x507),Ds(0x43a),Ds(0x2f7),'104.27.40.81#优选IP-063',Ds(0x1c1),Ds(0x54b),Ds(0x25a),Ds(0x2a0),'104.18.84.180#优选IP-068',Ds(0x17e),Ds(0x439),Ds(0x77c),Ds(0x653),Ds(0x1e2),Ds(0x5b9),Ds(0x4a1),Ds(0x5a1),Ds(0x1ab),'104.21.61.179#优选IP-078',Ds(0x198),Ds(0x267),Ds(0xec),Ds(0x560),Ds(0x589),'172.66.161.31#优选IP-084',Ds(0x1db),'188.114.99.155#优选IP-086',Ds(0x66e),'172.64.145.202#优选IP-088',Ds(0x240),Ds(0x5c0),Ds(0x588),Ds(0x46d),Ds(0x676),Ds(0x4e5),Ds(0x1ee),Ds(0x270),'104.24.58.243#优选IP-097',Ds(0x6f6),Ds(0x2be),Ds(0x630),Ds(0x5b1),Ds(0x5f7),Ds(0x37b),Ds(0x1ad),Ds(0x696),Ds(0x364),Ds(0x2e8),Ds(0x1ff),'104.24.230.213#优选IP-109',Ds(0x723),Ds(0x738),Ds(0x3eb),Ds(0x110),Ds(0x4e2),Ds(0x4af),Ds(0x5a6),'162.159.197.16#优选IP-117',Ds(0x72b),Ds(0x2d6),'104.25.193.135#优选IP-120',Ds(0x419),Ds(0x752),Ds(0x449),Ds(0x3a0),Ds(0x104),Ds(0x68a),Ds(0x410),Ds(0x399),Ds(0x306),Ds(0x22a),Ds(0x6b8),Ds(0x55f),Ds(0x1e8),'188.114.97.91#优选IP-134',Ds(0x755),Ds(0x6da),Ds(0x734),Ds(0x739),Ds(0x747),Ds(0x500),Ds(0x67a),Ds(0x3c6),Ds(0x6a8),Ds(0x129),Ds(0x334),Ds(0x277),Ds(0x38e),Ds(0x4ff),Ds(0x682),'104.27.23.242#优选IP-150',Ds(0x757),Ds(0x47f),Ds(0x178),Ds(0x215),Ds(0x756),Ds(0x554),Ds(0x264),'162.159.19.201#优选IP-158','104.25.166.112#优选IP-159',Ds(0x201),Ds(0x492),Ds(0x593),Ds(0x728),Ds(0x762),Ds(0x168),Ds(0x350),Ds(0x6fa),'104.18.26.28#优选IP-168',Ds(0x3c5),Ds(0xcb),Ds(0x4e0),'104.18.18.214#优选IP-172',Ds(0x652),'104.17.153.58#优选IP-174','188.114.96.89#优选IP-175',Ds(0x430),Ds(0x426),'104.27.195.79#优选IP-178',Ds(0x702),'104.25.129.238#优选IP-180','172.65.3.67#优选IP-181',Ds(0x27c),Ds(0x424),Ds(0x247),Ds(0x392),Ds(0x1c3),'104.25.73.92#优选IP-187',Ds(0x12c),Ds(0x772),'172.65.202.216#优选IP-190',Ds(0x35e),'104.19.32.220#优选IP-192',Ds(0x10e),'104.17.160.131#优选IP-194','162.159.6.39#优选IP-195','162.159.43.223#优选IP-196',Ds(0x1f6),Ds(0x4bd),Ds(0x18a),Ds(0x4ca),Ds(0x3f5),'188.114.97.80#优选IP-202',Ds(0x401),Ds(0x45f),'188.114.97.0#优选IP-205',Ds(0x10d),Ds(0x50c),Ds(0x46b),Ds(0x4fa),Ds(0x205),Ds(0x16a),Ds(0xf6),Ds(0x716),'104.16.77.112#优选IP-214',Ds(0x3bf),'172.67.165.245#优选IP-216',Ds(0x5b2),Ds(0xe2),Ds(0x2e9),Ds(0x670),Ds(0x208),'162.159.2.86#优选IP-222',Ds(0x288),Ds(0xf5),Ds(0x30e),Ds(0x480),Ds(0x32c),Ds(0x3d6),Ds(0x49a),Ds(0x75f),Ds(0x431),Ds(0x6a6),'162.159.240.54#优选IP-233','104.17.0.4#优选IP-234',Ds(0x4a2),Ds(0x15d),Ds(0x31f),Ds(0x244),Ds(0x4a5),Ds(0x3db),Ds(0x311),Ds(0xde),Ds(0x2fb),Ds(0x4fb),Ds(0x37d),'104.17.76.49#优选IP-246',Ds(0x464),Ds(0x6e4),Ds(0x4ce),'172.65.45.102#优选IP-250',Ds(0x545),'162.159.26.248#优选IP-252',Ds(0x389),Ds(0x65a),'162.159.236.19#优选IP-255',Ds(0xe1),Ds(0x469),Ds(0x70d),Ds(0x37a),'162.159.228.231#优选IP-260',Ds(0x44d),Ds(0x686),'162.159.199.220#优选IP-263',Ds(0x488),Ds(0x22f),Ds(0x6e6),'172.65.118.85#优选IP-267',Ds(0x37f),Ds(0x384),Ds(0x118),Ds(0x550),Ds(0x380),Ds(0x23e),Ds(0x3b3),Ds(0x394),Ds(0x2fc),Ds(0x646),Ds(0x216),Ds(0x2a2),Ds(0x153),Ds(0x6eb),Ds(0x144),Ds(0x49b),Ds(0x2b9),Ds(0x573),'104.25.238.237#优选IP-286','104.16.45.249#优选IP-287',Ds(0x5c5),Ds(0xcd),Ds(0x5fc),Ds(0x655),Ds(0x4b8),Ds(0x6b9),Ds(0x5ca),Ds(0x145),Ds(0x6bd),Ds(0x62a),Ds(0x27d),'104.24.49.39#优选IP-299','172.67.85.54#优选IP-300'],$=[Ds(0x6c3),Ds(0x71f),Ds(0x146),_d(Ds(0x1bc))+Ds(0x3e5),'cdn.2020111.xyz','cfip.cfcdn.vip',Ds(0x1d4),Ds(0x558)+_d(Ds(0x552))+Ds(0x3d8),'cf.zhetengsha.eu.org','cloudflare.9jy.cc',Ds(0x465),Ds(0x678),Ds(0x697),Ds(0x62c),Ds(0x141),Ds(0x5e5),Ds(0x63b),Ds(0x56c),Ds(0x713),Ds(0x276),Ds(0x4fd),_d(Ds(0x1bc))+'.'+_d(Ds(0xc0))+Ds(0x3d8),Ds(0x73f),Ds(0x5e7),Ds(0x2ca)]['join']('\x0a'),L=new Set([0x50,0x1f90,0x22b0,0x804,0x822,0x826,0x82f]),N={'wetest_v4':{'label':Ds(0x538),'url':Ds(0x461)},'wetest_v6':{'label':Ds(0x433),'url':Ds(0x475)},[_d(Ds(0x1bc))]:{'label':'优选\x20IP\x20列表','url':'https://cf.'+_d('MDkwMjI3')+Ds(0xfe)},'hostmonit':{'label':Ds(0x4d1),'url':Ds(0x650)},'wetest_cname':{'label':Ds(0x336),'url':Ds(0x4cc)}},D=new TextEncoder(),O=new TextDecoder(),R=[0x7,0xc,0x11,0x16,0x7,0xc,0x11,0x16,0x7,0xc,0x11,0x16,0x7,0xc,0x11,0x16,0x5,0x9,0xe,0x14,0x5,0x9,0xe,0x14,0x5,0x9,0xe,0x14,0x5,0x9,0xe,0x14,0x4,0xb,0x10,0x17,0x4,0xb,0x10,0x17,0x4,0xb,0x10,0x17,0x4,0xb,0x10,0x17,0x6,0xa,0xf,0x15,0x6,0xa,0xf,0x15,0x6,0xa,0xf,0x15,0x6,0xa,0xf,0x15],_=[0xd76aa478,0xe8c7b756,0x242070db,0xc1bdceee,0xf57c0faf,0x4787c62a,0xa8304613,0xfd469501,0x698098d8,0x8b44f7af,0xffff5bb1,0x895cd7be,0x6b901122,0xfd987193,0xa679438e,0x49b40821,0xf61e2562,0xc040b340,0x265e5a51,0xe9b6c7aa,0xd62f105d,0x2441453,0xd8a1e681,0xe7d3fbc8,0x21e1cde6,0xc33707d6,0xf4d50d87,0x455a14ed,0xa9e3e905,0xfcefa3f8,0x676f02d9,0x8d2a4c8a,0xfffa3942,0x8771f681,0x6d9d6122,0xfde5380c,0xa4beea44,0x4bdecfa9,0xf6bb4b60,0xbebfbc70,0x289b7ec6,0xeaa127fa,0xd4ef3085,0x4881d05,0xd9d4d039,0xe6db99e5,0x1fa27cf8,0xc4ac5665,0xf4292244,0x432aff97,0xab9423a7,0xfc93a039,0x655b59c3,0x8f0ccc92,0xffeff47d,0x85845dd1,0x6fa87e4f,0xfe2ce6e0,0xa3014314,0x4e0811a1,0xf7537e82,0xbd3af235,0x2ad7d2bb,0xeb86d391];function M(H,W){return(H<<W|H>>>0x20-W)>>>0x0;}function F(H){const Dz=V,W=D[Dz(0x4b3)](String(H)),G=0x8*W[Dz(0x1c8)],J=0x1+(W[Dz(0x1c8)]+0x8>>0x6)<<0x6,e0=new Uint8Array(J);e0[Dz(0x598)](W),e0[W[Dz(0x1c8)]]=0x80;const e1=new DataView(e0[Dz(0x123)]);e1[Dz(0x3b6)](J-0x8,G>>>0x0,!0x0),e1['setUint32'](J-0x4,Math[Dz(0x5d3)](G/0x100000000),!0x0);let e2=0x67452301,e3=0xefcdab89,e4=0x98badcfe,e5=0x10325476;for(let e7=0x0;e7<J;e7+=0x40){const e8=new Uint32Array(0x10);for(let eP=0x0;eP<0x10;eP++)e8[eP]=e1[Dz(0x302)](e7+0x4*eP,!0x0);let e9=e2,eD=e3,eX=e4,em=e5;for(let eb=0x0;eb<0x40;eb++){let eq,er;eb<0x10?(eq=eD&eX|~eD&em,er=eb):eb<0x20?(eq=em&eD|~em&eX,er=(0x5*eb+0x1)%0x10):eb<0x30?(eq=eD^eX^em,er=(0x3*eb+0x5)%0x10):(eq=eX^(eD|~em),er=0x7*eb%0x10);const ep=e9+eq+_[eb]+e8[er]>>>0x0;e9=em,em=eX,eX=eD,eD=eD+M(ep,R[eb])>>>0x0;}e2=e2+e9>>>0x0,e3=e3+eD>>>0x0,e4=e4+eX>>>0x0,e5=e5+em>>>0x0;}let e6='';for(const eC of[e2,e3,e4,e5])e6+=(0xff&eC)[Dz(0x165)](0x10)[Dz(0x4ea)](0x2,'0'),e6+=(eC>>>0x8&0xff)[Dz(0x165)](0x10)[Dz(0x4ea)](0x2,'0'),e6+=(eC>>>0x10&0xff)[Dz(0x165)](0x10)[Dz(0x4ea)](0x2,'0'),e6+=(eC>>>0x18&0xff)[Dz(0x165)](0x10)[Dz(0x4ea)](0x2,'0');return e6;}function genUUID(){const Du=V;if(typeof crypto!==Du(0x556)&&crypto[Du(0x727)])return crypto['randomUUID']();const H=crypto[Du(0x18f)](new Uint8Array(0x10));H[0x6]=H[0x6]&0xf|0x40,H[0x8]=H[0x8]&0x3f|0x80;const W=Array[Du(0x4c2)](H,n=>n['toString'](0x10)['padStart'](0x2,'0'))['join']('');return[W[Du(0x14f)](0x0,0x8),W['slice'](0x8,0xc),W[Du(0x14f)](0xc,0x10),W['slice'](0x10,0x14),W[Du(0x14f)](0x14)][Du(0x5da)]('-');}function _sessionToken(){const Do=V,H=crypto[Do(0x18f)](new Uint8Array(0x20));return Array[Do(0x4c2)](H,W=>W['toString'](0x10)[Do(0x4ea)](0x2,'0'))['join']('');}function _U(H){return genUUID();}function z(H,W=0x1bb){const DY=V;if(!(H=String(H||'')[DY(0x1df)]()))return{'host':'','port':W};if(H[DY(0x263)]('[')){const a=H[DY(0x499)](/^\[([^\]]+)\](?::(\d+))?$/);return{'host':a?a[0x1]:H[DY(0x344)](/^\[|\]$/g,''),'port':a&&a[0x2]?parseInt(a[0x2]):W};}const G=H[DY(0x36d)](':');if(H[DY(0x1c9)](':')!==G)return{'host':H,'port':W};return G>0x0&&/^\d+$/[DY(0x6b1)](H['slice'](G+0x1))?{'host':H[DY(0x14f)](0x0,G),'port':parseInt(H[DY(0x14f)](G+0x1))}:{'host':H,'port':W};}function j(H){const DJ=V;try{const W=atob(String(H||'')[DJ(0x1df)]());return DJ(0x491)==typeof W&&W[DJ(0x1c9)](DJ(0x4c1))>=0x0?W:'';}catch(n){return'';}}let _HWMC={'t':0x0,'n':[]},_HWFAIL=0x0,_HWXC={'t':0x0,'n':[]};const _HWS=Ds(0x136);async function q(H){const DS=V,W=Date[DS(0x549)]();if(_HWFAIL&&W-_HWFAIL<0x493e0&&!_HWMC['n'][DS(0x1c8)])throw new Error(DS(0x272));try{const n=await _q0(H);return _HWFAIL=0x0,n;}catch(G){_HWFAIL=Date['now']();throw G;}}async function _hwCo(H,W){const Di=V;if(!H||!H[Di(0x490)])return;try{H[Di(0x195)]=await X(W,H);}catch(n){H[Di(0x195)]=[];}}function V(e,D){e=e-0xbf;const X=r();let m=X[e];return m;}async function _q0(H){const DB=V,W=Date[DB(0x549)]();if(_HWMC['n'][DB(0x1c8)]&&W-_HWMC['t']<0x1b7740)return _HWMC['n'];const n=await fetch(DB(0x5aa),{'headers':{'User-Agent':DB(0x57f),'Accept':DB(0x313)},'cf':{'cacheTtl':0x708,'cacheEverything':!0x0},'signal':AbortSignal[DB(0x64a)](0x1f40)});if(!n||!n['ok'])throw new Error(DB(0x5b4)+(n&&n[DB(0x5fd)]));const G=[];return String(await n[DB(0x1a7)]())[DB(0x59c)](/\r?\n/)['forEach'](function(a){const DO=V,o=String(a||'')[DO(0x1df)]()['split'](',');if(o[DO(0x1c8)]<0xf||!o[0x1]||String(o[0x0]||'')[DO(0x154)]()[DO(0x1c9)](DO(0x1f1))===0x0)return;let J='';for(let e1=o['length']-0x1;e1>=Math[DO(0x60a)](0x3,o[DO(0x1c8)]-0x3);e1--){const e2=String(o[e1]||'')[DO(0x1df)]();if(e2[DO(0x1c8)]<0x64)continue;try{const e3=atob(e2[DO(0x14f)](0x0,0x258));if(/client|remote|dev |OpenVPN|PacketiX/i[DO(0x6b1)](e3)){J=e2;break;}}catch(e4){}}if(!J)return;const e0=String(o[0x6]||'')[DO(0x1df)]()[DO(0x183)]();if(H&&e0!==String(H)[DO(0x1df)]()['toUpperCase']())return;G['push']({'ip':String(o[0x1])[DO(0x1df)](),'speed':parseInt(o[0x4],0xa)||0x0,'country':e0,'ovpnB64':J});}),G[DB(0x1ed)](function(o,J){const DN=V;return(J[DN(0x10a)]||0x0)-(o[DN(0x10a)]||0x0);}),_HWMC={'t':W,'n':G},G;}function B(H){const DL=V,W=a=>{const DZ=V,o=String(H||'')[DZ(0x499)](new RegExp('<'+a+DZ(0x238)+a+'>','i'));return o?o[0x1][DZ(0x1df)]():'';},G={};return String(H||'')[DL(0x59c)](/\r?\n/)[DL(0x4fc)](a=>{const DA=V,o=a[DA(0x1df)]()[DA(0x499)](/^(cipher|auth|dev|comp-lzo|key-direction|remote|port|proto|verb)\s+(.+)$/i);o&&(G[o[0x1][DA(0x154)]()]=o[0x2][DA(0x1df)]());}),{'ca':W('ca'),'cert':W(DL(0x22c)),'key':W(DL(0x2bb)),'tlsAuth':W(DL(0x47b)),'tlsCrypt':W('tls-crypt'),'cipher':G[DL(0x164)]||'','auth':G[DL(0x4dc)]||'','keyDirection':G[DL(0x45b)]||'','remote':G[DL(0x6fc)]||'','proto':G[DL(0x523)]||''};}function _hwParse(H){const X1=V;try{const W={'香港':'HK','台湾':'TW','澳门':'MO','日本':'JP','新加坡':'SG','美国':'US','韩国':'KR','德国':'DE','法国':'FR','英国':'GB','加拿大':'CA','澳大利亚':'AU','瑞典':'SE','荷兰':'NL','芬兰':'FI','挪威':'NO','丹麦':'DK','瑞士':'CH','意大利':'IT','西班牙':'ES','葡萄牙':'PT','爱尔兰':'IE','比利时':'BE','奥地利':'AT','波兰':'PL','捷克':'CZ','罗马尼亚':'RO','匈牙利':'HU','希腊':'GR','俄罗斯':'RU','土耳其':'TR','乌克兰':'UA','印度':'IN','泰国':'TH','马来西亚':'MY','越南':'VN','菲律宾':'PH','印尼':'ID','巴西':'BR','墨西哥':'MX','阿根廷':'AR','智利':'CL','南非':'ZA','埃及':'EG','阿联酋':'AE','以色列':'IL','新西兰':'NZ','哈萨克斯坦':'KZ','沙特':'SA','爱沙尼亚':'EE','冰岛':'IS','保加利亚':'BG','塞尔维亚':'RS','摩尔多瓦':'MD','立陶宛':'LT','拉脱维亚':'LV','斯洛伐克':'SK','斯洛文尼亚':'SI','克罗地亚':'HR','塞浦路斯':'CY','卢森堡':'LU','中国大陆':'CN','中國':'CN','中國大陸':'CN','台灣':'TW','南韩':'KR','南韓':'KR','美國':'US'},n=function(e6){const X0=V,e7=String(e6||'XX')[X0(0x1df)](),e8=e7[X0(0x344)](/\d+$/,'');return/^[A-Za-z]{2}$/[X0(0x6b1)](e8)?e8[X0(0x183)]():W[e8]||'XX';},G={'ca':'ca','cert':X1(0x22c),'key':'key','tls-auth':'tlsAuth','tls-crypt':X1(0x1cb)};let a={'ca':'','cert':'','key':'','tlsAuth':'','tlsCrypt':''},o=null,J=[];const e0=[],e1=function(){const X2=V;o&&(a[o]=J[X2(0x5da)]('\x0a'),o=null,J=[]);},e2=function(e6,e7,e8,e9,eD,eX){const X3=V;if(!eD||!eD['ca'])return null;return{...String(eX||'')[X3(0x1df)]()?{'name':String(eX)[X3(0x1df)]()}:{},'server':String(e6||''),'port':Number(e7)||0x4aa,'proto':e8,'country':n(e9),'ca':eD['ca']||'','cert':eD[X3(0x22c)]||'','key':eD[X3(0x2bb)]||'','tlsAuth':eD[X3(0x175)]||'','tlsCrypt':eD[X3(0x1cb)]||'','cipher':eD['cipher']||_d(X3(0x6ef)),'auth':eD[X3(0x4dc)]||X3(0x661)};};let e3=null,e4=null;const e5=function(){const X4=V;if(!e3)return;const e6=B(e3[X4(0x6cd)][X4(0x5da)]('\x0a'));if(!e6[X4(0x164)])e6[X4(0x164)]=X4(0x1ec);for(const e8 of['ca',X4(0x22c),'key',X4(0x175),X4(0x1cb)])e6[e8]=String(e6[e8]||'')[X4(0x59c)](/\r?\n/)['map'](e9=>e9[X4(0x1df)]())[X4(0x1e1)](Boolean)[X4(0x5da)]('\x0a');const e7=e2(e3[X4(0x234)],e3[X4(0x564)],e3[X4(0x523)],e3[X4(0x5dd)],e6,e3[X4(0x5dd)]);if(e3[X4(0x4f8)]&&e7)e0['push'](e7);e3=null,e4=null;};return String(H||'')[X1(0x59c)](/\r?\n/)['forEach'](function(e6){const X5=V,e7=String(e6||'')[X5(0x1df)](),e8=/^([^:：|]+?)\s*[:：|]\s*([\s\S]+)$/[X5(0x13c)](e7),e9=e8?e8[0x2][X5(0x344)](/\s+/g,''):'',eD=!!(e8&&e9[X5(0x1c8)]>=0xc8&&/^[A-Za-z0-9+/=]+$/['test'](e9)),eX=eD&&/^[\p{Script=Han}A-Za-z0-9]{1,10}$/u[X5(0x6b1)](e8[0x1][X5(0x1df)]());if(eD&&!eX)return;const em=/^([^,\s]+)\s*,\s*([^,]*)\s*,\s*([^,]*)\s*,\s*([^,]*)\s*$/[X5(0x13c)](e7);if(em){e1(),e5();const eQ=em[0x1]['replace'](/^\[|\]$/g,''),ev=em[0x2][X5(0x1df)]()?Number(em[0x2]):0x4aa,eV=em[0x3][X5(0x1df)]()[X5(0x154)]()||X5(0x533),ex=!!eQ&&!/[<>]/[X5(0x6b1)](eQ)&&Number['isInteger'](ev)&&ev>0x0&&ev<0x10000&&(eV===X5(0x533)||eV==='udp');e3={'host':eQ,'port':ev,'proto':eV,'country':em[0x4],'body':[],'valid':ex},a={'ca':'','cert':'','key':'','tlsAuth':'','tlsCrypt':''};return;}if(e3){const el=/^<(ca|cert|key|tls-auth|tls-crypt)>/i[X5(0x13c)](e7);if(el){e4=el[0x1][X5(0x154)](),e3[X5(0x6cd)][X5(0x3b4)](e6);if(new RegExp('</'+e4+'>','i')[X5(0x6b1)](e7))e4=null;return;}if(e4){e3[X5(0x6cd)][X5(0x3b4)](e6);if(new RegExp('</'+e4+'>','i')[X5(0x6b1)](e7))e4=null;return;}const eh=e7[X5(0x344)](/\s+/g,''),eT=/^(ca|cert|key|tls-auth|tls-crypt)\s*[:=]/i[X5(0x6b1)](e7),eF=eX||eh[X5(0x1c8)]>=0xc8&&/^[A-Za-z0-9+/=]+$/[X5(0x6b1)](eh);if(eT||eF)e5();else{e3['body'][X5(0x3b4)](e6);return;}}const eP=/^(ca|cert|key|tls-auth|tls-crypt)\s*[:=]\s*(.*)$/i[X5(0x13c)](e7);if(eP&&!eX){e1(),o=G[eP[0x1][X5(0x154)]()];if(eP[0x2])J[X5(0x3b4)](eP[0x2]);return;}if(o&&(/^-{3,}/['test'](e7)||/^[A-Za-z0-9+/=\s]{16,}$/[X5(0x6b1)](e7))){J[X5(0x3b4)](e7);return;}e1();if(!e7||'#'===e7[X5(0x4b4)](0x0))return;let eb='',eq=e7;const er=eX?e8:null;er&&(eb=er[0x1][X5(0x1df)](),eq=er[0x2][X5(0x1df)]());const ep=eq[X5(0x344)](/\s+/g,'');if(ep[X5(0x1c8)]>=0xc8&&/^[A-Za-z0-9+/=]+$/[X5(0x6b1)](ep)){try{const ef=B(atob(ep)),eg=String(ef[X5(0x6fc)]||'')[X5(0x59c)](/\s+/),eK=e2(eg[0x0]||'',parseInt(eg[0x1],0xa)||0x4aa,X5(0x583)===String(ef[X5(0x523)]||'')['toLowerCase']()?'udp':X5(0x533),eb,ef,eb);if(eK)e0['push'](eK);}catch(eH){}return;}const eC=eq[X5(0x59c)](/[\s:]+/)[X5(0x1e1)](Boolean);if(!eC[X5(0x1c8)])return;const ew=e2(eC[0x0],parseInt(eC[0x1],0xa)||0x4aa,/udp/i[X5(0x6b1)](eC[0x2]||'')?X5(0x583):X5(0x533),eC[0x3]||eb||'XX',a);if(ew)e0[X5(0x3b4)](ew);}),e1(),e5(),e0;}catch(e6){return[];}}function _smartGroups(H,W,n,G){const X6=V;try{if(!W||!W[X6(0x1c8)])return H;const a=_d(X6(0xcf)),o=_d(X6(0x52b)),J=(G||[])[X6(0x12d)](Ie)[X6(0x5da)](',\x20'),e0='节点选择,\x20手动选择,\x20'+(n?X6(0x6f8):'')+(J?J+',\x20':'')+X6(0x33a),e1='\x20\x20#\x20AI\x20服务\x20/\x20媒体优选：默认走「节点选择」，也可切到「手动选择」或任一地区组；组内不展开单个节点\x0a'+X6(0x203)+a+':\x20['+e0+X6(0x53b)+X6(0x291)+a+X6(0x340)+e0+X6(0x53b);let e2=H['replace'](_HWS,()=>e1+_HWS);return e2=e2[X6(0x344)](X6(0x2b5)+o+X6(0x2ac),X6(0x2b5)+o+X6(0x362)),[X6(0x720),_d(X6(0x298)),X6(0x286),'TikTok','disney']['forEach'](function(e3){const X7=V;e2=e2[X7(0x344)](X7(0x2b5)+o+','+e3+X7(0x722),X7(0x2b5)+o+','+e3+X7(0x6af));}),e2;}catch(e3){return H;}}async function X(H,W,G){const X8=V;if(!W[X8(0x259)]&&!W[X8(0x490)]&&'home'!==String(W[X8(0x2ec)]||'')[X8(0x154)]())return[];const o=_hwParse(W&&W[X8(0xf7)]);if(o[X8(0x1c8)])return o;const J=Array[X8(0x636)](W[X8(0x195)])?W[X8(0x195)][X8(0x1e1)](e0=>e0&&e0[X8(0xea)])['slice'](0x0,0x64):[];if(J['length'])return J;try{if(_HWXC['n']['length']&&Date[X8(0x549)]()-_HWXC['t']<0x1b7740)return _HWXC['n'];const e0=(await q(''))[X8(0x12d)](function(e1){const X9=V,e2=B(j(e1[X9(0x2e5)])),e3=String(e2['remote']||'')[X9(0x59c)](/\s+/),e4=parseInt(e3[0x1],0xa)||0x1bb,e5='udp'===String(e2['proto']||'')['toLowerCase']()?'udp':X9(0x533);return{'server':e1['ip'],'port':e4,'proto':e5,'country':e1[X9(0x5dd)],'ca':e2['ca']||'','cert':e2[X9(0x22c)]||'','key':e2[X9(0x2bb)]||'','tlsAuth':e2[X9(0x175)]||'','tlsCrypt':e2['tlsCrypt']||'','cipher':e2['cipher']||_d(X9(0x6ef)),'auth':e2[X9(0x4dc)]||X9(0x661)};})[X8(0x1e1)](e1=>e1[X8(0xea)]&&e1['ca'])[X8(0x14f)](0x0,0x12c);return _HWXC={'t':Date[X8(0x549)](),'n':e0},e0;}catch(e1){return[];}}function Y(H){const XD=V;if(!(H=String(H||'')[XD(0x1df)]()))return!0x1;const W=H['match'](/^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/);if(W)return W['slice'](0x1)[XD(0x6cb)](o=>Number(o)<=0xff);if(!/^[0-9a-fA-F:]+$/[XD(0x6b1)](H))return!0x1;if((H[XD(0x499)](/::/g)||[])['length']>0x1)return!0x1;const G=H[XD(0x3bc)]('::'),a=H[XD(0x344)](/::/g,':')['split'](':')[XD(0x1e1)](Boolean);return!(!G&&0x8!==a[XD(0x1c8)])&&(!G||!(a[XD(0x1c8)]<0x1||a[XD(0x1c8)]>0x7))&&a[XD(0x6cb)](o=>/^[0-9a-fA-F]{1,4}$/[XD(0x6b1)](o));}function Q(H){const XX=V,W=[];for(let e2=0x0;e2<0x10;e2+=0x2)W[XX(0x3b4)]((H[e2]<<0x8|H[e2+0x1])[XX(0x165)](0x10));let G=-0x1,J=0x0,e0=-0x1,e1=0x0;for(let e3=0x0;e3<0x8;e3++)'0'===W[e3]?(e0<0x0?(e0=e3,e1=0x1):e1++,e1>J&&(J=e1,G=e0)):(e0=-0x1,e1=0x0);if(J>=0x2){const e4=W[XX(0x14f)](0x0,G)[XX(0x5da)](':');return(e4?e4+'::':'::')+W[XX(0x14f)](G+J)[XX(0x5da)](':');}return W[XX(0x5da)](':');}function Z(H){const Xm=V,[W,G]=H[Xm(0x59c)]('/'),J=W[Xm(0x59c)]('.')[Xm(0x12d)](Number),e0=(J[0x0]<<0x18|J[0x1]<<0x10|J[0x2]<<0x8|J[0x3])>>>0x0,e1=G>=0x20?0x0:0xffffffff<<0x20-G>>>0x0;return[(e0&e1)>>>0x0,(e0|~e1>>>0x0)>>>0x0];}const tt=u[Ds(0x12d)](Z),et=new Map();function nt(H){const XP=V;if(String(H)[XP(0x1c9)](':')>=0x0)return function(J){const Xb=V,[e0,e1]=J[Xb(0x59c)]('/'),e2=parseInt(e1,0xa)||0x0,e3=(e5=>{const Xq=V,e6=e5[Xq(0x1c9)]('::');let e7;if(e6>=0x0){const e8=e5[Xq(0x14f)](0x0,e6)[Xq(0x59c)](':')[Xq(0x1e1)](Boolean),e9=e5[Xq(0x14f)](e6+0x2)[Xq(0x59c)](':')[Xq(0x1e1)](Boolean),eD=0x8-e8[Xq(0x1c8)]-e9[Xq(0x1c8)];e7=[...e8,...Array(eD)[Xq(0x20b)]('0'),...e9];}else e7=e5[Xq(0x59c)](':');return e7[Xq(0x12d)](eX=>eX['padStart'](0x4,'0'));})(e0)[Xb(0x12d)](e5=>parseInt(e5,0x10));let e4=0x0;for(let e5=0x0;e5<0x8;e5++)for(let e6=0xf;e6>=0x0;e6--)e4>=e2&&(e3[e5]|=(Math['random']()<0.5?0x1:0x0)<<e6),e4++;return e3[Xb(0x12d)](e7=>e7[Xb(0x165)](0x10))[Xb(0x5da)](':');}(H);const [W,G]=function(o){const Xr=V;let J=et[Xr(0x30b)](o);return J||(J=Z(o),et[Xr(0x598)](o,J)),J;}(H),a=W+Math[XP(0x5d3)](Math[XP(0x285)]()*(G-W>>>0x0));return(a>>>0x18&0xff)+'.'+(a>>>0x10&0xff)+'.'+(a>>>0x8&0xff)+'.'+(0xff&a);}function rt(H){const Xp=V,W=String(H||'')[Xp(0x59c)]('.')[Xp(0x12d)](n=>parseInt(n,0xa)[Xp(0x165)](0x10)['padStart'](0x2,'0'));return 0x4!==W[Xp(0x1c8)]||W['some'](n=>Xp(0x1ea)===n)?null:Xp(0x51f)+W[0x0]+W[0x1]+':'+W[0x2]+W[0x3];}function at(H,W){const XC=V,G=new Set(),o=[];let J=0x0;for(;o[XC(0x1c8)]<W&&J++<0x14*W;){const e0=nt(H[Math[XC(0x5d3)](Math['random']()*H['length'])]);G['has'](e0)||(G[XC(0x4c4)](e0),o[XC(0x3b4)](e0));}return o;}function ot(H){const Xw=V,W=[],G=new Set();return String(H||'')[Xw(0x59c)](/[\n,;]+/)[Xw(0x12d)](a=>a[Xw(0x1df)]())[Xw(0x1e1)](Boolean)['forEach'](J=>{const XQ=V;let e0='';if(J[XQ(0x3bc)]('#')){const [e3,e4]=J['split']('#');J=e3,e0=e4;}const {host:e1,port:e2}=z(J,0x1bb);e1&&Y(e1)&&!G['has'](e1)&&(G[XQ(0x4c4)](e1),W[XQ(0x3b4)]({'ip':e1,'port':e2,'name':e0}));}),W;}function st(H){const Xv=V;try{const W=atob(String(H)['replace'](/-/g,'+')[Xv(0x344)](/_/g,'/')),G=new Uint8Array(W['length']);for(let a=0x0;a<W[Xv(0x1c8)];a++)G[a]=W[Xv(0x74f)](a);return new TextDecoder(Xv(0x517))[Xv(0x5c7)](G);}catch(o){return null;}}function it(H,W){const XV=V;return new Response(JSON[XV(0x251)](H),{'status':W||0xc8,'headers':{'Content-Type':'application/json;\x20charset=utf-8'}});}const _CFG_KEY_CACHE=new Map();function _cfgB64(H){const Xx=V;let W='';for(let G=0x0;G<H[Xx(0x1c8)];G+=0x2000)W+=String[Xx(0x395)](...H['subarray'](G,G+0x2000));return btoa(W);}function _cfgBytes(H){const Xl=V,W=atob(String(H||'')),G=new Uint8Array(W[Xl(0x1c8)]);for(let a=0x0;a<W[Xl(0x1c8)];a++)G[a]=W[Xl(0x74f)](a);return G;}async function _cfgKey(H){const Xh=V,W=String(H&&H[Xh(0x1a4)]||'')['trim']();if(!W)return null;let G=_CFG_KEY_CACHE[Xh(0x30b)](W);return G||(G=((async()=>{const XT=V,a=await crypto[XT(0x612)]['digest']('SHA-256',D[XT(0x4b3)](W));return crypto[XT(0x612)][XT(0x38b)](XT(0x599),a,{'name':XT(0x3ef)},!0x1,[XT(0x657),XT(0x516)]);})()),_CFG_KEY_CACHE[Xh(0x43e)]>0x3&&_CFG_KEY_CACHE[Xh(0x2a9)](),_CFG_KEY_CACHE[Xh(0x598)](W,G)),G;}async function _cfgSeal(H,W){const XF=V,G=await _cfgKey(H);if(!G)return JSON['stringify'](W);const o=crypto[XF(0x18f)](new Uint8Array(0xc)),J=await crypto['subtle'][XF(0x657)]({'name':XF(0x3ef),'iv':o},G,D[XF(0x4b3)](JSON[XF(0x251)](W)));return JSON[XF(0x251)]({'v':0x1,'alg':XF(0x5d4),'iv':_cfgB64(o),'data':_cfgB64(new Uint8Array(J))});}async function _cfgOpen(H,W){const Xf=V,G=JSON['parse'](W);if(!G||0x1!==G['v']||'A256GCM'!==G[Xf(0x43f)])return G;const o=await _cfgKey(H);if(!o)throw new Error(Xf(0x61a));try{const J=await crypto[Xf(0x612)][Xf(0x516)]({'name':Xf(0x3ef),'iv':_cfgBytes(G['iv'])},o,_cfgBytes(G[Xf(0x60f)]));return JSON[Xf(0x651)](O[Xf(0x5c7)](J));}catch(e0){throw new Error(Xf(0x45e));}}async function lt(H){const Xg=V,W=JSON[Xg(0x651)](JSON[Xg(0x251)](S));let G=!0x1,J=!0x1,e0='';(function(){const XK=V,e3=String(H['FREE_CPU']||H[XK(0x48d)]||'')['toLowerCase']();('1'===e3||XK(0x31c)===e3||'yes'===e3)&&(W['freeCpu']=!0x0);}());if(H['U']&&(W['uuid']=String(H['U'])['toLowerCase']()),(H['D']||H[Xg(0x621)])&&(W[Xg(0x347)]=String(H['D']||H[Xg(0x621)])),(H[Xg(0x2ab)]||H['L'])&&(W['login']=String(H[Xg(0x2ab)]||H['L'])),(H[Xg(0x437)]||H[Xg(0x6a1)])&&(W[Xg(0x6a1)]=String(H['ADMIN']||H[Xg(0x6a1)])),H[Xg(0x54d)]&&(W[Xg(0x234)]=e0=String(H[Xg(0x54d)])[Xg(0x344)](/^https?:\/\//,'')[Xg(0x59c)]('/')[0x0]),H[Xg(0x3bd)]&&(W[Xg(0x3b2)]=String(H[Xg(0x3bd)])),(H['S']||H[Xg(0x412)])&&(W['outboundProxy']=String(H['S']||H[Xg(0x412)])),Xg(0x31c)!==H[Xg(0x66b)]&&'1'!==H[Xg(0x66b)]||(W[Xg(0x210)]=!0x0),Xg(0x31c)!==H[Xg(0x67b)]&&'1'!==H[Xg(0x67b)]||(W[Xg(0x292)]=!0x0),H[Xg(0x65d)]&&(W[Xg(0x5ea)]=String(H[Xg(0x65d)])),H[Xg(0x5f6)]&&(W[Xg(0x58e)]=String(H[Xg(0x5f6)])),H[Xg(0x761)]&&(W['alpn']=String(H[Xg(0x761)])),H[Xg(0x35c)]&&(W['tgBotToken']=String(H[Xg(0x35c)])),H[Xg(0x600)]&&(W[Xg(0x128)]=String(H[Xg(0x600)])),H['YX']&&(W['preferredIPs']=ot(H['YX'])),H[Xg(0x759)]&&(W['optimizer'][Xg(0x45a)]=String(H[Xg(0x759)])),'1'!==H[Xg(0x6b3)]&&Xg(0x31c)!==H[Xg(0x6b3)]||(W[Xg(0x259)]=!0x0),H[Xg(0x176)]&&(W[Xg(0x39a)]=String(H['MASQUE_ENDPOINTS'])),H[Xg(0x225)]&&(W['masqueSni']=String(H[Xg(0x225)])),H['K']&&Xg(0x4bf)==typeof H['K']['get'])try{const e3=await async function(e5){const XH=V;try{return await e5['K'][XH(0x30b)](XH(0x206));}catch(e6){return null;}}(H),e4=e3?await _cfgOpen(H,e3):null;if(e4){const e5=e4;J=!0x0,void 0x0!==e5[Xg(0x3fc)]&&(G=!0x0),Object[Xg(0x534)](W,e5),!W[Xg(0x230)]&&e5[_d(Xg(0x768))]&&(W['masqueFront']=String(e5[_d(Xg(0x768))])),W[Xg(0x2ec)]===_d(Xg(0x352))&&(W[Xg(0x2ec)]=Xg(0x34d)),delete W[_d(Xg(0x768))],delete W[_d(Xg(0x166))],delete W[_d(Xg(0xee))],delete W[_d('d2FycEVwcw==')],delete W[_d(Xg(0x73a))],e5[Xg(0x21b)]&&(W[Xg(0x21b)]=Object[Xg(0x534)](JSON[Xg(0x651)](JSON[Xg(0x251)](S['optimizer'])),e5['optimizer'])),e5['preferredIPs']&&Array[Xg(0x636)](e5[Xg(0x13b)])&&(W[Xg(0x13b)]=e5[Xg(0x13b)]),e5[Xg(0x6a1)]&&(W['admin']=String(e5[Xg(0x6a1)])),e5[Xg(0x137)]&&(W[Xg(0x137)]=String(e5[Xg(0x137)])['toLowerCase']());}}catch(e6){W[Xg(0x69a)]=e6&&e6[Xg(0x3f0)]||Xg(0x321);}(H['S']||H['OUTBOUND'])&&(W[Xg(0x349)]=String(H['S']||H[Xg(0x412)])),(H[Xg(0x39d)]||H[Xg(0x679)])&&(W[Xg(0x4f3)]=String(H[Xg(0x39d)]||H[Xg(0x679)])),('0'===String(H[Xg(0x66c)])||Xg(0x557)===String(H[Xg(0x66c)]))&&(W[Xg(0x13e)]=!0x1),W[Xg(0x234)]=e0||'';var e1,e2;return W[Xg(0x44e)]=!(!W[Xg(0x44e)]&&!J),delete W[Xg(0x62e)],delete W[Xg(0x1bf)],e1=!0x1,Ke=W[Xg(0x21b)]&&W[Xg(0x21b)][Xg(0x2c7)]||'',W[Xg(0x137)]=String(W[Xg(0x137)]||'')[Xg(0x154)](),e2=W[Xg(0x137)],/^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/[Xg(0x6b1)](e2||'')||(W[Xg(0x137)]=W['admin']?_U(W[Xg(0x6a1)]):(function(){const Xd=V;if(crypto[Xd(0x727)])return crypto[Xd(0x727)]();const e7=crypto[Xd(0x18f)](new Uint8Array(0x10));return e7[0x6]=0xf&e7[0x6]|0x40,e7[0x8]=0x3f&e7[0x8]|0x80,[...e7]['map']((e8,e9)=>(0x4===e9||0x6===e9||0x8===e9||0xa===e9?'-':'')+e8[Xd(0x165)](0x10)[Xd(0x4ea)](0x2,'0'))[Xd(0x5da)]('');}())),delete W[Xg(0x2ab)],(H[Xg(0x2ab)]||H['L'])&&(W[Xg(0x2ab)]=String(H[Xg(0x2ab)]||H['L'])),(H[Xg(0x437)]||H['admin'])&&(W['admin']=String(H[Xg(0x437)]||H[Xg(0x6a1)])),W[Xg(0x347)]=H['D']||H[Xg(0x621)]?String(H['D']||H['PATH']):W[Xg(0x137)],Array[Xg(0x636)](W[Xg(0x13b)])||(W[Xg(0x13b)]=ot(W[Xg(0x13b)])),G||Boolean(W['cfAccountId']&&W[Xg(0x4a9)]||H[Xg(0x58f)]&&H[Xg(0x27a)])&&(W[Xg(0x3fc)]=!0x0),W;}async function ct(H,W){const XE=V;if(!H['K']||XE(0x4bf)!=typeof H['K'][XE(0x25d)])return!0x1;const G=JSON['parse'](JSON[XE(0x251)](W));delete G['host'],delete G['frontHost'],delete G[_d(XE(0x768))],delete G[_d(XE(0x166))],delete G[_d(XE(0xee))],delete G[_d(XE(0x284))],delete G[_d(XE(0x73a))],G[XE(0x2ec)]===_d(XE(0x352))&&(G['mode']=XE(0x34d)),delete G[XE(0x69a)],G[XE(0x6a1)]&&(G[XE(0x6a1)]=String(G[XE(0x6a1)])),await H['K'][XE(0x25d)](XE(0x206),await _cfgSeal(H,G));try{_SUBC[XE(0x2a9)]();}catch(a){}return!0x0;}let pt=null,dt=0x0;const ut=0x186a0;async function ft(H,W){const XM=V,G=String(H[XM(0x337)]||'')[XM(0x1df)](),a=String(H[XM(0x128)]||'')[XM(0x1df)]();if(G&&a)try{await oe(XM(0x42f)+G+XM(0x642),{'method':'POST','headers':{'Content-Type':XM(0x109)},'body':JSON['stringify']({'chat_id':a,'text':W})},0x1f40);}catch(o){}}const ht=[0x50,0x55,0x5a,0x5b,0x5c,0x5d,0x5e,0x5f,0x60,0x61,0x62,0x63];async function mt(H,W){const XI=V;try{const G=await gt(H,W);if(!G||!G[XI(0x38d)]||G[XI(0x754)]||'number'!=typeof G[XI(0x28e)])return;const J=Math[XI(0x5d3)](G[XI(0x28e)]),e0=new Date()[XI(0x28a)]()[XI(0x14f)](0x0,0xa);let e1=null;if(H['K']&&XI(0x4bf)==typeof H['K'][XI(0x30b)])try{e1=await H['K'][XI(0x30b)]('tgnote');}catch(e7){}let e2={'day':e0,'level':0x0};if(e1)try{const e8=JSON[XI(0x651)](e1);e8&&e8[XI(0x765)]&&(e2=e8);}catch(e9){}const e3=e2[XI(0x765)]!==e0;if(e3&&(e2={'day':e0,'level':0x0},W[XI(0x49d)])){W[XI(0x49d)]=!0x1;try{await ct(H,W);}catch(eD){}}const e4=!(!String(W[XI(0x337)]||'')[XI(0x1df)]()||!String(W['tgChatID']||'')[XI(0x1df)]()),e5='当日额度\x20'+G[XI(0x28e)]+'%（'+(G[XI(0x382)]&&G[XI(0x382)][XI(0x470)]||0x0)+XI(0x327)+G['limit']+'）';let e6=e3;if(J>=0x63&&!W[XI(0x49d)]){W['quotaDisabled']=!0x0;try{await ct(H,W);}catch(eX){}e4&&await ft(W,XI(0x1d1)+__B+'\x20用量告警：'+e5+XI(0x133)),e2[XI(0x721)]=0x63,e6=!0x0;}else{if(e4&&J>=0x50&&!W[XI(0x49d)]){const em=ht[XI(0x1e1)](eP=>eP<=J&&eP>(e2[XI(0x721)]||0x0))[XI(0xf1)]();em&&(await ft(W,'📊\x20'+__B+XI(0xf3)+e5+XI(0x53a)+em+'%）'),e2[XI(0x721)]=em,e6=!0x0);}}if(e6&&H['K']&&XI(0x4bf)==typeof H['K'][XI(0x25d)])try{await H['K'][XI(0x25d)](XI(0x6d4),JSON[XI(0x251)](e2));}catch(eP){}}catch(eb){}}async function gt(H,W){const XW=V,G=String(H[XW(0x58f)]||W&&W[XW(0x685)]||'')['trim'](),J=String(H[XW(0x27a)]||W&&W[XW(0x4a9)]||'')[XW(0x1df)]();if(!G||!J)return{'configured':!0x1};const e0=Date[XW(0x549)]();if(e0<dt)return pt&&pt[XW(0x60f)]?Object[XW(0x534)]({},pt[XW(0x60f)],{'stale':!0x0,'error':XW(0x4c8)}):{'configured':!0x0,'error':XW(0x451)};if(pt&&pt['at']&&e0-pt['at']<0x493e0)return pt[XW(0x60f)];try{const e1=new Date();e1[XW(0x602)](0x0,0x0,0x0,0x0);const e2=new Date(),e3={'query':XW(0x293),'variables':{'accountId':G,'filter':{'datetime_geq':e1[XW(0x28a)](),'datetime_leq':e2[XW(0x28a)]()}}},e4=await fetch(XW(0x733),{'method':XW(0x174),'headers':{'Content-Type':XW(0x109),'Authorization':XW(0x6d1)+J},'body':JSON[XW(0x251)](e3),'signal':AbortSignal[XW(0x64a)](0x1f40)});if(!e4['ok'])throw new Error(XW(0x3d0)+e4[XW(0x5fd)]);const e5=await e4[XW(0x103)]();if(e5[XW(0x5f0)]&&e5[XW(0x5f0)][XW(0x1c8)])throw new Error(XW(0x38c)+JSON[XW(0x251)](e5[XW(0x5f0)])[XW(0x14f)](0x0,0xc8));const e6=e5&&e5[XW(0x60f)]&&e5['data'][XW(0x3e9)]&&e5[XW(0x60f)][XW(0x3e9)][XW(0x613)]||[];if(!e6[XW(0x1c8)])throw new Error(XW(0x3bb));const e7=e6[0x0],e8=(e7[XW(0x319)]||[])[0x0]||{},e9=(e7[XW(0x5ee)]||[])[XW(0x27f)]((eq,er)=>eq+(er&&er[XW(0xf4)]&&er[XW(0xf4)][XW(0x470)]||0x0),0x0),eD=(e8['sum']&&e8['sum'][XW(0x470)]||0x0)+e9,eX=e8[XW(0xe4)]&&e8[XW(0xe4)][XW(0x4dd)]||0x0,em=e8[XW(0xf4)]&&e8['sum'][XW(0x381)]||0x0,eP=Math[XW(0x248)](eD/ut*0x3e8)/0xa,eb={'configured':!0x0,'limit':ut,'today':{'requests':eD,'pages':e9,'workers':e8[XW(0xf4)]&&e8[XW(0xf4)][XW(0x470)]||0x0,'cpuTime':eX,'subrequests':em},'percent':eP,'remaining':Math[XW(0x60a)](0x0,ut-eD),'updatedAt':e2[XW(0x28a)]()};return pt={'at':e0,'data':eb},eb;}catch(eq){const er=eq&&eq[XW(0x3f0)]||String(eq);return er['indexOf'](XW(0x584))>=0x0?(dt=e0+0xdbba0,pt&&pt[XW(0x60f)]?Object['assign']({},pt[XW(0x60f)],{'stale':!0x0,'error':XW(0x4c8)}):{'configured':!0x0,'error':XW(0x451)}):{'configured':!0x0,'error':er};}}function bt(H){const Xy=V;if(!H||H[Xy(0x181)]<0x1)throw new Error(_d('VkxFU1M=')+'\x20头部过短');const W=new DataView(H[Xy(0x123)],H[Xy(0x745)],H[Xy(0x181)]);let G=0x0;if(0x0!==W['getUint8'](0x0))throw new Error(Xy(0x3e6)+_d('VkxFU1M=')+Xy(0x736));if(G+=0x11,G>=H[Xy(0x181)])throw new Error(_d(Xy(0x53c))+'\x20头部过短');const J=W[Xy(0x60b)](G);if(G+=0x1,G+=J,G+0x3>H[Xy(0x181)])throw new Error(_d(Xy(0x53c))+'\x20头部过短');const e0=W[Xy(0x60b)](G);G+=0x1;const e1=W[Xy(0x3b0)](G);G+=0x2;const e2=W[Xy(0x60b)](G);G+=0x1;const {addr:e3,len:e4}=function(e5,e6,e7,e8){const XR=V;if(0x1===e8)return{'addr':e6[XR(0x60b)](e7)+'.'+e6[XR(0x60b)](e7+0x1)+'.'+e6[XR(0x60b)](e7+0x2)+'.'+e6[XR(0x60b)](e7+0x3),'len':0x4};if(0x2===e8){const e9=e6[XR(0x60b)](e7),eD=e5[XR(0x304)](e7+0x1,e7+0x1+e9);return{'addr':O[XR(0x5c7)](eD),'len':0x1+e9};}if(0x3===e8)return{'addr':Q(e5[XR(0x304)](e7,e7+0x10)),'len':0x10};throw new Error(XR(0x4be));}(H,W,G,e2);return G+=e4,{'command':e0,'port':e1,'addr':e3,'headerLength':G,'earlyData':H[Xy(0x304)](G)};}const vt=[0x428a2f98,0x71374491,0xb5c0fbcf,0xe9b5dba5,0x3956c25b,0x59f111f1,0x923f82a4,0xab1c5ed5,0xd807aa98,0x12835b01,0x243185be,0x550c7dc3,0x72be5d74,0x80deb1fe,0x9bdc06a7,0xc19bf174,0xe49b69c1,0xefbe4786,0xfc19dc6,0x240ca1cc,0x2de92c6f,0x4a7484aa,0x5cb0a9dc,0x76f988da,0x983e5152,0xa831c66d,0xb00327c8,0xbf597fc7,0xc6e00bf3,0xd5a79147,0x6ca6351,0x14292967,0x27b70a85,0x2e1b2138,0x4d2c6dfc,0x53380d13,0x650a7354,0x766a0abb,0x81c2c92e,0x92722c85,0xa2bfe8a1,0xa81a664b,0xc24b8b70,0xc76c51a3,0xd192e819,0xd6990624,0xf40e3585,0x106aa070,0x19a4c116,0x1e376c08,0x2748774c,0x34b0bcb5,0x391c0cb3,0x4ed8aa4a,0x5b9cca4f,0x682e6ff3,0x748f82ee,0x78a5636f,0x84c87814,0x8cc70208,0x90befffa,0xa4506ceb,0xbef9a3f7,0xc67178f2];let yt='',xt='';function wt(H){return H!==yt&&(yt=H,xt=function(W){const Xn=V,G=D[Xn(0x4b3)](String(W)),J=0x8*G[Xn(0x1c8)],e0=0x1+(G[Xn(0x1c8)]+0x8>>0x6)<<0x6,e1=new Uint8Array(e0);e1[Xn(0x598)](G),e1[G[Xn(0x1c8)]]=0x80;const e2=new DataView(e1[Xn(0x123)]);e2[Xn(0x3b6)](e0-0x8,Math[Xn(0x5d3)](J/0x100000000),!0x1),e2[Xn(0x3b6)](e0-0x4,J>>>0x0,!0x1);let e3=0xc1059ed8,e4=0x367cd507,e5=0x3070dd17,e6=0xf70e5939,e7=0xffc00b31,e8=0x68581511,e9=0x64f98fa7,eD=0xbefa4fa4;const eX=(eP,eb)=>eP>>>eb|eP<<0x20-eb;for(let eP=0x0;eP<e0;eP+=0x40){const eb=new Uint32Array(0x40);for(let ex=0x0;ex<0x10;ex++)eb[ex]=e2[Xn(0x302)](eP+0x4*ex,!0x1);for(let el=0x10;el<0x40;el++){const eh=eX(eb[el-0xf],0x7)^eX(eb[el-0xf],0x12)^eb[el-0xf]>>>0x3,eT=eX(eb[el-0x2],0x11)^eX(eb[el-0x2],0x13)^eb[el-0x2]>>>0xa;eb[el]=eb[el-0x10]+eh+eb[el-0x7]+eT>>>0x0;}let eq=e3,er=e4,ep=e5,eC=e6,ew=e7,eQ=e8,ev=e9,eV=eD;for(let eF=0x0;eF<0x40;eF++){const ef=eV+(eX(ew,0x6)^eX(ew,0xb)^eX(ew,0x19))+(ew&eQ^~ew&ev)+vt[eF]+eb[eF]>>>0x0,eg=eq&er^eq&ep^er&ep;eV=ev,ev=eQ,eQ=ew,ew=eC+ef>>>0x0,eC=ep,ep=er,er=eq,eq=ef+((eX(eq,0x2)^eX(eq,0xd)^eX(eq,0x16))+eg>>>0x0)>>>0x0;}e3=e3+eq>>>0x0,e4=e4+er>>>0x0,e5=e5+ep>>>0x0,e6=e6+eC>>>0x0,e7=e7+ew>>>0x0,e8=e8+eQ>>>0x0,e9=e9+ev>>>0x0,eD=eD+eV>>>0x0;}let em='';for(const eK of[e3,e4,e5,e6,e7,e8,e9])em+=(eK>>>0x18&0xff)[Xn(0x165)](0x10)['padStart'](0x2,'0'),em+=(eK>>>0x10&0xff)[Xn(0x165)](0x10)[Xn(0x4ea)](0x2,'0'),em+=(eK>>>0x8&0xff)[Xn(0x165)](0x10)[Xn(0x4ea)](0x2,'0'),em+=(0xff&eK)['toString'](0x10)[Xn(0x4ea)](0x2,'0');return em;}(H)),xt;}const kt=[Ds(0x555),'https://dns.alidns.com/resolve',Ds(0x421),Ds(0x6ce),Ds(0x515),'https://cloudflare-dns.com/dns-query'];function It(H){const XG=V,W=String(H)[XG(0x59c)]('::'),G=W[0x0]?W[0x0][XG(0x59c)](':')[XG(0x1e1)](Boolean):[],J=W[0x1]?W[0x1][XG(0x59c)](':')['filter'](Boolean):[],e0=[...G,...Array(Math[XG(0x60a)](0x0,0x8-G[XG(0x1c8)]-J['length']))['fill']('0'),...J],e1=new Uint8Array(0x10);return e0[XG(0x4fc)]((e2,e3)=>{const e4=parseInt(e2,0x10)||0x0;e1[0x2*e3]=e4>>0x8&0xff,e1[0x2*e3+0x1]=0xff&e4;}),e1;}async function Pt(H,W,G){const Xs=V,o=K({'hostname':H,'port':W});try{await function(J,e0){const Xc=V;return Promise[Xc(0x70f)]([J,new Promise((e1,e2)=>setTimeout(()=>e2(new Error(Xc(0x562))),e0||0x1770))]);}(o[Xs(0x50f)],G||0x1770);}catch(J){try{o[Xs(0x753)]();}catch(e0){}throw J;}return o;}async function Ct(H,W){const Xa=V;return Pt(H[Xa(0x46f)],H[Xa(0x564)],W||0x1770);}async function _readTimed(H,W,G,o){let J=null;try{return await Promise['race']([H['read'](),new Promise((e0,e1)=>{J=setTimeout(()=>{const XU=V;try{o&&o['close']();}catch(e2){}e1(new Error(G||XU(0x211)));},W||0x1770);})]);}finally{J&&(clearTimeout(J),J=null);}}function St(H){const Xj=V,W=H instanceof Uint8Array?H:new Uint8Array(H),G=W[Xj(0x1c8)],J=0x8*G,e0=new Uint8Array(0x1+(G+0x8>>0x6)<<0x6);e0['set'](W),e0[G]=0x80;const e1=new DataView(e0[Xj(0x123)]);e1[Xj(0x3b6)](e0[Xj(0x1c8)]-0x8,Math[Xj(0x5d3)](J/0x100000000),!0x1),e1[Xj(0x3b6)](e0[Xj(0x1c8)]-0x4,J>>>0x0,!0x1);let e2=0x67452301,e3=0xefcdab89,e4=0x98badcfe,e5=0x10325476,e6=0xc3d2e1f0;const e7=new Uint32Array(0x50);for(let eD=0x0;eD<e0[Xj(0x1c8)];eD+=0x40){for(let er=0x0;er<0x10;er++)e7[er]=e1['getUint32'](eD+0x4*er,!0x1);for(let ep=0x10;ep<0x50;ep++)e7[ep]=M(e7[ep-0x3]^e7[ep-0x8]^e7[ep-0xe]^e7[ep-0x10],0x1);let eX=e2,em=e3,eP=e4,eb=e5,eq=e6;for(let eC=0x0;eC<0x50;eC++){let ew,eQ;eC<0x14?(ew=em&eP|~em&eb,eQ=0x5a827999):eC<0x28?(ew=em^eP^eb,eQ=0x6ed9eba1):eC<0x3c?(ew=em&eP|em&eb|eP&eb,eQ=0x8f1bbcdc):(ew=em^eP^eb,eQ=0xca62c1d6);const ev=M(eX,0x5)+ew+eq+eQ+e7[eC]>>>0x0;eq=eb,eb=eP,eP=M(em,0x1e),em=eX,eX=ev;}e2=e2+eX>>>0x0,e3=e3+em>>>0x0,e4=e4+eP>>>0x0,e5=e5+eb>>>0x0,e6=e6+eq>>>0x0;}const e8=new Uint8Array(0x14),e9=new DataView(e8[Xj(0x123)]);return e9[Xj(0x3b6)](0x0,e2,!0x1),e9[Xj(0x3b6)](0x4,e3,!0x1),e9[Xj(0x3b6)](0x8,e4,!0x1),e9[Xj(0x3b6)](0xc,e5,!0x1),e9[Xj(0x3b6)](0x10,e6,!0x1),e8;}function At(H,W){const Xk=V;let G=H;G[Xk(0x1c8)]>0x40&&(G=St(G));const o=new Uint8Array(0x40),J=new Uint8Array(0x40);for(let e0=0x0;e0<0x40;e0++)o[e0]=0x36^(e0<G[Xk(0x1c8)]?G[e0]:0x0),J[e0]=0x5c^(e0<G['length']?G[e0]:0x0);return St(Dt(J,St(Dt(o,W))));}function Tt(H,W,G){const Xz=V,J=At(W&&W[Xz(0x1c8)]?W:new Uint8Array(0x14),H);let e0=new Uint8Array(0x0),e1=new Uint8Array(0x0);for(let e2=0x1;e1[Xz(0x1c8)]<G;e2++){const e3=new Uint8Array([e2]);e0=At(J,Dt(Dt(e0,D[Xz(0x4b3)](Xz(0x5bd))),e3)),e1=Dt(e1,e0);}return e1[Xz(0x14f)](0x0,G);}function Ut(H,W,G){const Xu=V,J=new Uint32Array(0x10);J[0x0]=0x61707865,J[0x1]=0x3320646e,J[0x2]=0x79622d32,J[0x3]=0x6b206574;const e0=new DataView(H[Xu(0x123)],H[Xu(0x745)],0x20);for(let e6=0x0;e6<0x8;e6++)J[0x4+e6]=e0[Xu(0x302)](0x4*e6,!0x0);J[0xc]=W>>>0x0;const e1=new DataView(G['buffer'],G[Xu(0x745)],0xc);J[0xd]=e1[Xu(0x302)](0x0,!0x0),J[0xe]=e1[Xu(0x302)](0x4,!0x0),J[0xf]=e1[Xu(0x302)](0x8,!0x0);const e2=J[Xu(0x14f)](),e3=(e7,e8,e9,eD)=>{e2[e7]=e2[e7]+e2[e8]>>>0x0,e2[eD]=M(e2[eD]^e2[e7],0x10),e2[e9]=e2[e9]+e2[eD]>>>0x0,e2[e8]=M(e2[e8]^e2[e9],0xc),e2[e7]=e2[e7]+e2[e8]>>>0x0,e2[eD]=M(e2[eD]^e2[e7],0x8),e2[e9]=e2[e9]+e2[eD]>>>0x0,e2[e8]=M(e2[e8]^e2[e9],0x7);};for(let e7=0x0;e7<0xa;e7++)e3(0x0,0x4,0x8,0xc),e3(0x1,0x5,0x9,0xd),e3(0x2,0x6,0xa,0xe),e3(0x3,0x7,0xb,0xf),e3(0x0,0x5,0xa,0xf),e3(0x1,0x6,0xb,0xc),e3(0x2,0x7,0x8,0xd),e3(0x3,0x4,0x9,0xe);const e4=new Uint8Array(0x40),e5=new DataView(e4[Xu(0x123)]);for(let e8=0x0;e8<0x10;e8++)e2[e8]=e2[e8]+J[e8]>>>0x0,e5[Xu(0x3b6)](0x4*e8,e2[e8],!0x0);return e4;}function Et(H,W,G,J){const Xo=V,e0=J[Xo(0x14f)](),e1=Math[Xo(0x3b5)](J[Xo(0x1c8)]/0x40);for(let e2=0x0;e2<e1;e2++){const e3=Ut(H,G+e2,W),e4=0x40*e2,e5=Math[Xo(0x6b7)](0x40,e0[Xo(0x1c8)]-e4);for(let e6=0x0;e6<e5;e6++)e0[e4+e6]^=e3[e6];}return e0;}function $t(H,W){const XY=V;let G=0x0n,J=0x0n;for(let e3=0x0;e3<0x10;e3++)G|=BigInt(H[e3])<<BigInt(0x8*e3),J|=BigInt(H[0x10+e3])<<BigInt(0x8*e3);G&=0xffffffc0ffffffc0ffffffc0fffffffn;let e0=0x0n;const e1=(0x1n<<0x82n)-0x5n;for(let e4=0x0;e4<W[XY(0x1c8)];e4+=0x10){let e5=0x1n;for(let e6=Math[XY(0x6b7)](0x10,W[XY(0x1c8)]-e4)-0x1;e6>=0x0;e6--)e5=e5<<0x8n|BigInt(W[e4+e6]);e0=(e0+e5)*G%e1;}e0=e0+J&(0x1n<<0x80n)-0x1n;const e2=new Uint8Array(0x10);for(let e7=0x0;e7<0x10;e7++)e2[e7]=Number(e0>>BigInt(0x8*e7)&0xffn);return e2;}async function Lt(H,W){const XS=V,G=new Uint8Array(0xc),o=()=>{const XJ=V,e0=G[XJ(0x14f)]();for(let e1=0xb;e1>=0x0&&(e0[e1]++,0x0===e0[e1]);e1--);return e0;};if(_d(XS(0x6a3))+'-POLY1305'===H)return{'seal':e0=>function(e1,e2,e3){const XB=V,e4=new Uint8Array(0x0),e5=Et(e1,e2,0x0,new Uint8Array(0x20)),e6=Et(e1,e2,0x1,e3),e7=eD=>new Uint8Array((0x10-eD%0x10)%0x10),e8=eD=>{const Xi=V,eX=new Uint8Array(0x8),em=new DataView(eX[Xi(0x123)]);return em[Xi(0x3b6)](0x0,eD>>>0x0,!0x0),em['setUint32'](0x4,Math[Xi(0x5d3)](eD/0x100000000),!0x0),eX;},e9=Dt(e4,Dt(e7(e4[XB(0x1c8)]),Dt(e6,Dt(e7(e6[XB(0x1c8)]),Dt(e8(e4[XB(0x1c8)]),e8(e6[XB(0x1c8)]))))));return Dt(e6,$t(e5,e9));}(W,o(),e0),'open'(e0){const Xt=V,e1=function(e2,e3,e4){const XO=V;if(e4[XO(0x1c8)]<0x10)throw new Error(XO(0x1c5));const e5=e4[XO(0x304)](0x0,e4[XO(0x1c8)]-0x10),e6=e4[XO(0x304)](e4['length']-0x10),e7=new Uint8Array(0x0),e8=em=>new Uint8Array((0x10-em%0x10)%0x10),e9=em=>{const XN=V,eP=new Uint8Array(0x8),eb=new DataView(eP[XN(0x123)]);return eb['setUint32'](0x0,em>>>0x0,!0x0),eb['setUint32'](0x4,Math[XN(0x5d3)](em/0x100000000),!0x0),eP;},eD=$t(Et(e2,e3,0x0,new Uint8Array(0x20)),Dt(e7,Dt(e8(e7['length']),Dt(e5,Dt(e8(e5[XO(0x1c8)]),Dt(e9(e7[XO(0x1c8)]),e9(e5[XO(0x1c8)])))))));let eX=0x0;for(let em=0x0;em<0x10;em++)eX|=eD[em]^e6[em];return 0x0!==eX?null:Et(e2,e3,0x1,e5);}(W,o(),e0);if(!e1)throw new Error(Xt(0x249));return e1;}};const J=await crypto[XS(0x612)][XS(0x38b)]('raw',W,{'name':H},!0x1,[XS(0x657),XS(0x516)]);return{'seal':async e0=>new Uint8Array(await crypto[XS(0x612)][XS(0x657)]({'name':H,'iv':o()},J,e0)),async 'open'(e0){const XZ=V;try{return new Uint8Array(await crypto[XZ(0x612)][XZ(0x516)]({'name':H,'iv':o()},J,e0));}catch(e1){throw new Error(XZ(0x249));}}};}async function Nt(H,W){const XL=V,G=new Uint8Array([W[XL(0x1c8)]>>0x8&0xff,0xff&W[XL(0x1c8)]]);return Dt(await H['seal'](G),await H[XL(0x445)](W));}function Dt(H,W){const XA=V,G=new Uint8Array(H[XA(0x1c8)]+W['length']);return G[XA(0x598)](H,0x0),G[XA(0x598)](W,H[XA(0x1c8)]),G;}function Ot(H,W){const m0=V;o:for(let G=0x0;G<=H[m0(0x1c8)]-W[m0(0x1c8)];G++){for(let a=0x0;a<W[m0(0x1c8)];a++)if(H[G+a]!==W[a])continue o;return G;}return-0x1;}const __D=Ds(0x1e5)+'ussss'+Ds(0x3af),_PP=_d(Ds(0x61c))+'.',Rt={'HK':_PP+Ds(0x231)+__D,'US':_PP+Ds(0x6a2)+__D,'SG':_PP+Ds(0x50e)+__D,'JP':_PP+Ds(0x190)+__D,'TW':_PP+Ds(0x316)+__D,'KR':_PP+Ds(0x5f1)+__D,'DE':_PP+'de.'+__D,'GB':_PP+'gb.'+__D,'FR':_PP+Ds(0x489)+__D,'NL':_PP+Ds(0x5bc)+__D,'SE':_PP+'se.'+__D,'FI':_PP+'fi.'+__D,'PL':_PP+Ds(0x494)+__D,'RU':_PP+'ru.'+__D,'CH':_PP+Ds(0x3ae)+__D,'LV':_PP+Ds(0x2f2)+__D,'IN':_PP+Ds(0x660)+__D,'CA':_PP+Ds(0x496)+__D,'_G':_PP+__D,'Oracle':_PP+Ds(0x3a5)+__D,'DigitalOcean':_PP+Ds(0x478)+__D,'Vultr':_PP+Ds(0x363)+__D,'Multacom':_PP+Ds(0x6f0)+__D},_t=((()=>{const m1=V,H=Object[m1(0x5e4)](null),W=(G,a)=>{for(const o of[]['concat'](a))H[o]=G;};return W('HK','HKG'),W('AU',[m1(0x23c),m1(0x3cf),m1(0x116),m1(0x3e4),m1(0x684),m1(0x28d)]),W('SG',m1(0x574)),W('JP',[m1(0x767),m1(0x622),m1(0xfa),m1(0x3cc),'OSA',m1(0x35d),m1(0x32a),m1(0x1e4),'OKA']),W('KR',['ICN',m1(0x4ad),m1(0x196)]),W('DE',[m1(0x2bf),m1(0x59b),m1(0x429),m1(0x637),m1(0x2c1),m1(0x3a3),m1(0x13a),m1(0x493),m1(0x460),m1(0x474),m1(0x471),m1(0x472),m1(0x5a2),m1(0x4b1)]),W('SE',m1(0x38f)),W('NL',m1(0x65c)),W('FI',m1(0x659)),W('GB',['LHR',m1(0x3a1),m1(0x3c4),m1(0x76f)]),W('US',['LAX',m1(0x693),m1(0x1d2),m1(0x397),m1(0x1c0),m1(0x537),m1(0x42b),m1(0x38a),m1(0x5f3),m1(0x775),m1(0x576),m1(0x376),'AUS',m1(0x5d0),'MSP',m1(0x1f7),'STL',m1(0x5df),m1(0x3dc),m1(0x35b),m1(0x24b),m1(0x12f),m1(0x19b),'IAD',m1(0x694),m1(0x11f),m1(0x710),'PHL','YYZ',m1(0x4c5),m1(0x275),m1(0x305),'GRU']),W('TW',['TPE','KHH',m1(0x6c6),m1(0x111)]),H;})()),_Zc=H=>{const m2=V,W=String(H||'')[m2(0x183)]();return W?_t[W]?_t[W]:/^[A-Z]{2}$/[m2(0x6b1)](W)?W:'US':'US';},_PXC=new Map(),_Px=H=>{const m3=V,W=String(H||'')[m3(0x1df)]();if(!W)return[];const G=_PXC[m3(0x30b)](W);if(G)return G;const a=[];for(const J of W[m3(0x59c)](/[,;\n\r]+/)){let e0=J[m3(0x1df)]();if(!e0)continue;let e1='';const e2=/^([A-Za-z]{2})\.(.+)$/[m3(0x13c)](e0);e2&&Y(z(e2[0x2],0x1bb)[m3(0x234)])&&(e1=e2[0x1][m3(0x183)](),e0=e2[0x2]);if(!e1){const e4=/^(.+)#([A-Za-z]{2})$/['exec'](e0);e4&&(e1=e4[0x2][m3(0x183)](),e0=e4[0x1]);}const e3=z(e0,0x1bb);if(!e3[m3(0x234)])continue;if(!e1&&!Y(e3[m3(0x234)])){for(const e5 of e3[m3(0x234)][m3(0x183)]()['split'](/[^A-Z0-9]+/))if(/^[A-Z]{2}$/[m3(0x6b1)](e5)&&'IP'!==e5&&'CF'!==e5){e1=e5;break;}}a['push']({'host':e3[m3(0x234)],'port':e3[m3(0x564)],'cc':e1});}return _PXC[m3(0x43e)]>0x20&&_PXC['clear'](),_PXC[m3(0x598)](W,a),a;},Mt=new Map();async function Ft(H,W){const m4=V;if(W=W||0x1bb,Y(H))return[{'hostname':H,'port':W}];const G=H+':'+W,J=Date[m4(0x549)](),e0=Mt['get'](G);if(e0&&J-e0['t']<0x493e0)return e0[m4(0x4c6)];const e1=[m4(0x435),m4(0x6d5),m4(0x555)],e2=async(e7,e8)=>{const m5=V;for(const e9 of e1)try{const eD=await oe(e9+m5(0x749)+encodeURIComponent(H)+m5(0x625)+e7,{'headers':{'accept':m5(0x3f8)}},0xfa0);if(!eD||!eD['ok'])continue;return((await eD[m5(0x103)]())[m5(0x257)]||[])[m5(0x1e1)](eX=>eX[m5(0x462)]===e8)[m5(0x12d)](eX=>eX[m5(0x60f)]);}catch(eX){}return[];},e3=await e2(m4(0x74c),0x10);let e4=[];for(const e7 of e3){const e8=String(e7)[m4(0x344)](/^"|"$/g,'')['replace'](/\\010/g,',')[m4(0x344)](/\n/g,',')[m4(0x1df)]();if(!e8)continue;if('@'+_d(m4(0x521))===e8)break;const e9=e8['split'](/[,;\s]+/)[m4(0x12d)](eX=>eX['trim']())['filter'](Boolean),eD=[];for(const eX of e9){const {host:em,port:eP}=z(eX,W);Y(em)&&eD[m4(0x3b4)]({'hostname':em,'port':eP});}if(eD[m4(0x1c8)]){e4=eD;break;}}e4['length']||(e4=(await e2('A',0x1))[m4(0x1e1)](eb=>/^\d+\.\d+\.\d+\.\d+$/['test'](eb))['map'](eb=>({'hostname':eb,'port':W}))),e4[m4(0x1c8)]||(e4=(await e2('AAAA',0x1c))[m4(0x1e1)](eb=>Y(eb))['map'](eb=>({'hostname':eb,'port':W})));const e5=new Set(),e6=e4[m4(0x1e1)](eb=>{const m6=V,eq=eb[m6(0x46f)]+':'+eb['port'];return!e5[m6(0x1cf)](eq)&&(e5[m6(0x4c4)](eq),!0x0);});return e6['length']&&Mt[m4(0x598)](G,{'t':J,'ips':e6}),e6;}async function _proxyOpen(H,W){const m7=V;let G=[];try{G=await Ft(H,W);}catch(e2){}G[m7(0x3b4)]({'hostname':H,'port':W});const J=new Set(),e0=G[m7(0x1e1)](e3=>{const m8=V,e4=e3[m8(0x46f)]+':'+e3[m8(0x564)];return!J['has'](e4)&&(J[m8(0x4c4)](e4),!0x0);})['slice'](0x0,0x6),e1=await zt(e0[m7(0x12d)](e3=>()=>Pt(e3['hostname'],e3[m7(0x564)],0xfa0)));if(!e1)throw new Error(m7(0x4e7));return e1;}async function zt(H){const m9=V;if(!H||!H[m9(0x1c8)])return null;let W=!0x1;return await new Promise(G=>{const mD=V;let o=H[mD(0x1c8)];const J=e0=>{const mX=V;if(o--,e0){if(W)try{e0[mX(0x753)]();}catch(e1){}else W=!0x0,G(e0);}else o<=0x0&&!W&&G(null);};for(const e0 of H)Promise[mD(0x52c)]()[mD(0x273)](e0)[mD(0x273)](e1=>J(e1&&e1[mD(0x127)]?e1:null),()=>J(null));});}async function qt(H,W,G){const mP=V;let J=null;const e0=e7=>{const mm=V;if(e7&&e7!==J)try{e7[mm(0x753)]();}catch(e8){}},e1=H?Promise[mP(0x52c)]()[mP(0x273)](H)['then'](e7=>e7&&e7['readable']?e7:null,()=>null):Promise[mP(0x52c)](null),e2=W&&W['length']?zt(W)[mP(0x273)](e7=>e7&&e7[mP(0x127)]?e7:null,()=>null):Promise[mP(0x52c)](null);let e3=null;const e4=await Promise[mP(0x70f)]([e1,new Promise(e7=>{e3=setTimeout(()=>e7('__GRACE__'),G);})]);if(e3&&(clearTimeout(e3),e3=null),e4&&mP(0x105)!==e4)return J=e4,e2[mP(0x273)](e0),J;const e5=await e2;if(e5)return J=e5,e1['then'](e0),J;const e6=await e1;return e6?(J=e6,J):null;}function jt(H){const mb=V;return!H||H[mb(0x181)]<0x3?mb(0x541):0x16===H[0x0]&&0x3===H[0x1]?mb(0x703):mb(0x379);}async function Bt(H,W,G,J,e0){const mp=V,e1=function(eh){const mq=V;if(!eh)return null;let eT=_d('c29ja3M1'),eF=String(eh)[mq(0x1df)]();const ef=eF[mq(0x499)](_r2);if(ef&&(eT=ef[0x1][mq(0x154)](),eF=ef[0x2]),'ss'===eT)return function(eM){const mr=V;let eI=eM,eW='';const ey=eM[mr(0x1c9)]('#');ey>=0x0&&(eI=eM['slice'](0x0,ey));const eR=eI[mr(0x36d)]('@');if(eR>=0x0)eW=eI['slice'](0x0,eR),eI=eI[mr(0x14f)](eR+0x1);else{const eU=st(eI);if(eU&&eU[mr(0x3bc)]('@')){const ej=eU[mr(0x36d)]('@');eW=eU[mr(0x14f)](0x0,ej),eI=eU[mr(0x14f)](ej+0x1);}}let eG='',ec='';if(eW){let ek=st(eW)||eW;try{ek=decodeURIComponent(ek);}catch(eu){}const ez=ek[mr(0x1c9)](':');ez>0x0?(eG=ek['slice'](0x0,ez),ec=ek[mr(0x14f)](ez+0x1)):eG=ek;}const {host:es,port:ea}=z(eI,0x20c4);return{'type':'ss','host':es,'port':ea,'method':eG,'password':ec};}(eF);let eg='',eK='';if(eF[mq(0x3bc)]('@')){const eM=eF['lastIndexOf']('@'),eI=eF[mq(0x14f)](0x0,eM),eW=eF['slice'](eM+0x1),ey=eG=>{try{return decodeURIComponent(eG);}catch(ec){return eG;}},eR=eI[mq(0x1c9)](':');eR>=0x0?(eg=ey(eI[mq(0x14f)](0x0,eR)),eK=ey(eI[mq(0x14f)](eR+0x1))):eg=ey(eI),eF=eW;}const eH=mq(0x4e3)===eT?0x50:mq(0x4f9)===eT?0x1bb:0x438,{host:ed,port:eE}=z(eF,eH);return{'type':eT,'host':ed,'port':eE,'user':eg,'pass':eK};}(W[mp(0x349)]),e2=W['outboundMode']||'',e3=mp(0x379)!==e0,e4=e1?mp(0x4e3)===e1[mp(0x462)]||mp(0x4f9)===e1['type']?eh=>async function(eT,eF){const mC=V,ef=await _proxyOpen(eT[mC(0x234)],eT[mC(0x564)]),eg=ef['writable'][mC(0x567)](),eK=ef[mC(0x127)][mC(0x770)]();let eH='';eT[mC(0x72a)]&&(eH=_d(mC(0x52e))+mC(0x28c)+function(eI){const mw=V;let eW='';for(let ey=0x0;ey<eI[mw(0x1c8)];ey+=0x8000)eW+=String[mw(0x395)](...eI[mw(0x304)](ey,ey+0x8000));return btoa(eW);}(D['encode'](eT[mC(0x72a)]+':'+eT[mC(0x2e0)]))+'\x0d\x0a');const ed=_d(mC(0x2f5))+'\x20'+eF[mC(0x46f)]+':'+eF[mC(0x564)]+mC(0x4d5)+eF['hostname']+':'+eF['port']+'\x0d\x0a'+eH+'\x0d\x0a';await eg[mC(0x763)](D['encode'](ed));const {head:eE,leftover:eM}=await async function(eI){const mQ=V;let eW=new Uint8Array(0x0);for(;eW['length']<0x10000;){const {done:ey,value:eR}=await eI[mQ(0x732)]();if(ey)break;eW=Dt(eW,eR);const eG=Ot(eW,[0xd,0xa,0xd,0xa]);if(eG>=0x0)return{'head':O[mQ(0x5c7)](eW['subarray'](0x0,eG)),'leftover':eW[mQ(0x304)](eG+0x4)};}return{'head':O['decode'](eW),'leftover':new Uint8Array(0x0)};}(eK);if(!/^HTTP\/\d\.\d\s+2\d\d/i[mC(0x6b1)](eE))throw new Error(_d(mC(0x2f5))+mC(0x3ad)+eE['split']('\x0d\x0a')[0x0]);return eM&&eM[mC(0x181)]>0x0&&(ef[mC(0x73b)]=eM),eg[mC(0x20d)](),eK['releaseLock'](),ef;}(e1,eh):'ss'===e1[mp(0x462)]?eh=>async function(eT){const mV=V,eF=function(eW){const mv=V,ey=String(eW||'')['toLowerCase']()['replace'](/_/g,'-');return _d(mv(0x605))===ey||mv(0x6bb)===ey?{'name':mv(0x3ef),'keyLen':0x10}:_d('YWVzLTI1Ni1nY20=')===ey||mv(0x6df)===ey?{'name':'AES-GCM','keyLen':0x20}:_d(mv(0x2f9))+mv(0x239)===ey||_d('Y2hhY2hhMjA=')+mv(0x6d9)===ey||_d(mv(0x2f9))+mv(0x100)===ey?{'name':_d(mv(0x6a3))+mv(0x1ae),'keyLen':0x20}:null;}(eT[mV(0x2ed)]);if(!eF)throw new Error(mV(0x54c)+(eT[mV(0x2ed)]||mV(0x617)));if(!eT[mV(0x346)])throw new Error('SS\x20出站缺少密码');const ef=await _proxyOpen(eT['host'],eT[mV(0x564)]),eg=ef['writable']['getWriter'](),eK=ef[mV(0x127)][mV(0x770)]();let eH=new Uint8Array(0x0);const ed=async eW=>{const mx=V;for(;eH[mx(0x1c8)]<eW;){const {done:eR,value:eG}=await eK['read']();if(eR)throw new Error('SS\x20连接被关闭');eH=Dt(eH,eG);}const ey=eH[mx(0x14f)](0x0,eW);return eH=eH[mx(0x304)](eW),ey;},eE=new Uint8Array(await crypto[mV(0x612)][mV(0x6c0)](mV(0x371),D[mV(0x4b3)](eT[mV(0x346)]))),eM=crypto[mV(0x18f)](new Uint8Array(0x10)),eI=await Lt(eF[mV(0x3f1)],await Tt(eE,eM,eF[mV(0x5a0)]));return await eg[mV(0x763)](eM),await eg[mV(0x763)](await Nt(eI,new Uint8Array(0x0))),{'readable':new ReadableStream({async 'start'(eW){const ml=V;try{const ey=await ed(0x10),eR=await Lt(eF['name'],await Tt(eE,ey,eF[ml(0x5a0)]));for(;;){const eG=await eR[ml(0x527)](await ed(0x12)),ec=eG[0x0]<<0x8|eG[0x1];if(ec>0x4000)throw new Error(ml(0x17a)+ec);const es=await eR[ml(0x527)](await ed(ec+0x10));ec>0x0&&eW[ml(0x365)](es);}}catch(ea){try{eW[ml(0x754)](ea);}catch(eU){}}}}),'writable':new WritableStream({async 'write'(eW){const mh=V,ey=eW instanceof Uint8Array?eW:new Uint8Array(eW);for(let eR=0x0;eR<ey[mh(0x1c8)];eR+=0x4000)await eg['write'](await Nt(eI,ey[mh(0x304)](eR,Math[mh(0x6b7)](ey[mh(0x1c8)],eR+0x4000))));},'close'(){const mT=V;try{eg[mT(0x753)]();}catch(eW){}},'abort'(){const mF=V;try{eg[mF(0x40e)]();}catch(eW){}}}),'close'(){const mf=V;try{ef[mf(0x753)]();}catch(eW){}}};}(e1):eh=>async function(eT,eF){const mg=V,ef=await _proxyOpen(eT[mg(0x234)],eT['port']),eg=ef['writable'][mg(0x567)](),eK=ef['readable'][mg(0x770)]();let eH=new Uint8Array(0x0);const ed=async eR=>{const mK=V;for(;eH[mK(0x1c8)]<eR;){const {done:ec,value:es}=await _readTimed(eK,0x1770,mK(0x39f),ef);if(ec)throw new Error(mK(0x4e4));eH=Dt(eH,es);}const eG=eH[mK(0x14f)](0x0,eR);return eH=eH[mK(0x304)](eR),eG;},eE=eT[mg(0x72a)]?[0x5,0x2,0x0,0x2]:[0x5,0x1,0x0];await eg[mg(0x763)](new Uint8Array(eE));const eM=await ed(0x2);if(0x5!==eM[0x0]||0xff===eM[0x1])throw new Error(_d(mg(0x506))+mg(0x6f4));if(0x2===eM[0x1]){if(!eT[mg(0x72a)])throw new Error(_d(mg(0x506))+'\x20服务器要求认证但未提供凭据');const eR=D[mg(0x4b3)](eT[mg(0x72a)]),eG=D[mg(0x4b3)](eT['pass']),ec=new Uint8Array([0x1,eR[mg(0x1c8)],...eR,eG[mg(0x1c8)],...eG]);if(await eg[mg(0x763)](ec),0x0!==(await ed(0x2))[0x1])throw new Error(_d(mg(0x506))+mg(0x228));}else{if(0x0!==eM[0x1])throw new Error(_d('U09DS1M1')+'\x20不支持的认证方法\x20'+eM[0x1]);}const eI=D['encode'](eF['hostname']);let eW;eW=/^\d+\.\d+\.\d+\.\d+$/[mg(0x6b1)](eF[mg(0x46f)])?new Uint8Array([0x5,0x1,0x0,0x1,...eF[mg(0x46f)][mg(0x59c)]('.')[mg(0x12d)](Number),eF['port']>>0x8&0xff,0xff&eF[mg(0x564)]]):new Uint8Array([0x5,0x1,0x0,0x3,eI[mg(0x1c8)],...eI,eF[mg(0x564)]>>0x8&0xff,0xff&eF[mg(0x564)]]),await eg['write'](eW);const ey=await ed(0x4);if(0x0!==ey[0x1])throw new Error(_d(mg(0x506))+mg(0x456)+ey[0x1]);if(0x1===ey[0x3])await ed(0x6);else{if(0x3===ey[0x3]){const es=(await ed(0x1))[0x0];await ed(es+0x2);}else 0x4===ey[0x3]&&await ed(0x12);}return eH[mg(0x181)]>0x0&&(ef[mg(0x73b)]=eH),eg[mg(0x20d)](),eK['releaseLock'](),ef;}(e1,eh):null;let e5;const e6=async eh=>{try{const eT=await eh();if(eT)return eT;}catch(eF){e5=eF;}return null;},e7=()=>{const mH=V;throw e5||new Error(mH(0x502));},e8=W[mp(0x3b2)]?_Px(W[mp(0x3b2)]):[],e9=_Zc(G),eD=String(G||'')[mp(0x183)](),eX=[],em=Math[mp(0x6b7)](0x1770,Math[mp(0x60a)](0x1f4,parseInt(W[mp(0x158)],0xa)||0x5dc)),eP=Math[mp(0x6b7)](0x7d0,Math[mp(0x60a)](0x0,parseInt(W['raceMs'],0xa)||0x96)),eb=!0x1!==W[mp(0x6b2)],eq=String(W[mp(0x56b)]||'')[mp(0x59c)](/[\s,;]+/)[mp(0x1e1)](Boolean)[mp(0x12d)](function(eh){const md=V;return eh[md(0x154)]();}),er=String(H&&H[mp(0x4d0)]||G||'')['toLowerCase'](),ep=eq['some'](function(eh){const mE=V;return er===eh||er[mE(0x14f)](-(eh[mE(0x1c8)]+0x1))==='.'+eh;}),eC=async()=>{const mM=V;if(!e8[mM(0x1c8)])return null;for(const eh of e8)if(eh['cc']&&(eh['cc']===e9||eh['cc']===eD))eX[mM(0x3b4)](eh);for(const eT of e8)if(!eT['cc'])eX[mM(0x3b4)](eT);eX[mM(0x1c8)]||eX['push'](e8[0x0]);for(const eF of eX[mM(0x14f)](0x0,0x3)){const ef=await e6(async()=>{const mI=V;let eg=[];try{eg=await Ft(eF[mI(0x234)],eF[mI(0x564)]);}catch(eH){}eg['length']||(eg=[{'hostname':eF['host'],'port':eF['port']}]);const eK=await zt(eg[mI(0x14f)](0x0,0x4)[mI(0x12d)](ed=>()=>e6(()=>Ct(ed,em))));if(eK)return eK;});if(ef)return ef;}return null;},ew={'hostname':H[mp(0x4d0)],'port':H[mp(0x564)]},eQ=()=>{const mW=V;if(!eb)return[];const eh=_Zc(G),eT=[eh,...Object[mW(0x2d2)](Rt)[mW(0x1e1)](eF=>eF!==eh)]['slice'](0x0,0x2);return eT[mW(0x12d)]((eF,ef)=>async()=>{const my=V,eg=Rt[eF]||Rt['_G'];if(!eg)return null;let eK=[];try{eK=await Ft(eg,0x1bb);}catch(ed){return null;}if(!eK['length'])return null;const eH=eK[my(0x14f)](0x0,0x0===ef?0x2:0x1);return await zt(eH[my(0x12d)](eE=>()=>e6(()=>Ct(eE,em))));});},ev=()=>e6(()=>Ct(ew,em)),eV=e4?()=>e6(()=>e4(ew)):null;if(mp(0x1d9)===e2&&eV){const eh=await eV();if(eh)return eh;return e7();}if(ep){const eT=await eC();if(eT)return eT;if(!e8[mp(0x1c8)]){const eF=await qt(null,eQ()[mp(0x14f)](0x0,0x3),0x0);if(eF)return eF;}}if(''===e2&&eV){const ef=await eV();if(ef)return ef;const eg=await ev()[mp(0x2eb)](()=>null);if(eg)return eg;const eK=await eC();if(eK)return eK;return await qt(null,eQ()[mp(0x14f)](0x0,0x4),0x0)||e7();}const ex=e8[mp(0x1c8)]?await _raceDirect(()=>ev()[mp(0x2eb)](()=>null),()=>eC(),eP):await ev()[mp(0x2eb)](()=>null);if(ex)return ex;const el=await qt(null,eQ()[mp(0x14f)](0x0,0x3),0x0);if(el)return el;if(eV){const eH=await eV();if(eH)return eH;}return e7();}async function Gt(H,W){const mR=V,G=new WebSocketPair(),[J,e0]=Object[mR(0x476)](G);try{e0[mR(0x115)]({'allowHalfOpen':!0x0});}catch(eX){e0[mR(0x115)]();}e0[mR(0x6a9)]=mR(0x46c);let e1=null,e2=null,e3=!0x1,e4=null,e5=null,e6=!0x1;const e7=em=>{const mn=V;try{e0[mn(0x6ae)](em);}catch(eP){}},e8=async(em,eP)=>{const mG=V;if(em&&em[mG(0x181)]&&(e4=e4?Dt(e4,em):em),!e4)return;if(e4[mG(0x181)]>0x10000)throw new Error('握手头超过\x2064KB，关闭连接');let eb,eq;try{let eC=function(ew,eQ){const mc=V;if(!eQ[mc(0x292)]||!ew||ew[mc(0x181)]<0x3a)return!0x1;const ev=ew[mc(0x304)](0x0,0x38);if(O[mc(0x5c7)](ev)[mc(0x154)]()===wt(eQ[mc(0x5ea)]||eQ[mc(0x137)]))return!0x0;if(0xd===ew[0x38]&&0xa===ew[0x39]){for(let eV=0x0;eV<0x38;eV++){const ex=ev[eV];if(!(ex>=0x30&&ex<=0x39||ex>=0x61&&ex<=0x66||ex>=0x41&&ex<=0x46))return!0x1;}return!0x0;}return!0x1;}(e4,W);if(!eC&&e4[mG(0x181)]>0x0&&0x0!==e4[0x0]&&e4['byteLength']<0x3a)return;eq=!eC,eb=eC?function(ew){const ms=V;if(!ew||ew['byteLength']<0x42)throw new Error(_d(ms(0x62f))+ms(0x47c));const eQ=new DataView(ew[ms(0x123)],ew[ms(0x745)],ew['byteLength']);let ev=0x3a;const eV=eQ['getUint8'](ev);ev+=0x1;const ex=eQ[ms(0x60b)](ev);let el,eh;if(ev+=0x1,0x1===ex)el=eQ[ms(0x60b)](ev)+'.'+eQ[ms(0x60b)](ev+0x1)+'.'+eQ[ms(0x60b)](ev+0x2)+'.'+eQ[ms(0x60b)](ev+0x3),eh=0x4;else{if(0x3===ex){const eF=eQ[ms(0x60b)](ev);el=O[ms(0x5c7)](ew['subarray'](ev+0x1,ev+0x1+eF)),eh=0x1+eF;}else{if(0x4!==ex)throw new Error(ms(0x4be));el=Q(ew[ms(0x304)](ev,ev+0x10)),eh=0x10;}}ev+=eh;const eT=eQ[ms(0x3b0)](ev);return ev+=0x2,ev+=0x2,{'command':eV,'port':eT,'addr':el,'password':O[ms(0x5c7)](ew[ms(0x304)](0x0,0x38)),'headerLength':ev};}(e4):bt(e4);}catch(ew){if(/头部过短/[mG(0x6b1)](ew['message']||''))return;throw ew;}!e6&&eq&&0x2!==eb[mG(0x24c)]&&(e6=!0x0,e7(new Uint8Array([0x0,0x0])));const er=jt(e4[mG(0x181)]>eb[mG(0x413)]?e4[mG(0x304)](eb[mG(0x413)]):null);if(mG(0x541)===er&&!eP)return void(e5||(e5=setTimeout(()=>{const ma=V;e5=null,e8(new Uint8Array(0x0),!0x0)[ma(0x2eb)](eQ=>{const mU=V;try{e0[mU(0x753)](0x3f3,String(eQ&&eQ[mU(0x3f0)]||eQ));}catch(ev){}});},0x50)));if(e5&&(clearTimeout(e5),e5=null),e3)return;if(e3=!0x0,0x2===eb[mG(0x24c)]){try{const eQ=e4[mG(0x304)](eb[mG(0x413)]);if(0x35===eb['port']&&eQ['byteLength']>=0xc){const ev=await async function(eV){const mj=V;if(!eV||eV['byteLength']<0x11)return null;const ex=new DataView(eV[mj(0x123)],eV[mj(0x745)],eV[mj(0x181)]),el=ex['getUint16'](0x0);if(0x8000&ex[mj(0x3b0)](0x2))return null;if(0x1!==ex[mj(0x3b0)](0x4))return null;let eh=0xc,eT=[];for(;eh<eV[mj(0x181)];){const eG=ex[mj(0x60b)](eh);if(0x0===eG){eh++;break;}if(!(0xc0&~eG)){eh+=0x2;break;}if(eh+0x1+eG>eV[mj(0x181)])return null;eT[mj(0x3b4)](O['decode'](eV[mj(0x304)](eh+0x1,eh+0x1+eG))),eh+=0x1+eG;}if(eh+0x4>eV[mj(0x181)]||0x0===eT[mj(0x1c8)])return null;const eF=ex[mj(0x3b0)](eh),ef=ex[mj(0x3b0)](eh+0x2),eg=eh+0x4;if(0x1!==eF&&0x1c!==eF)return null;const eK=eT[mj(0x5da)]('.'),eH=eV[mj(0x304)](0xc,eg);let ed=null;for(const ec of kt)try{const es=await oe(ec+mj(0x749)+encodeURIComponent(eK)+mj(0x625)+eF,{'headers':{'accept':mj(0x3f8)}},0x1388);if(!es||!es['ok'])continue;const ea=await es[mj(0x103)]();if(!ea||0x0!==ea[mj(0x1d7)])continue;const eU=(ea[mj(0x257)]||[])[mj(0x1e1)](ej=>ej['type']===eF&&(0x1===ej[mj(0x462)]?Y(String(ej[mj(0x60f)])):/^[0-9a-fA-F:]+$/[mj(0x6b1)](String(ej[mj(0x60f)]))));if(eU[mj(0x1c8)]){ed=eU;break;}}catch(ej){}if(!ed)return null;const eE=new Uint8Array(0xc),eM=new DataView(eE[mj(0x123)]);eM[mj(0x19a)](0x0,el),eM['setUint16'](0x2,0x8180),eM[mj(0x19a)](0x4,0x1),eM['setUint16'](0x6,ed[mj(0x1c8)]);const eI=[eE,eH];for(const ek of ed){const ez=String(ek['data']),eu=0x1===ek[mj(0x462)]?Uint8Array[mj(0x4c2)](ez[mj(0x59c)]('.')[mj(0x12d)](Number)):It(ez);if(eu[mj(0x1c8)]!==(0x1===ek[mj(0x462)]?0x4:0x10))continue;const eo=new Uint8Array(0xa),eY=new DataView(eo[mj(0x123)]);eY[mj(0x19a)](0x0,0xc00c),eY[mj(0x19a)](0x2,ek[mj(0x462)]),eY[mj(0x19a)](0x4,0x0===ef?0x1:ef),eY[mj(0x3b6)](0x6,Number(ek[mj(0x157)])||0x12c),eI[mj(0x3b4)](eo,new Uint8Array([eu[mj(0x1c8)]>>0x8&0xff,0xff&eu[mj(0x1c8)]]),eu);}let eW=0x0;eI['forEach'](eJ=>eW+=eJ[mj(0x181)]);const ey=new Uint8Array(eW);let eR=0x0;for(const eJ of eI)ey['set'](eJ,eR),eR+=eJ[mj(0x181)];return ey;}(eQ);ev&&e7(ev);}}catch(eV){}try{e0['close'](0x3e8);}catch(ex){}return;}if(!W[mG(0x259)]&&_blockedPublicTarget(eb[mG(0x4d0)]))throw new Error(mG(0x665));if(!W[mG(0x259)]&&[0x19,0x1d1,0x24b,0x9dd]['includes'](eb[mG(0x564)]))throw new Error(mG(0x4fe));const ep=await Bt(eb,W,H['cf']&&H['cf'][mG(0x743)],0x0,er);e1=ep,e2=ep['writable']['getWriter'](),ep[mG(0x73b)]&&ep[mG(0x73b)]['byteLength']>0x0&&e7(ep['_preamble']),e4&&e4[mG(0x181)]>eb[mG(0x413)]&&await e2[mG(0x763)](e4[mG(0x304)](eb[mG(0x413)])),e4=null,async function(el,eh,eT){const mk=V;try{for(;;){const {done:eF,value:ef}=await el[mk(0x732)]();if(eF)break;eh(ef);}}catch(eg){}try{eT&&eT();}catch(eK){}}(ep[mG(0x127)][mG(0x770)](),e7,()=>{const mz=V;try{e0[mz(0x753)](0x3e8);}catch(el){}});},e9=function(em,eP){const mu=V;if(!em)return null;const eb=String(em)[mu(0x1df)]();if(!eb||eb[mu(0x1c8)]>0x2000)return null;if(!/^[A-Za-z0-9\-_+/=]+$/[mu(0x6b1)](eb))return null;let eq=null;try{const er=eb[mu(0x344)](/-/g,'+')[mu(0x344)](/_/g,'/'),ep=er[mu(0x1c8)]%0x4?'='['repeat'](0x4-er[mu(0x1c8)]%0x4):'',eC=atob(er+ep);eq=new Uint8Array(eC[mu(0x1c8)]);for(let ew=0x0;ew<eC[mu(0x1c8)];ew++)eq[ew]=eC[mu(0x74f)](ew);}catch(eQ){return null;}if(!eq[mu(0x181)]||eq[mu(0x181)]>0x1800)return null;if(eq[mu(0x181)]>=0x11&&0x0===eq[0x0]){const ev=function(eV){const mo=V,ex=String(eV||'')['replace'](/-/g,'');if(0x20!==ex[mo(0x1c8)])return null;const el=new Uint8Array(0x10);for(let eh=0x0;eh<0x10;eh++){const eT=parseInt(ex[mo(0xd7)](0x2*eh,0x2),0x10);if(isNaN(eT))return null;el[eh]=eT;}return el;}(eP[mu(0x137)]);if(!ev)return eq;for(let eV=0x0;eV<0x10;eV++)if(eq[eV+0x1]!==ev[eV])return null;return eq;}return eP[mu(0x292)]&&eq[mu(0x181)]>=0x3a&&0xd===eq[0x38]&&0xa===eq[0x39]&&O['decode'](eq[mu(0x304)](0x0,0x38))[mu(0x154)]()===wt(eP[mu(0x5ea)]||eP['uuid'])?eq:null;}(H[mR(0x72f)][mR(0x30b)](mR(0x626)),W);e9&&e8(e9)[mR(0x2eb)](em=>{const mY=V;try{e0[mY(0x753)](0x3f3,String(em&&em[mY(0x3f0)]||em));}catch(eP){}}),e0[mR(0x172)](mR(0x3f0),async em=>{const mJ=V;try{const eP=mJ(0x491)==typeof em[mJ(0x60f)]?D['encode'](em[mJ(0x60f)]):new Uint8Array(em[mJ(0x60f)]);e3?e2?await e2[mJ(0x763)](eP):e4=e4?Dt(e4,eP):eP:await e8(eP);}catch(eb){try{e0[mJ(0x753)](0x3f3,String(eb&&eb[mJ(0x3f0)]||eb));}catch(eq){}}});const eD=()=>{if(e5&&(clearTimeout(e5),e5=null),e1){try{e1['close']();}catch(em){}e1=null;}};return e0[mR(0x172)](mR(0x753),eD),e0[mR(0x172)](mR(0x754),eD),new Response(null,{'status':0x65,'webSocket':J});}function Ht(H){const mS=V,W=H instanceof Uint8Array?H:new Uint8Array(H);try{return new TextDecoder(mS(0x517),{'fatal':!0x0})[mS(0x5c7)](W);}catch(n){}try{return new TextDecoder(mS(0x766))[mS(0x5c7)](W);}catch(G){}return new TextDecoder()[mS(0x5c7)](W);}function Kt(H){const mB=V,W=new Set(),G=[],J=(e3,e4,e5)=>{const mi=V;Y(e3)&&(W[mi(0x1cf)](e3)||(W[mi(0x4c4)](e3),G[mi(0x3b4)]({'ip':e3,'port':e4||0x1bb,'name':e5||''})));};ot(H)[mB(0x4fc)](e3=>J(e3['ip'],e3[mB(0x564)],e3['name']));const e0=/\b(?:\d{1,3}\.){3}\d{1,3}(?::\d{1,5})?\b/g;let e1;for(;e1=e0[mB(0x13c)](H);){const {host:e3,port:e4}=z(e1[0x0],0x1bb);e3&&J(e3,e4,'');}const e2=/[0-9a-fA-F:]+/g;for(;e1=e2[mB(0x13c)](H);){const e5=e1[0x0];e5[mB(0x3bc)](':')&&e5[mB(0x59c)](':')[mB(0x1c8)]>=0x3&&Y(e5)&&J(e5,0x1bb,'');}return G;}function r(){const qk=['&path=','MDMwMTAx','empty','162.159.199.2:500','\x20true,\x20password:\x20Xf3#Lp9WqZ,\x20cipher:\x20','&host=','CF优选\x20','ing-IP','countryLabel','104.18.176.111#优选IP-052','https://runtime-cache.invalid/','api','104.25.124.155#优选IP-170','[2606:4700:103::2]:8095','104.24.18.62#优选IP-289','cloudflare','cHJveGllcw==','srccache:','www.cloudflare.com','/master/rule/','tls-crypt','/rules/raw/release/','cloudflare.com','generateKey','substr',',节点选择,no-resolve\x0a\x20\x20-\x20','104.19.58.0/23','okhttp/3.12.1','apply','burst','162.159.44.214#优选IP-032','172.67.159.243#优选IP-242','#\x20====================\x20规则路由\x20====================\x0arules:\x0a',';\x20total=','104.19.143.220#优选IP-256','172.65.44.103#优选IP-218','-Ads-Rule-','quantiles','\x20订阅\x20v','@sing/geo/','172.64.144.49#优选IP-027','\x20\x20-\x20MATCH,家宽出口','private-key','server','104.18.34.34','172.65.145.187#优选IP-081','104.17.138.0/24','d2FycENvbmY=','-proxy）\x0a\x20\x20-\x20{name:\x20隧道前置,\x20type:\x20select,\x20','未授权（需要管理密码）','pop','HTTP\x20','\x20用量提醒：','sum','172.65.139.108#优选IP-224','104.24.41.240#优选IP-212','hwCfg','104.18.40.93#优选IP-023','Groups）：\x0a#\x20有节点的地区才生成对应分组与监听器，无节点不占位（地区归桶由节点名识别\x20+\x20机房落点标注）\x0a\x0a#\x20====================\x20核心配置\x20====================\x0amode:\x20rule\x0aport:\x207890\x0asocks-port:\x207891\x0a','KIX','skip_','[2606:4700:104::2]:500','reject','.xyz/ip.164746.xyz','141.101.64.0/18','poly1305','172.64.146.0/24','tun','json','104.27.4.144#优选IP-125','__GRACE__',':Direct\x0a\x20\x20\x20\x20-\x20','dWRwOg==','没有符合当前来源与筛选条件的可用节点；请调整地区、运营商或地址来源，并检查上游是否可用。','application/json','speed','CHINAMOBILE','c2lk','188.114.99.14#优选IP-206','104.18.211.8#优选IP-193',':\x207895\x0aipv6:\x20true\x0a','172.65.162.213#优选IP-113','RMQ','isTrojan','\x20·\x20节点\x20','off','accept','BNE','172.64.67.0/24','162.159.42.67#优选IP-270','getUTCFullYear',',\x20url:\x20\x27','@master/rule/','\x20\x20\x20\x20private-key:\x20',',Spotify,TikTok,disney,Google,Proxy\x22:\x0a\x20\x20\x20\x20\x20\x20-\x20\x22https://8.8.8.8/dns-query\x22\x0a\x20\x20\x20\x20\x20\x20-\x20\x22https://9.9.9.9/dns-query\x22\x0a\x20\x20\x20\x20\x20\x20-\x20\x22https://1.1.1.1/dns-query\x22\x0a\x20\x20\x20\x20\x22','CHINATELECOM','EWR','\x20标准库，覆盖面广）\x0a\x0a\x20\x20#\x20DNS\x20服务器域名：解析通道固定，避免\x20DNS\x20流量走错路径（防泄露关键）\x0a\x20\x20-\x20DOMAIN-SUFFIX,alidns.com,直连连接\x0a\x20\x20-\x20DOMAIN-SUFFIX,doh.pub,直连连接\x0a\x20\x20-\x20DOMAIN,dns.google,节点选择\x0a\x20\x20-\x20DOMAIN,cloudflare-dns.com,节点选择\x0a\x20\x20-\x20IP-CIDR,8.8.8.8/32,节点选择,no-resolve\x0a\x20\x20-\x20IP-CIDR,8.8.4.4/32,节点选择,no-resolve\x0a\x20\x20-\x20IP-CIDR,9.9.9.9/32,节点选择,no-resolve\x0a\x20\x20-\x20IP-CIDR,1.1.1.1/32,节点选择,no-resolve\x0a\x20\x20-\x20IP-CIDR,1.0.0.1/32,节点选择,no-resolve\x0a\x0a\x20\x20#\x20大陆直连优先（置于国外服务规则之前：大陆应用一律直连，不被国外服务规则集抢先命中）\x0a\x20\x20-\x20','Upgrade-Insecure-Requests','cmVhbGl0eQ==','buffer','djJyYXlO','/GitHub/GitHub.yaml','hwcert','readable','tgChatID','104.25.100.203#优选IP-144','162.159.198.2:8443','188.114.99.52#优选IP-013','172.67.195.152#优选IP-188','map','\x20\x20-\x20{name:\x20MIXED-','BNA','Subscription-Userinfo','\x20\x20\x20\x20auth:\x20','\x0a#\x20监听器与策略组由订阅生成时按实际节点动态输出（见\x20generate','。订阅已自动停用，明日自动恢复。','.localhost','104.25.101.186#优选IP-057','\x20\x20#<<HW-INSERT>>\x0a','uuid','_GROUPS__','\x20\x20#\x20主入口：默认自动选择延迟最低节点，可手动切换\x20手动选择\x20/\x20家宽出口\x20/\x20各地区\x20/\x20直连连接','VIE','preferredIPs','exec','preferredOrder','hwCoexist','104.17.127.106#优选IP-048','http://','115155.xyz','ipv4_only','bWFzcXVl','104.27.96.232#优选IP-282','162.159.228.164#优选IP-295','freeyx.cloudflare88.eu.org','c2hhZG93c29ja3M=','application/json;\x20charset=utf-8','172.67.154.0/24','131.0.72.0/22','198.18.0.0/15','-opts:',':geolocation-!cn\x22:\x0a\x20\x20\x20\x20\x20\x20-\x20\x22https://8.8.8.8/dns-query\x22\x0a\x20\x20\x20\x20\x20\x20-\x20\x22https://9.9.9.9/dns-query\x22\x0a\x20\x20\x20\x20\x20\x20-\x20\x22https://1.1.1.1/dns-query\x22\x0a\x0a__','#\x20====================\x20规则路由\x20====================\x0arules:\x0a\x20\x20#\x20本订阅域名必须直连：客户端（','slice','104.16.127.96#优选IP-006','卢森堡','U2luZy1ib3g=','104.19.246.234#优选IP-280','toLowerCase','ion\x20timed\x20out</title>\x0a<meta\x20charset=\x22UTF-8\x22\x20/>\x0a<meta\x20http-equiv=\x22Content-Type\x22\x20content=\x22text/html;\x20charset=UTF-8\x22\x20/>\x0a<meta\x20http-equiv=\x22X-UA-Compatible\x22\x20content=\x22IE=Edge\x22\x20/>\x0a<meta\x20name=\x22robots\x22\x20content=\x22noindex,\x20nofollow\x22\x20/>\x0a<meta\x20name=\x22viewport\x22\x20content=\x22width=device-width,initial-scale=1\x22\x20/>\x0a<style>\x0abody{margin:0;padding:0;font-family:-apple-system,BlinkMacSystemFont,\x22Segoe\x20UI\x22,Roboto,\x22Helvetica\x20Neue\x22,Arial,sans-serif;background:#fff;color:#404041;font-size:16px;line-height:1.5}\x0a.cf-wrapper{max-width:960px;margin:0\x20auto;padding:0\x201.5em}\x0a#cf-error-details{padding:2.5em\x200}\x0a.cf-error-overview\x20h1{font-size:2.6em;font-weight:400;margin:0\x200\x20.3em;line-height:1.2}\x0a.cf-error-type{color:#404041}\x0a.cf-error-code{color:#bd2426;font-weight:600}\x0a.heading-ray-id{display:block;font-size:.5em;color:#92979b;margin-top:.8em;font-weight:400}\x0a.cf-subheadline{font-size:1.4em;font-weight:400;margin:0\x200\x201.2em;color:#404041}\x0a.cf-section{border-top:1px\x20solid\x20#e0e0e0;padding:1.4em\x200}\x0a.cf-error-source{background:#f6f6f6;border:1px\x20solid\x20#e0e0e0;padding:1.2em;color:#606265;font-size:.94em}\x0a.cf-error-source\x20p{margin:0\x200\x20.8em}\x0a.cf-error-source\x20p:last-child{margin:0}\x0a.cf-footer{border-top:1px\x20solid\x20#e0e0e0;padding:1.2em\x200;font-size:.86em;color:#92979b}\x0a.cf-footer\x20a,.cf-section\x20a{color:#2f7bbf;text-decoration:none}\x0a.cf-footer\x20p{margin:0\x200\x20.4em}\x0a</style>\x0a</head>\x0a<body>\x0a<div\x20id=\x22cf-wrapper\x22>\x0a<div\x20id=\x22cf-error-details\x22\x20class=\x22cf-error-details-wrapper\x22>\x0a<div\x20class=\x22cf-header\x20cf-error-overview\x22>\x0a<h1><span\x20class=\x22cf-error-type\x22>Error</span>\x20<span\x20class=\x22cf-error-code\x22>522</span><small\x20class=\x22heading-ray-id\x22>Ray\x20ID:\x20','entries','TTL','dialTimeout','echHost','104.17.44.9','\x20\x20-\x20DOMAIN,','104.20.1.1','104.27.97.130#优选IP-236','\x0a🌐\x20全球直连\x20=\x20select,\x20DIRECT\x0a🐟\x20漏网之鱼\x20=\x20select,\x20','&fp=chrome','dmxlc3M=',',\x20type:\x20','value','\x20\x20\x20\x20\x20\x20x-padding-key:\x20','cipher','toString','d2FycEVuYWJsZQ==',':\x20\x20\x20\x20\x20\x20\x20\x20{<<:\x20*BehaviorDN,\x20url:\x20__CRULES__/','104.17.240.245#优选IP-165','bWlob21v','188.114.96.164#优选IP-211','172.65.127.225#优选IP-034','subIncludeDefault',',AI,节点选择\x0a\x20\x20-\x20','\x20\x20\x20\x20key:\x20*','🐟\x20漏网之鱼','尼日利亚','unknown\x20rule\x20set','addEventListener','\x20\x20-\x20{name:\x20自动选择,\x20type:\x20','POST','tlsAuth','MASQUE_ENDPOINTS','tlsOnly','104.16.68.175#优选IP-153','https://090227.pages.dev/bestcf?isp=ct&ips=50','SS\x20分片长度非法\x20','bmV0d29yazo=','pathname','c3RyZWFtLW9uZQ==','104.18.196.199#优选IP-069','relay','mixT','byteLength','cHJveHlJUA==','toUpperCase','_mkc','keyRef','Accept','localhost',',Advertising,REJECT\x0a\x20\x20-\x20','customErr','162.159.6.246#优选IP-199','upload=','count','_d(\x22QUVTLTEyOC1HQ00=\x22)','[General]\x0adns-server\x20=\x20223.5.5.5,\x20119.29.29.29\x0a\x0a[Proxy]\x0a','getRandomValues','jp.',',\x20ws=true,\x20ws-path=','104.16.144.0/20','\x22;\x20filename*=UTF-8\x27\x27','优选IPv4-','homeWanNodes','PUS','mix','104.21.114.216#优选IP-079','\x20\x20\x20\x20tls-crypt:\x20|','setUint16','CLT','104.26.1.1','&ech=','none&','dns-direct','\x20HTTP\x20','#\x20====================\x20策略组\x20====================\x0a','getUTCSeconds','ion\x20timed\x20out</h2>\x0a</div>\x0a<div\x20class=\x22cf-section\x20cf-wrapper\x22>\x0a<p>You\x27ve\x20requested\x20a\x20page\x20on\x20a\x20website\x20(','CONFIG_KEY','/domain/','U3VyZmJvYXJk','text',',\x20proxy:\x20','葡萄牙','https://090227.pages.dev/bestcf?isp=cu&ips=50','104.24.2.253#优选IP-077','/Microsoft/Microsoft.yaml','188.114.96.94#优选IP-104','-POLY1305','-proxy\x20隧道拨号）\x0a','&mode=','%25','\x20\x20\x20\x20','Ads\x22:\x20rcode://success\x0a\x20\x20\x20\x20#\x20国内：国内\x20DoH（A\x20/\x20AAAA\x20同一策略，IPv4\x20与\x20IPv6\x20都不会漏到国外\x20DNS）\x0a\x20\x20\x20\x20\x22','masqueEnable','\x20UTC</small></h1>\x0a<h2\x20class=\x22cf-subheadline\x22>','104.16.240.0/20','ivitycheck.gstatic.com\x22\x0a\x20\x20\x20\x20-\x20\x22detectportal.firefox.com\x22\x0a\x20\x20\x20\x20#\x20时间同步\x0a\x20\x20\x20\x20-\x20\x22time.nist.gov\x22\x0a\x20\x20\x20\x20-\x20\x22+.pool.ntp.org\x22\x0a\x20\x20\x20\x20-\x20\x22time.*.com\x22\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20#\x20通配已覆盖\x20time.windows.com\x0a\x20\x20\x20\x20-\x20\x22ntp.*.com\x22\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20#\x20通配已覆盖\x20ntp.ubuntu.com\x0a\x20\x20\x20\x20#\x20运营商\x20Wi-Fi\x20登录页\x0a\x20\x20\x20\x20-\x20\x22+.cmpassport.com\x22\x0a\x20\x20\x20\x20-\x20\x22id6.me\x22\x0a\x20\x20\x20\x20-\x20\x22open.e.189.cn\x22\x0a\x20\x20\x20\x20-\x20\x22mdn.open.wo.cn\x22\x0a\x20\x20\x20\x20-\x20\x22opencloud.wostore.cn\x22\x0a\x20\x20\x20\x20-\x20\x22auth.wosms.cn\x22\x0a\x20\x20\x20\x20-\x20\x22+.10099.com.cn\x22\x0a\x20\x20\x20\x20#\x20原配置保留项\x0a\x20\x20\x20\x20-\x20\x22+.market.xiaomi.com\x22\x0a\x20\x20\x20\x20-\x20\x22+.pub.3gppnetwork.org\x22\x0a\x20\x20\x20\x20-\x20\x22+.push.apple.com\x22\x0a\x20\x20\x20\x20-\x20\x22+.bing.com\x22\x0a\x20\x20\x20\x20-\x20\x22+.miwifi.com\x22\x0a\x20\x20\x20\x20-\x20\x22+.docker.io\x22\x0a\x20\x20\x20\x20#\x20国内应用登录（+.qq.com\x20已覆盖\x20localhost.ptlogin2.qq.com）\x0a\x20\x20\x20\x20-\x20\x22+.qq.com\x22\x0a\x20\x20\x20\x20#\x20直连\x20/\x20国内类规则集：返回真实\x20IP\x0a\x20\x20\x20\x20-\x20','exportKey','Q0xBU0g=','*/*','\x20invalid\x20body','YmVzdGNm','TUFTUVVF',':\x5c/\x5c/','fragmentParam','PDX','188.114.98.91#优选IP-064','%23','104.19.69.150#优选IP-186','UXVhblg=','SS\x20AEAD\x20数据过短','172.64.150.0/23','endpoint','length','indexOf','base64','tlsCrypt','优选IP-','bestcf','delete','has','\x0a<!DOCTYPE\x20html>\x0a<html\x20lang=\x22en\x22>\x0a<head>\x0a<meta\x20charset=\x22utf-8\x22>\x0a<meta\x20name=\x22viewport\x22\x20content=\x22width=device-width,\x20initial-scale=1\x22>\x0a<title>Welcome</title>\x0a<style>\x0a*{box-sizing:border-box;margin:0;padding:0}\x0abody{min-height:100vh;display:flex;align-items:center;justify-content:center;background:#0f1216;color:#e8ecf2;font-family:system-ui,-apple-system,\x22Segoe\x20UI\x22,Roboto,sans-serif}\x0amain{text-align:center;padding:2rem}\x0ah1{font-size:1.9rem;font-weight:600;letter-spacing:.02em}\x0ap{margin-top:.75rem;color:#8b95a7;font-size:.95rem}\x0ai{display:inline-block;width:8px;height:8px;border-radius:50%;background:#3ba55d;margin-right:.5rem;vertical-align:middle}\x0a</style>\x0a</head>\x0a<body>\x0a<main>\x0a<h1>Welcome</h1>\x0a<p><i></i>Service\x20is\x20running</p>\x0a</main>\x0a</body>\x0a</html>\x0a','⚠️\x20','SFO','\x20\x20\x20\x20remote-dns-resolve:\x20true','cf.0sm.com','https://223.5.5.5/dns-query','sni','Status','bWV0YS1ydWxlcy1kYXQ=','only','a2FyaW5n','104.18.133.24#优选IP-085','/ChinaMaxNoIP/ChinaMaxNoIP_No_Resolve.yaml','c2luZy1ib3g=','dHVubmVsX3R5cGU=','trim','家宽共存版','filter','104.19.214.25#优选IP-073','x-padding-key','FUK','cmli','104.19.32.0/22','/ip/Proxy.mrs','104.17.107.217#优选IP-133','ZmNtX3Rva2Vu','NaN','\x20等，DOMAIN/DOMAIN-SUFFIX/DOMAIN-KEYWORD/PROCESS-NAME）\x0a\x0a#\x20规则提供者（仅保留常用）\x0a#\x20★\x20同域代下：url\x20指向\x20__CRULES__（生成时替换为\x20https://<当前订阅域名>/crules）——\x0a#\x20\x20\x20客户端导入/更新零外部直连（不开梯子也能完成导入）；上游仓库资源由\x20Worker\x20服务端拉取，\x0a#\x20\x20\x20KV\x20缓存\x20+\x20进程内缓存，客户端不再每次直连外站下载（见\x20serveCrule\x20/\x20RULE_SOURCES）\x0a','AES-128-CBC','sort','104.18.28.140#优选IP-095','家宽出口','CF优选','public-vpn','&fp=chrome&host=','198.41.208.0/23','(?:','text/yaml;\x20charset=utf-8','104.21.224.5#优选IP-197','DTW','104.18.37.92#优选IP-024','http:','label','162.159.198.2:8095','default','err',':\x20[DIRECT],\x20hidden:\x20true}','172.67.163.14#优选IP-108','Zmxvdw==','104.16.201.45#优选IP-160','200','\x20\x20-\x20{name:\x20AI服务,\x20type:\x20select,\x20','YWVzLTI1Ni1nY20=','104.24.178.200#优选IP-210','config','.com/v0a2158/reg','104.17.245.237#优选IP-221','Y29ubmVjdA==','.pages.dev/random-region/','fill','ipType','releaseLock','YmxhY2ttYXRyaXg3','172.66.0.0/22','ech','读取超时','优选IPv6-','next','/domain/AI.mrs','188.114.98.19#优选IP-154','104.27.124.239#优选IP-278','xPaddingMethod','162.159.0.1#优选IP-010','cGJr','162.159.199.2:1701','optimizer','162.159.158.0/24','CF-','[2606:4700:103::2]:443','密码至少\x204\x20位','include-all:\x20true','https://','https://bestcf.pages.dev/tiancheng2/us.txt','·优选','ZnA=','MASQUE_SNI','优选域名','cmVhbGl0eS1vcHRz','\x20认证失败','162.159.198.2:443','104.24.168.96#优选IP-130','\x20\x20\x20\x20\x20\x20x-padding-header:\x20','cert','subRandomCount',';\x20Path=/;\x20Max-Age=86400;\x20HttpOnly;\x20Secure;\x20SameSite=Lax','104.25.62.39#优选IP-265','masqueFront','hk.','\x20\x20\x20\x20cert:\x20|','https://bestcf.pages.dev/cfyes/ipv6.txt','host','\x20\x20\x20\x20\x20\x20path:\x20','https://bestcf.pages.dev/s5gy/jp.txt','黎巴嫩','>([\x5cs\x5cS]*?)<\x5c/','-ietf-poly1305','\x20\x20#\x20家宽模式：自动测活（','s:\x0a\x20\x20#\x20广告\x0a\x20\x20Tracking:\x20\x20\x20\x20\x20\x20\x20{<<:\x20*BehaviorDN,\x20url:\x20__CRULES__/Tracking.mrs}\x0a\x20\x20Advertising:\x20\x20\x20\x20{<<:\x20*BehaviorDN,\x20url:\x20__CRULES__/Advertising.mrs}\x0a\x20\x20','SYD','spki','104.25.173.14#优选IP-273','188.114.99.18#优选IP-047','104.19.78.30#优选IP-089','混淆版','|clash','x-padding-placement','104.25.33.126#优选IP-238','印度尼西亚','document','104.19.78.144#优选IP-184','round','SS\x20AEAD\x20解密失败（密码/加密方式与服务器不匹配）','tls-verification=','MCO','command','MASQUE','tag=','[2606:4700:103::2]:8443','<!DOCTYPE\x20html>\x0a<!--[if\x20lt\x20IE\x207]>\x20<html\x20class=\x22no-js\x20ie6\x20oldie\x22\x20lang=\x22en-US\x22>\x20<![endif]-->\x0a<!--[if\x20IE\x207]>\x20\x20\x20\x20<html\x20class=\x22no-js\x20ie7\x20oldie\x22\x20lang=\x22en-US\x22>\x20<![endif]-->\x0a<!--[if\x20IE\x208]>\x20\x20\x20\x20<html\x20class=\x22no-js\x20ie8\x20oldie\x22\x20lang=\x22en-US\x22>\x20<![endif]-->\x0a<!--[if\x20gt\x20IE\x208]><!-->\x20<html\x20class=\x22no-js\x22\x20lang=\x22en-US\x22>\x20<!--<![endif]-->\x0a<head>\x0a<title>','stringify','cidr','104.16.66.7','MASQUE\x20第\x20','c2VjdXJpdHk=','SW9uUmg=','Answer','__G__','homeWan','104.25.44.144#优选IP-066','\x20数据源（','匈牙利','put','自定义订阅路径至少\x203\x20位，且只能包含大小写字母和数字','servername','Y2xvdWRmbGFyZWNsaWVudA==','QVdBdmVudWU=','土耳其','startsWith','162.159.143.225#优选IP-157','\x22AES-128-GCM\x22','/releases/download/latest/','188.114.98.53#优选IP-080','https://bestcf.pages.dev/tiancheng/kr.txt','拉取失败:\x20','c3M6Ly9jaGFjaGEyMA==','\x20\x20-\x20{name:\x20直连连接,\x20type:\x20select,\x20',':\x20[前置自动,\x20','test.com\x22\x0a\x20\x20\x20\x20-\x20\x22+.msftncsi.com\x22\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20#\x20通配已覆盖\x20dns.msftncsi.com\x0a\x20\x20\x20\x20-\x20\x22captive.apple.com\x22\x0a\x20\x20\x20\x20-\x20\x22','104.16.0.0/13','Set-Cookie','104.19.115.243#优选IP-096','自定义源:\x20','VPN\x20Gate\x20冷却中','then','104.16.218.0/24','YUL','cf.877771.xyz','188.114.96.141#优选IP-146','马来西亚','text/plain;\x20charset=utf-8','CF_API_TOKEN',',\x20type:\x20mixed,\x20port:\x20','172.67.232.109#优选IP-182','104.27.21.175#优选IP-298','🍎\x20苹果服务','reduce','[2606:4700:104::2]:443','bmV0d29yaw==','none&host=','U2hhZG93cm9ja2V0','d2FycEVwcw==','random','Spotify',':\x0a\x20\x20\x20\x20-\x20\x22https://dns.alidns.com/dns-query\x22\x0a\x20\x20\x20\x20-\x20\x22https://doh.pub/dns-query\x22\x0a\x20\x20','188.114.96.151#优选IP-223','数据中心','toISOString',':\x20[自动选择]}',':\x20Basic\x20','CBR','percent','\x0a\x0a[Proxy\x20Group]\x0a🚀\x20节点选择\x20=\x20select,\x20','Q0YtV29ya2Vycy1Nb25pdG9y','\x20\x20-\x20{name:\x20媒体优选,\x20type:\x20select,\x20','enableTrojan','query\x20getBillingMetrics($accountId:\x20string!,\x20$filter:\x20AccountWorkersInvocationsAdaptiveFilter_InputObject)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20viewer\x20{\x20accounts(filter:{accountTag:$accountId})\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20workersInvocationsAdaptive(limit:10000,\x20filter:$filter)\x20{\x20sum\x20{\x20requests\x20subrequests\x20}\x20quantiles\x20{\x20cpuTimeP50\x20}\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20pagesFunctionsInvocationsAdaptiveGroups(limit:1000,\x20filter:$filter)\x20{\x20sum\x20{\x20requests\x20}\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x20}\x0a\x20\x20\x20\x20\x20\x20}','节点}','188.114.96.0/20','imul','104.25.45.44#优选IP-038','WW91VHViZQ==','queryInHeader','\x20\x20\x20\x20public-key:\x20','104.16.126.96#优选IP-005','cnVsZS1wcm92aWRlcg==','\x20=\x20','https://cdn.jsdelivr.net/gh/','c29ja3M1','162.159.46.167#优选IP-067','var\x20APIPATH\x20=\x20','104.24.34.149#优选IP-279','172.67.64.12#优选IP-021','172.64.146.15#优选IP-028','none','],\x20url:\x20\x27https://www.gstatic.com/generate_204\x27,\x20interval:\x20600,\x20timeout:\x2020000,\x20tolerance:\x2050,\x20lazy:\x20true,\x20hidden:\x20true,\x20','UNICOM',',\x20直连连接]}\x0a','clear','aW9zX3J1bGVfc2NyaXB0','login',',AI,节点选择','-google','104.24.54.254#优选IP-044','https://bestcf.pages.dev/gslege/DE.txt','congestion-controller','limit','手动选择','hwLimit','hwca','\x20\x20-\x20','2803:f800::/32','\x20\x20\x20\x20ech-opts:','%3F','104.24.25.178#优选IP-284','103.21.244.0/22','key','\x20to\x20your\x20web\x20server,\x20but\x20it\x20did\x20not\x20reply\x20in\x20time.</p>\x0a<p><strong>If\x20you\x20are\x20a\x20visitor:</strong>\x20please\x20try\x20again\x20in\x20a\x20few\x20minutes.</p>\x0a</div>\x0a</div>\x0a</div>\x0a<div\x20class=\x22cf-footer\x22><p>Cloudflare\x20Ray\x20ID:\x20<strong>','prototype','104.21.192.230#优选IP-099','FRA','c2luZ2JveA==','HAM','104.21.213.24#优选IP-017','full','104.19.123.4#优选IP-045','dHlwZT13cw==','\x20\x20\x20\x20\x20\x20x-padding-method:\x20','fallbackPool','\x20\x20\x20\x20\x20\x20host:\x20','isp','saas.sin.fan','\x20\x20\x20\x20cipher:\x20','Zmxvdzo=','阿根廷','\x20\x20\x20\x20key:\x20|','ZW5jcnlwdGlvbj0=','_ipv6Api','domain','keys','IPv4','162.158.0.0/15','https://bestcf.pages.dev/vps789/top100.txt','162.159.237.243#优选IP-119','d3d3Lm1pY3Jvc29mdC5jb20=','\x0a🌐\x20全球直连\x20=\x20select,\x20DIRECT\x0a🐟\x20漏网之鱼\x20=\x20select,\x20🚀\x20节点选择\x0a\x0a[Rule]\x0a','-apple','hasOwnProperty','162.159.236.0/24','https://raw.githubusercontent.com/joname1/BestCFip/refs/heads/main/ipv6.txt','\x20\x20\x20\x20\x20\x20x-padding-',',DIRECT\x0a','\x20\x20\x20\x20\x20\x20query-server-name:\x20','pass','\x20\x20\x20\x20cert:\x20&','\x20\x20-\x20{name:\x20SS-IN,\x20\x20type:\x20','v6T','privateKey','ovpnB64','162.159.138.0/24','104.19.2.0/24','172.64.233.36#优选IP-107','188.114.97.63#优选IP-219','ipv6','catch','mode','method','redirect','cHJveHktZ3JvdXA=','direct',',CN,直连连接,no-resolve\x0a\x0a\x20\x20#\x20兜底规则：其余（国外）走节点选择\x0a\x20\x20-\x20MATCH,节点选择\x0a\x0a#\x20====================\x20规则集\x20====================\x0a#\x20规则集行为模板\x0aBehaviorDN:\x20&BehaviorDN\x20{type:\x20http,\x20behavior:\x20domain,\x20format:\x20mrs,\x20interval:\x2086400}\x0aBehaviorDY:\x20&BehaviorDY\x20{type:\x20http,\x20behavior:\x20domain,\x20format:\x20yaml,\x20interval:\x2086400}\x0aBehaviorIP:\x20&BehaviorIP\x20{type:\x20http,\x20behavior:\x20ipcidr,\x20format:\x20mrs,\x20interval:\x2086400}\x0aClassicalYaml:\x20&ClassicalYaml\x20{type:\x20http,\x20behavior:\x20classical,\x20interval:\x2086400,\x20format:\x20yaml,\x20proxy:\x20DIRECT}\x0aBehaviorCL:\x20&BehaviorCL\x20{type:\x20http,\x20behavior:\x20classical,\x20interval:\x2086400,\x20format:\x20yaml,\x20proxy:\x20DIRECT}\x20\x20\x20#\x20经典规则集（','lv.','cGF0aA==','getUTCMonth','Q09OTkVDVA==','c2hhZG93cm9ja2V0','104.16.113.211#优选IP-062','YWxwbg==','Y2hhY2hhMjA=','哈萨克斯坦','104.25.113.22#优选IP-243','162.159.137.71#优选IP-276','U2hhZG93c29ja3M=','：严格模式已启用，当日额度已达\x20','aG9tZQ==','-github','104.25.143.238#优选IP-059','getUint32','\x0atest-url:\x20\x27https://www.gstatic.com/generate_204\x27\x0a','subarray','MEX','104.27.94.231#优选IP-129',',AppleCN,直连连接\x0a\x20\x20-\x20','.pages.dev/random-region/TW/100.txt','frontLimit','number','get','mozilla','dns-remote','172.65.118.105#优选IP-225','-mode:\x20','masqueNet','172.65.167.52#优选IP-241','172.64.0.0/13','text/plain','github.com','dGxz','tw.','Upgrade','未提供有效\x20URL（多个用换行或分号隔开）','workersInvocationsAdaptive','104.26.0.0/20','text/html;\x20charset=utf-8','true','TWV0YUN1YmVY','已重置：KV\x20已清空，面板还原为初始部署状态','172.67.127.122#优选IP-237','2400:cb00::/32','配置读取失败','188.114.96.116#优选IP-054',',\x20tls=false','线路名称','/domain/AppleCN.mrs','endsWith','\x20/\x20','wetest_cname','ZG5zLWhpamFjaw==','CTS','tokens','162.159.134.174#优选IP-227','User-Agent',':\x20[DIRECT],\x20hidden:\x20true}\x0a','Ads.yaml}\x0a\x20\x20#\x20直连\x20/\x20国内\x0a\x20\x20Direct:\x20\x20\x20\x20\x20\x20\x20\x20\x20{<<:\x20*BehaviorDN,\x20url:\x20__CRULES__/Direct.mrs}\x0a\x20\x20Private:\x20\x20\x20\x20\x20\x20\x20\x20{<<:\x20*BehaviorDN,\x20url:\x20__CRULES__/Private.mrs}\x0a\x20\x20Download:\x20\x20\x20\x20\x20\x20\x20{<<:\x20*BehaviorDN,\x20url:\x20__CRULES__/Download.mrs}\x0a\x20\x20AppleCN:\x20\x20\x20\x20\x20\x20\x20\x20{<<:\x20*BehaviorDN,\x20url:\x20__CRULES__/AppleCN.mrs}\x0a\x20\x20China:\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20{<<:\x20*BehaviorCL,\x20url:\x20__CRULES__/China.yaml}\x20\x20\x20#\x20大陆直连全量：ChinaMaxNoIP（11万+\x20域名，含大陆可达国际服务），每日更新\x0a\x20\x20#\x20常用国外服务\x0a\x20\x20AI:\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20{<<:\x20*BehaviorDN,\x20url:\x20__CRULES__/AI.mrs}\x0a\x20\x20Telegram:\x20\x20\x20\x20\x20\x20\x20{<<:\x20*BehaviorDN,\x20url:\x20__CRULES__/Telegram.mrs}\x0a\x20\x20Twitter:\x20\x20\x20\x20\x20\x20\x20\x20{<<:\x20*BehaviorDN,\x20url:\x20__CRULES__/Twitter.mrs}\x0a\x20\x20SocialMedia:\x20\x20\x20\x20{<<:\x20*BehaviorDN,\x20url:\x20__CRULES__/SocialMedia.mrs}\x0a\x20\x20Netflix:\x20\x20\x20\x20\x20\x20\x20\x20{<<:\x20*BehaviorDN,\x20url:\x20__CRULES__/Netflix.mrs}\x0a\x20\x20','巴拿马','\x20Verge\x20等）拉取/更新订阅走的是系统代理（=本\x20','quotaStrict','自动选择','104.19.23.222#优选IP-145','jwk','微测网\x20优选域名','tgBotToken',',\x20username=','method=none','直连连接','104.24.0.0/14','104.21.23.1','dXNlcm5hbWU=','\x20\x20#\x20自动选择：隐藏（面板不可手动选择），纯自动优选延时最低节点','vpn',':\x20[','masqueName','MASQUE前置并发','域名直连·对照','replace','stats','password','path','3.1.1','outboundProxy','network',':cn\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20#\x20国内域名返回真实\x20IP（','没有可测的\x20IP','worker','no-store,\x20no-cache,\x20must-revalidate','域名-','172.66.157.150#优选IP-166','\x20\x20-\x20{name:\x20家宽出口,\x20type:\x20select,\x20','d2FycA==','188.114.96.1#优选IP-011','fakeip','优选地址','172.64.156.0/24','104.19.48.0/21','waitUntil','-category-ads-all','domainT','MIA','TGTOKEN','NGO','172.65.21.190#优选IP-191','addresses','c2VydmVybmFtZQ==','CFNext',',AI,AI服务','vultr.','104.16.108.18#优选IP-106','enqueue','隧道前置','103.31.4.0/22','墨西哥','#\x20MASQUE\x20凭据不可用：','WmVwaHlydXNv','Cookie','hwkey','lastIndexOf','info',',ChinaIP,直连连接,no-resolve\x0a\x0a\x20\x20#\x20大陆\x20IP\x20兜底直连：覆盖规则集未收录的域名\x20/\x20纯\x20IP\x20连接的大陆应用（','172.19.0.1/30','SHA-256','c2tpcC1jZXJ0LXZlcmlmeQ==','.conf','Q0ZOZXh0','preferredDomains','IAH','(?:^|;\x5cs*)','104.16.245.187#优选IP-019','nontls','104.18.144.168#优选IP-259','172.65.134.100#优选IP-103','Vmxlc3M=','162.159.198.200#优选IP-245','保加利亚','104.19.83.33#优选IP-268','104.25.126.144#优选IP-272','subrequests','today','104.19.191.31','188.114.96.238#优选IP-269','xPaddingObfsMode','104.17.96.0/20','奥地利','obfuscated','162.159.90.82#优选IP-253','PHX','importKey','GraphQL:\x20','configured','104.19.247.23#优选IP-147','ARN','no-cache','speed.cloudflare.com','104.18.63.107#优选IP-185','\x20\x20\x20\x20\x20\x20','104.25.109.0#优选IP-275','fromCharCode','104.18.47.0/24','SEA','\x20国内域名兜底（覆盖规则集未收录的国内域名，先于\x20','172.67.64.94#优选IP-128','masqueEps','tail','104.18.7.34','OUTBOUND_MODE','172.67.64.211#优选IP-020','SOCKS5\x20握手超时','188.114.97.52#优选IP-124','LGW','Y2xhc2g=','STR','credential\x20processing\x20failed','oracle.','API','aGlkZGlmeQ==','162.159.198.2:500','172.67.156.0/24',',\x20sni=','：账户当日额度已达\x2099%，订阅已自动停用（次日自动恢复）','/domain/Direct.mrs','\x20失败:\x20','ch.','.net','getUint16','block','proxyIP','104.24.46.107#优选IP-274','push','ceil','setUint32','（Office/OneDrive/Xbox/Teams/Skype/Bing/Azure\x20等）\x0a\x20\x20Proxy:\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20{<<:\x20*BehaviorDN,\x20url:\x20__CRULES__/Proxy.mrs}\x0a\x20\x20#\x20媒体（','8.35.211.0/24','/domain/Advertising.mrs','[2606:4700:103::2]:1701','未找到账户数据（检查账户\x20ID\x20与令牌权限）','includes','PROXYIP','2405:8100::/32','104.19.181.118#优选IP-215','src','enable','104.17.112.0/20','162.159.198.2:4443','MAN','104.18.123.15#优选IP-169','172.67.161.136#优选IP-142','-microsoft','162.159.137.205#优选IP-036',',\x20type:\x20select,\x20','chrome','2606:4700::/32','TYO','handshakeTimeout','-opts','MEL','CF\x20API\x20HTTP\x20','新加坡','104.16.124.96#优选IP-003','searchParams',':\x20[h2]','native','104.18.194.107#优选IP-228','MASQUE\x20前置节点最多支持\x205\x20个，请每行填写一个链接','.xyz','caRef','shift','104.25.123.130#优选IP-240','ATL','WEhUVFA=',')\x20that\x20is\x20on\x20the\x20<a\x20href=\x22https://www.cloudflare.com/5xx-error-landing/\x22>Cloudflare</a>\x20network.\x20An\x20unknown\x20error\x20occurred\x20while\x20rendering\x20the\x20page.</p>\x0a</div>\x0a<div\x20class=\x22cf-section\x20cf-wrapper\x22>\x0a<div\x20class=\x22cf-error-source\x22>\x0a<p><strong>What\x20can\x20I\x20do?</strong></p>\x0a<p><strong>If\x20you\x20are\x20the\x20owner\x20of\x20this\x20website:</strong>\x20contact\x20your\x20hosting\x20provider\x20and\x20let\x20them\x20know\x20your\x20web\x20server\x20is\x20not\x20completing\x20requests.\x20An\x20Error\x201101\x20means\x20that\x20the\x20request\x20reached\x20the\x20server,\x20but\x20the\x20server\x20threw\x20an\x20exception\x20while\x20processing\x20it.</p>\x0a<p><strong>If\x20you\x20are\x20a\x20visitor:</strong>\x20please\x20try\x20again\x20in\x20a\x20few\x20minutes.</p>\x0a</div>\x0a</div>\x0a</div>\x0a<div\x20class=\x22cf-footer\x22><p>Cloudflare\x20Ray\x20ID:\x20<strong>','cpuLimit','197.234.240.0/22','cmVkaXItcG9ydA==','\x20规则依赖；',':\x207893\x0a','PER','.top','不支持的\x20','getUTCMinutes',';\x20expire=','viewer','%\x20·\x20剩\x20','104.21.57.47#优选IP-112',':\x0a\x20\x20','\x20的域名，主要是国外域名）：国外\x20DoH，连接经\x20respect-rules\x20走出口\x0a\x20\x20#\x20全部用\x20IP\x20形式的\x20DoH\x20地址：不需要先用国内明文\x20DNS\x20去解析\x20DoH\x20域名\x20→\x20无域名泄露\x0a\x20\x20#\x20Worker\x20节点连不了\x20Cloudflare\x20自家\x20IP，所以\x20Google\x20/\x20Quad9\x20放前面，1.1.1.1\x20作补充\x0a\x20\x20nameserver:\x0a\x20\x20\x20\x20-\x20\x22https://8.8.8.8/dns-query\x22\x0a\x20\x20\x20\x20-\x20\x22https://9.9.9.9/dns-query\x22\x0a\x20\x20\x20\x20-\x20\x22https://1.1.1.1/dns-query\x22\x0a\x20\x20#\x20直连出口的解析：国内\x20DoH\x0a\x20\x20','#!MANAGED-CONFIG\x0a[General]\x0aloglevel\x20=\x20notify\x0adns-server\x20=\x20223.5.5.5,\x20119.29.29.29\x0a\x0a[Proxy]\x0a','AES-GCM','message','name','/128','/domain/Netflix.mrs','Ads,REJECT\x0a\x20\x20-\x20','104.17.87.46#优选IP-201','[2606:4700:104::2]:1701','104.16.98.7','application/dns-json','regionT','/domain/Google.mrs','client_id','quotaAuto','172.66.208.0/24','104.18.184.243#优选IP-035','kind','|rf','188.114.97.108#优选IP-203','cid',',github,节点选择\x0a\x20\x20-\x20','c2VydmljZW5hbWU=','cloudflare-ech.com','172.64.83.0/24','ZW1wdHktZmFsbGJhY2s=','useCidr','YWxsb3dpbnNlY3VyZQ==','eGh0dHA=','selector','104.17.160.0/20','103.22.200.0/22','abort','nodes','172.66.199.166#优选IP-127','R0VPSVA=','OUTBOUND','headerLength','local',',category-ads-all,REJECT\x20\x20\x20\x20\x20\x20\x20\x20#\x20','tun-in','subUrl','🤖\x20OpenAI','104.18.141.27#优选IP-121','/random-region/','-ruleset/disney.mrs','104.25.141.168#优选IP-042','MB/s','ms\x20','.json','\x20\x20\x20\x20\x20\x20enable:\x20','https://1.1.1.1/dns-query','\x5c$&','binary','104.18.178.193#优选IP-183',',\x20listen:\x20\x27::\x27,\x20port:\x2010000,\x20','104.25.251.220#优选IP-177','\x20\x20\x20\x20type:\x20','WGh0dHA=','DUS','c3Rhc2g=','LAS','private_key','https://bestcf.pages.dev/tiancheng/us.txt','俄罗斯','https://api.telegram.org/bot','172.67.174.143#优选IP-176','104.18.41.168#优选IP-231','\x20\x20#\x20手动选择（手动挑选任意节点；首个选项「自动选择」=全部节点中最快）','微测网\x20IPv6','162.159.198.2:4500','https://cloudflare-dns.com/dns-query','.dat\x22\x0a\x20\x20mmdb:\x20\x22https://github.com/','ADMIN','verify','104.24.155.234#优选IP-070','104.19.169.53#优选IP-061','104.16.128.11','/domain/Tracking.mrs','cXVhbnR1bXVsdA==','size','alg','阿联酋','104.25.214.211#优选IP-055','[2606:4700:103::2]:500','下载速度','X-CF-Api','seal','cXVhbnR1bXVsdHg=','🌍\x20国外媒体','内置·保底-','104.24.184.158#优选IP-123','服务端批量探测已移除，请使用客户端测速','],\x20url:\x20\x27https://www.gstatic.com/generate_204\x27,\x20interval:\x20600,\x20timeout:\x208000,\x20tolerance:\x2050,\x20lazy:\x20true,\x20hidden:\x20true,\x20','Ⓜ️\x20微软服务','104.17.100.40#优选IP-261','adminInit','随机IPv4-',',Spotify,节点选择\x0a\x20\x20-\x20','CF\x20API\x20限流(429)，请\x2015\x20分钟后再试','region','P-256','\x20\x20-\x20MATCH,节点选择','https://bestcf.pages.dev/tiancheng2/de.txt','\x20连接失败\x20码','·IP源','registration\x20HTTP\x20','crules','sourceURL','key-direction',':\x20REJECT}\x0a','104.19.42.0/24','CONFIG_KEY\x20无法解密现有配置','162.159.241.11#优选IP-204','CDG','https://www.wetest.vip/page/cloudflare/address_v4.html','type','b2Jmcw==','104.21.215.255#优选IP-247','cf.zerone-cdn.pp.ua','b3V0Ym91bmQ=','/cn.srs','108.162.198.0/24','104.17.151.244#优选IP-257',',\x20password=','162.159.10.45#优选IP-208','arraybuffer','172.65.35.169#优选IP-092','masqueConf','hostname','requests','MXP','FCO',',Twitter,节点选择\x0a\x20\x20-\x20','MAD','https://www.wetest.vip/page/cloudflare/address_v6.html','values','104.17.101.139#优选IP-030','digitalocean.','repeat','加拿大','tls-auth','\x20头部过短','🎯\x20全球直连','peer-public-key','104.17.195.133#优选IP-152','104.21.7.133#优选IP-226',':\x20[直连连接]}\x0a\x20\x20-\x20{name:\x20直连连接,\x20type:\x20select,\x20','明文版','📊\x20已用\x20','/crules/','object',':\x20\x20\x20\x20\x20\x20\x20\x20{<<:\x20*BehaviorIP,\x20url:\x20__CRULES__/','Z3JwYy1vcHRz','104.20.17.160#优选IP-264','fr.','Y29uZ2VzdGlvbi1jb250cm9sbGVy','TWlob21v','cnVsZXNldF9nZW9kYXRh','freeCpu','x-padding-header','Z3JwYw==','hwCo','string','104.16.91.33#优选IP-161','ZRH','pl.','\x20\x20\x20\x20key:\x20&','ca.','\x20\x20\x20\x20\x20\x20headers:','msnet','match','188.114.97.21#优选IP-229','172.65.78.200#优选IP-283','已保存并生效','quotaDisabled','X-CF-Gate','url','/domain/SocialMedia.mrs','104.24.244.237#优选IP-075','104.25.86.143#优选IP-235','104.20.30.0/24','小说混淆版','104.25.223.90#优选IP-239','卡塔尔','sub://','dHJvamFu','cfApiToken','104.25.246.123#优选IP-043','[2606:4700:104::2]:8443','hosts','SEL','note','172.67.189.246#优选IP-115','dXJsLXRlc3Q=','WAW','://','encode','charAt','peer_public_key','\x20|\x20522:\x20','ZmluZ2VycHJpbnQ=','104.27.27.106#优选IP-292','__default__','ext','-telegram','text/html','104.25.18.216#优选IP-198','无法识别的地址类型','function','密码错误','BEGIN','from','\x20\x20\x20\x20ipv6:\x20','add','YVR','ips','workers','CF\x20API\x20限流(429)，显示缓存数据（可能滞后）','tls&sni=','104.24.46.127#优选IP-200','_mixed','https://www.wetest.vip/page/cloudflare/cname.html','luma','162.159.135.234#优选IP-249','fallbackUrls','addr','HostMonit\x20优选','\x20&bull;\x20','password=','·生成','\x20HTTP/1.1\x0d\x0aHost:\x20','.local','registration\x20request\x20failed','Z3JwYy1zZXJ2aWNlLW5hbWU=','arrayBuffer','\x20\x20\x20\x20ca:\x20*','bW9kZQ==','auth','cpuTimeP50','publicKey','fillCount','188.114.96.64#优选IP-171','s:\x0a\x20\x20-\x20{name:\x20节点选择,\x20type:\x20select,\x20','172.67.255.83#优选IP-114','http','连接被关闭','104.16.238.98#优选IP-094','attachment;\x20filename=\x22','代理入口全部连接失败','udp-relay=false','克罗地亚','padStart','104.19.39.0/24','buf','104.18.43.224#优选IP-022','https://bestcf.pages.dev/tiancheng/tw.txt','unshift','ZXh0cmE=','masqueSni','cap','outboundMode','preset','signal','仅支持\x20POST','104.17.2.7','valid','https','104.25.181.74#优选IP-209','188.114.98.27#优选IP-244','forEach','xn--b6gac.eu.org','SMTP\x20outbound\x20is\x20disabled','104.25.24.66#优选IP-148','104.25.161.217#优选IP-140','-openai','所有出站方式均失败','=;\x20Path=/;\x20Max-Age=0;\x20HttpOnly;\x20Secure;\x20SameSite=Lax','<tr',',Telegram,节点选择\x0a\x20\x20-\x20','U09DS1M1','188.114.99.114#优选IP-060','104.25.0.1','https://bestcf.pages.dev/tiancheng/sg.txt','candidates','104.18.40.0/23','104.19.68.127#优选IP-207','未绑定\x20KV\x20命名空间，无法保存管理密码','sg.','opened','\x0a\x0a[Rule]\x0a','\x20\x20-\x20name:\x20',',Microsoft,直连连接\x20\x20\x20\x20\x20\x20\x20\x20#\x20微软全家桶直连（Office\x20/\x20OneDrive\x20/\x20Windows\x20更新\x20/\x20Teams\x20/\x20Xbox\x20等）\x0a\x20\x20-\x20','ech-opts',',\x20ws-headers=Host:','https://dns.google/dns-query','decrypt','utf-8','application/octet-stream',':cn\x22:\x0a\x20\x20\x20\x20\x20\x20-\x20\x22https://dns.alidns.com/dns-query\x22\x0a\x20\x20\x20\x20\x20\x20-\x20\x22https://doh.pub/dns-query\x22\x0a\x20\x20\x20\x20#\x20国外：国外\x20DoH（连接本身经隧道，不直连暴露查询；A\x20/\x20AAAA\x20同一策略）\x0a\x20\x20\x20\x20\x22','%20','presetErr',':China\x0a\x20\x20\x20\x20-\x20',':\x20REJECT}','c2hvcnQtaWQ=','2606:4700::','https://bestcf.pages.dev/vvhan/ipv6.txt','ZWR0dW5uZWw=','\x20error:\x20','proto','wetest_v4','随机优选未生成有效节点，请重试或开启追加默认节点。','no-store','open','cGFzc3dvcmQ=','arr','U3Rhc2g=','UlVMRS1TRVQ=','resolve','c3VyZmJvYXJk','UHJveHktQXV0aG9yaXphdGlvbg==','\x27,\x20interval:\x20600,\x20timeout:\x208000,\x20tolerance:\x2050,\x20expected-status:\x20\x27204\x27,\x20lazy:\x20true,\x20','\x20自身），\x0a\x20\x20#\x20规则里若没有\x20DIRECT\x20放行，请求会被送进代理节点\x20→\x20自指循环\x20→\x20TLS\x20握手被断（tls\x20handshake\x20eof）→\x20导入/更新失败\x0a','前置节点','remaining','tcp','assign','(?=&|#|$)','Y2ZuZXh0','SAN','微测网\x20IPv4','prefDomain','（提醒阈值\x20',']}\x0a','VkxFU1M=','[2606:4700:103::2]:4443','162.159.198.2',',China,直连连接\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20#\x20国内域名直连\x0a\x20\x20-\x20',':\x20chrome','unknown',',PrivateIP,直连连接,no-resolve\x0a\x20\x20-\x20','\x20\x20-\x20{name:\x20手动选择,\x20type:\x20select,\x20','\x20\x20\x20\x20sni:\x20','172.66.164.60#优选IP-251','GATE','obfs=','S2FyaW5n','now','ZGlhbGVyUHJveHk=','162.159.236.5#优选IP-065','不支持的\x20SS\x20加密方式:\x20','HOST','查询失败:\x20','-mode','104.27.46.114#优选IP-271','Z2Vvc2l0ZQ==','MDkwMjI3','ZmFsbGJhY2s=','104.18.28.48#优选IP-156','https://doh.pub/dns-query','undefined','false','cf.','-netflix','\x20\x20#<<HW-INSERT>>','ipv6Mode','djJyYXk=','爱尔兰','NjY2T1M=','172.67.173.89#优选IP-132','188.114.96.255#优选IP-082','rule\x20','连接超时（SYN\x20被静默丢弃）','162.159.94.229#优选IP-014','port','_auth','/domain/Telegram.mrs','getWriter','新西兰','172.67.251.0/24','plain','forceProxyDomains','8.889288.xyz','https://bestcf.pages.dev/s5gy/us.txt','xPaddingKey','aW5zdGFsbF9pZA==','xPaddingPlacement','UHJveHlJUA==','，请换一个数据源','104.24.84.86#优选IP-285','SIN','TG9vbg==','DFW','#\x20====================\x20策略组\x20====================',',SocialMedia,节点选择\x0a\x20\x20-\x20','3600','bmFtZXNlcnZlci1wb2xpY3k=','\x20\x20\x20\x20#\x20自动派生；也可用\x20CLASH_SECRET\x20覆盖\x0a#\x20允许网页面板跨域访问\x0aexternal-controller-cors:\x0a\x20\x20allow-origins:\x0a\x20\x20\x20\x20-\x20\x22*\x22\x0a\x20\x20allow-private-','科威特','\x20错误:\x20','肯尼亚','Mozilla/5.0','certAnchor','TLS','104.18.255.187#优选IP-050','udp','429','.internal','\x20unavailable:\x20','\x20官方规则库，GitHub\x20release\x20官方源）\x0a','104.17.13.179#优选IP-091','104.25.245.147#优选IP-083','RHVzdGluV2lu','eW91dHViZQ==','）\x0a\x20\x20Spotify:\x20\x20\x20\x20\x20\x20\x20\x20{<<:\x20*BehaviorDN,\x20url:\x20__CRULES__/Spotify.mrs}\x0a\x20\x20TikTok:\x20\x20\x20\x20\x20\x20\x20\x20\x20{<<:\x20*BehaviorDN,\x20url:\x20__CRULES__/TikTok.mrs}\x0a\x20\x20disney:\x20\x20\x20\x20\x20\x20\x20\x20\x20{<<:\x20*BehaviorDN,\x20url:\x20__CRULES__/disney.mrs}\x0a\x20\x20#\x20GitHub\x0a\x20\x20github:\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20{<<:\x20*ClassicalYaml,\x20url:\x20__CRULES__/github.yaml}\x0a\x20\x20#\x20IP规则\x0a\x20\x20PrivateIP:\x20\x20\x20\x20\x20\x20{<<:\x20*BehaviorIP,\x20url:\x20__CRULES__/PrivateIP.mrs}\x0a\x20\x20TelegramIP:\x20\x20\x20\x20\x20{<<:\x20*BehaviorIP,\x20url:\x20__CRULES__/TelegramIP.mrs}\x0a\x20\x20','novel','clashSecret','CF_ACCOUNT_ID','91.193.58.0/23','getUTCHours','x-padding-','172.67.82.86#优选IP-162','\x20模式：本订阅格式不支持该模式的原生节点，未下发\x20Worker\x20节点。请使用\x20Clash/Mihomo\x20兼容格式。\x0a','[2606:4700:104::2]:4443','enableVless','🚀\x20节点选择','set','raw','text/yaml','MUC','split','subCacheTtl','done','104.17.16.0/20','keyLen','104.27.66.179#优选IP-076','PRG','https://bestcf.pages.dev/gslege/SG.txt','https://090227.pages.dev/bestcf?isp=all&ips=20','dns','162.159.230.149#优选IP-116','乌克兰','b3V0Ym91bmRz','104.16.123.96#优选IP-002','https://www.vpngate.net/api/iphone/','type=','aG9zdA==','-proxy:\x20','/releases/download/','Q2xhc2g=','/releases/download/latest/country.mmdb\x22\x0a\x0a#\x20流量嗅探\x0a','104.27.113.151#优选IP-101','104.17.169.109#优选IP-217','[2606:4700:103::2]:4500','VPN\x20Gate\x20HTTP\x20','c25p','\x20节点）：默认选中「','[2606:4700:104::2]:4500','find','104.19.168.107#优选IP-074','dC5tZS8=','key\x20generation\x20failed','nl.','ss-subkey','|rule','dXBzdHJlYW0=','104.17.118.180#优选IP-090','skipCertVerify','.mrs}\x0a\x20\x20ChinaIP:\x20\x20\x20\x20\x20\x20\x20\x20{<<:\x20*BehaviorIP,\x20url:\x20__CRULES__/ChinaIP.mrs}\x0a\x0a#\x20====================\x20EOF\x20====================\x0a\x0a','Host',',\x20tls=true,\x20','104.16.234.241#优选IP-288','obfs-uri=','decode','c25pZmZlcg==','https://api.','172.67.71.106#优选IP-294','&allowInsecure=1&insecure=1','Ads:\x20\x20\x20\x20{<<:\x20*BehaviorDY,\x20url:\x20__CRULES__/','origin','菲律宾','澳大利亚','ORD','Z2VveC11cmw=','peers','floor','A256GCM','R0VPU0lURQ==',':Advertising,','public,\x20max-age=','|raw','https://bestcf.pages.dev/tiancheng2/kr.txt','join','unreachable','x-padding-method','country','104.19.46.0/24','MCI','localeCompare','YWxsb3ctbGFu','var\x20APIPATH\x20=','([?&](?:sni|host)=)','create','cname.xirancdn.us','\x0a<!DOCTYPE\x20html>\x0a<html\x20lang=\x22zh-CN\x22\x20data-theme=\x22dark\x22>\x0a<head>\x0a<meta\x20charset=\x22utf-8\x22>\x0a<meta\x20name=\x22viewport\x22\x20content=\x22width=device-width,\x20initial-scale=1\x22>\x0a<title>登录</title>\x0a<link\x20rel=\x22icon\x22\x20href=\x22data:image/svg+xml,%3Csvg\x20xmlns=\x27http://www.w3.org/2000/svg\x27\x20viewBox=\x270\x200\x2024\x2024\x27%3E%3Crect\x20x=\x273\x27\x20y=\x273\x27\x20width=\x2718\x27\x20height=\x2718\x27\x20rx=\x275\x27\x20fill=\x27%23f6821f\x27/%3E%3Cpath\x20d=\x27M8\x2015V9l8\x206V9\x27\x20stroke=\x27%230d131b\x27\x20stroke-width=\x272\x27\x20fill=\x27none\x27\x20stroke-linecap=\x27round\x27\x20stroke-linejoin=\x27round\x27/%3E%3C/svg%3E\x22>\x0a<style>\x0a*{box-sizing:border-box;margin:0;padding:0}\x0a:root{--bg:#0d1117;--card:#151d29;--border:#25303f;--text:#e9eef7;--dim:#93a3b8;--accent:#7c6cff;--accent2:#22d3ee;--accent-dim:rgba(124,108,255,.16);--err:#f87171;--err-dim:rgba(248,113,113,.13);--glass:rgba(255,255,255,.06);--glass-brd:rgba(255,255,255,.10);--hi:rgba(255,255,255,.10)}\x0a[data-theme=\x22light\x22]{--bg:#eef1f7;--card:#ffffff;--border:#dde4ee;--text:#1b2634;--dim:#5d6b7d;--accent:#6a58f5;--accent2:#0891b2;--accent-dim:rgba(106,88,245,.12);--err:#d94848;--err-dim:rgba(217,72,72,.10);--glass:rgba(255,255,255,.55);--glass-brd:rgba(255,255,255,.75);--hi:rgba(255,255,255,.85)}\x0abody{background:var(--bg);color:var(--text);font-family:\x22PingFang\x20SC\x22,\x22Microsoft\x20YaHei\x22,\x22Segoe\x20UI\x22,system-ui,sans-serif;display:flex;align-items:center;justify-content:center;min-height:100vh;padding:20px;position:relative}\x0abody::before,body::after{content:\x22\x22;position:fixed;border-radius:50%;filter:blur(90px);pointer-events:none;z-index:0}\x0abody::before{width:480px;height:480px;left:-140px;top:-160px;background:rgba(124,108,255,.16)}\x0abody::after{width:420px;height:420px;right:-120px;bottom:-140px;background:rgba(34,211,238,.10)}\x0a.box{position:relative;z-index:1;width:340px;max-width:100%;background:rgba(21,29,41,.72);border:1px\x20solid\x20var(--glass-brd);border-radius:20px;padding:30px\x2028px;box-shadow:0\x2024px\x2060px\x20rgba(0,0,0,.35),inset\x200\x201px\x200\x20var(--hi);-webkit-backdrop-filter:blur(18px);backdrop-filter:blur(18px)}\x0a[data-theme=\x22light\x22]\x20.box{background:rgba(255,255,255,.66);border-color:rgba(30,45,70,.08);box-shadow:0\x2016px\x2044px\x20rgba(30,45,70,.12),inset\x200\x201px\x200\x20var(--hi)}\x0a.brand{display:flex;align-items:center;gap:10px;margin-bottom:22px}\x0a.mark{width:38px;height:38px;border-radius:12px;background:linear-gradient(135deg,var(--accent),var(--accent2));display:flex;align-items:center;justify-content:center;box-shadow:0\x208px\x2020px\x20var(--accent-dim),inset\x200\x201px\x200\x20var(--hi)}\x0a.mark\x20svg{width:20px;height:20px}\x0a.mark\x20path{stroke:#fff}\x0a.brand\x20.bt{display:flex;flex-direction:column;line-height:1.25}\x0a.brand\x20.bt\x20b{font-size:16px}\x0a.brand\x20.bt\x20span{font-size:11.5px;color:var(--dim)}\x0ah1{font-size:15px;margin-bottom:4px}\x0ap{color:var(--dim);font-size:13px;margin-bottom:18px}\x0ainput{width:100%;background:var(--glass);border:1px\x20solid\x20var(--glass-brd);color:var(--text);border-radius:12px;padding:11px\x2013px;font-size:14px;outline:none;margin-bottom:12px;font-family:inherit;box-shadow:inset\x200\x201px\x200\x20var(--hi);transition:border-color\x20.15s,box-shadow\x20.15s}\x0ainput:focus{border-color:var(--accent);box-shadow:inset\x200\x201px\x200\x20var(--hi),0\x200\x200\x203px\x20var(--accent-dim)}\x0abutton{width:100%;background:linear-gradient(135deg,rgba(124,108,255,.85),rgba(34,211,238,.75));border:1px\x20solid\x20rgba(255,255,255,.22);color:#fff;border-radius:12px;padding:11px;font-size:14px;font-weight:600;cursor:pointer;font-family:inherit;-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);box-shadow:inset\x200\x201px\x200\x20rgba(255,255,255,.38),0\x208px\x2022px\x20var(--accent-dim);transition:transform\x20.15s,filter\x20.15s,box-shadow\x20.15s}\x0abutton:hover{filter:brightness(1.08);box-shadow:inset\x200\x201px\x200\x20var(--hi),0\x2010px\x2026px\x20var(--accent-dim)}\x0abutton:active{transform:translateY(1px)}\x0abutton:disabled{opacity:.6;cursor:not-allowed}\x0a.msg{color:var(--err);font-size:13px;margin-bottom:12px;display:none;background:var(--err-dim);padding:8px\x2012px;border-radius:8px}\x0a.foot{margin-top:16px;text-align:center;font-size:11.5px;color:var(--dim)}\x0a</style>\x0a</head>\x0a<body>\x0a<div\x20class=\x22box\x22>\x0a\x20\x20<div\x20class=\x22brand\x22>\x0a\x20\x20\x20\x20<div\x20class=\x22mark\x22><svg\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22none\x22\x20stroke-width=\x222\x22\x20stroke-linecap=\x22round\x22\x20stroke-linejoin=\x22round\x22><path\x20d=\x22M4\x2012h4l3-7\x204\x2014\x203-7h2\x22/></svg></div>\x0a\x20\x20\x20\x20<div\x20class=\x22bt\x22><b>CF&#78;ext\x20控制台</b></div>\x0a\x20\x20</div>\x0a\x20\x20<h1>登录</h1>\x0a\x20\x20<p>请输入管理密码以继续</p>\x0a\x20\x20<div\x20class=\x22msg\x22\x20id=\x22msg\x22>密码错误，请重试</div>\x0a\x20\x20<form\x20id=\x22form\x22>\x0a\x20\x20\x20\x20<input\x20type=\x22password\x22\x20id=\x22pwd\x22\x20placeholder=\x22管理密码\x22\x20autofocus\x20autocomplete=\x22current-password\x22>\x0a\x20\x20\x20\x20<button\x20type=\x22submit\x22\x20id=\x22btn\x22>登录</button>\x0a\x20\x20</form>\x0a\x20\x20<div\x20class=\x22foot\x22>配置保存在\x20Cloudflare\x20KV\x20中，密码错误\x2024\x20小时后自动失效</div>\x0a</div>\x0a<script>\x0a(function(){\x0a\x20\x20var\x20t\x20=\x20\x27dark\x27;\x0a\x20\x20try\x20{\x20t\x20=\x20localStorage.getItem(\x27tp_theme\x27)\x20||\x20\x27dark\x27;\x20}\x20catch(e)\x20{}\x0a\x20\x20var\x20resolved\x20=\x20t\x20===\x20\x27auto\x27\x0a\x20\x20\x20\x20?\x20(window.matchMedia\x20&&\x20matchMedia(\x27(prefers-color-scheme:\x20light)\x27).matches\x20?\x20\x27light\x27\x20:\x20\x27dark\x27)\x0a\x20\x20\x20\x20:\x20t;\x0a\x20\x20document.documentElement.setAttribute(\x27data-theme\x27,\x20resolved);\x0a\x20\x20var\x20next\x20=\x20new\x20URLSearchParams(location.search).get(\x27next\x27)\x20||\x20location.pathname;\x0a\x20\x20document.getElementById(\x27form\x27).addEventListener(\x27submit\x27,\x20function(e){\x0a\x20\x20\x20\x20e.preventDefault();\x0a\x20\x20\x20\x20var\x20btn\x20=\x20document.getElementById(\x27btn\x27);\x0a\x20\x20\x20\x20var\x20msg\x20=\x20document.getElementById(\x27msg\x27);\x0a\x20\x20\x20\x20btn.disabled\x20=\x20true;\x20msg.style.display\x20=\x20\x27none\x27;\x0a\x20\x20\x20\x20fetch(location.pathname,\x20{\x20method:\x20\x27POST\x27,\x20headers:\x20{\x20\x27Content-Type\x27:\x20\x27application/x-www-form-urlencoded\x27\x20},\x20body:\x20\x27password=\x27\x20+\x20encodeURIComponent(document.getElementById(\x27pwd\x27).value)\x20+\x20\x27&next=\x27\x20+\x20encodeURIComponent(next)\x20})\x0a\x20\x20\x20\x20\x20\x20.then(function(r){\x20return\x20r.json();\x20})\x0a\x20\x20\x20\x20\x20\x20.then(function(r){\x0a\x20\x20\x20\x20\x20\x20\x20\x20if\x20(r\x20&&\x20r.ok){\x20location.href\x20=\x20r.next\x20||\x20\x27/\x27;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20else\x20{\x20msg.style.display\x20=\x20\x27block\x27;\x20btn.disabled\x20=\x20false;\x20}\x0a\x20\x20\x20\x20\x20\x20})\x0a\x20\x20\x20\x20\x20\x20.catch(function(){\x20msg.textContent\x20=\x20\x27网络错误，请重试\x27;\x20msg.style.display\x20=\x20\x27block\x27;\x20btn.disabled\x20=\x20false;\x20});\x0a\x20\x20});\x0a})();\x0a</script>\x0a</body>\x0a</html>\x0a\x0a','fn.130519.xyz','.yaml','原生地址','trojanPassword','Q29ubmVjdA==','172.65.173.221#优选IP-051','uri','pagesFunctionsInvocationsAdaptiveGroups','UEFJX0NO','errors','kr.','\x20\x20\x20\x20ip:\x20','SLC','U1pfUEFJ','」=自动优选该地区最快节点，也可手动指定单个节点','CLASH_SECRET','104.24.230.144#优选IP-102','S29vbHNvbg==','198.41.128.0/17','GET','\x20UTC</small></h1>\x0a<h2\x20class=\x22cf-subheadline\x22>Worker\x20threw\x20exception</h2>\x0a</div>\x0a<div\x20class=\x22cf-section\x20cf-wrapper\x22>\x0a<p>You\x27ve\x20requested\x20a\x20page\x20on\x20a\x20website\x20(','172.65.45.248#优选IP-290','status','\x20\x20\x20\x20\x20\x20mode:\x20','append','TGCHAT','c2VyaWFsX251bWJlcg==','setUTCHours','-disney','panel','YWVzLTEyOC1nY20=','code','182682','.pages.dev/random-region/HK/100.txt','djJyYXlu','max','getUint8','\x20命中）\x0a\x20\x20#\x20阻止\x20QUIC\x20走出口（强制回退\x20TCP，避免\x20QUIC\x20绕过出口\x20/\x20被干扰）。\x0a\x20\x20#\x20放在直连规则之后：直连\x20QUIC（大陆\x20/\x20微软\x20/\x20苹果）不受影响。如需\x20Telegram\x20语音等\x20UDP，可删除此行。\x0a\x20\x20-\x20AND,((DST-PORT,443),(NETWORK,UDP)),REJECT\x0a\x0a\x20\x20#\x20常用国外服务（统一走节点选择）\x0a\x20\x20-\x20','eGh0dHAtb3B0cw==',',Private,直连连接\x0a\x20\x20-\x20','data','\x20\x20\x20\x20proto:\x20','security','subtle','accounts','mtu','104.24.12.10','caAnchor','（未指定）','enZvcw==','\x20·\x20实测\x20','配置已加密，请设置正确的\x20CONFIG_KEY','172.64.159.0/24','cHJveHlpcA==','优选域名-','拉脱维亚','.pages.dev/random-region/US/100.txt','text/html;\x20charset=UTF-8','PATH','HND','哥伦比亚','%（阈值\x2095%），已停止下发任何节点（次日自动恢复）','&type=','sec-websocket-protocol','call','ispT','·域名源','104.18.185.26#优选IP-297','\x20\x20#\x20家宽模式：VPN\x20Gate\x20相关流量走家宽出口（OpenVPN\x20经\x20CF\x20隧道）\x0a\x20\x20-\x20DOMAIN-SUFFIX,vpngate.net,家宽出口\x0a','cloudflare-ip.mofashi.ltd','\x20\x20#\x20直连连接：仅供规则引用，面板中隐藏','fragment','VHJvamFu','104.25.20.146#优选IP-100','remote-dns-resolve','\x20\x20\x20\x20\x20\x20x-padding-placement:\x20','group','UEFJQ05J','dHlwZQ==','isArray','BER','https://bestcf.pages.dev/domain/ircf/all.txt','https://bestcf.pages.dev/nirevil/ipv6.txt','172.64.154.0/24','f3058171cad.002404.xyz','getUTCDate','cHJveHktc2VydmVyLW5hbWVzZXJ2ZXI=','104.18.38.0/23','104.19.88.253#优选IP-039','peerPublicKey','未绑定\x20KV\x20命名空间，无需重置','/sendMessage','all','VExTOg==','refillMs','104.25.238.28#优选IP-277','c3VyZ2U=','斯洛伐克','dGxzOg==','timeout','172.64.229.0/24','QUxQTg==','_quotaCap','\x20&bull;\x20Performance\x20&amp;\x20security\x20by\x20<a\x20href=\x22https://www.cloudflare.com/5xx-error-landing/\x22>Cloudflare</a></p></div>\x0a</div>\x0a</body>\x0a</html>','8.39.125.0/24','https://stock.hostmonit.com/CloudFlareYes','parse','104.17.46.187#优选IP-173','162.159.235.27#优选IP-072','srv','104.25.169.144#优选IP-291','斯里兰卡','encrypt','cfn-','HEL','172.65.50.167#优选IP-254','subMode','AMS','TROJAN_PASSWORD','IP地址','104.18.42.54#优选IP-026','in.','SHA1','emFzaGJvYXJk',':\x0a\x20\x20\x20\x20#\x20广告域名直接返回空应答\x0a\x20\x20\x20\x20\x22',':\x207892\x0a','private\x20or\x20reserved\x20outbound\x20target\x20is\x20disabled','sub','104.19.1.1','Not\x20Found','\x27,\x20interval:\x20600,\x20timeout:\x208000,\x20tolerance:\x2050,\x20expected-status:\x20\x27204\x27,\x20lazy:\x20true,\x20hidden:\x20true,\x20','https://raw.githubusercontent.com/','ECH','HW_COEXIST',',Tracking,REJECT\x0a\x20\x20-\x20','172.64.34.109#优选IP-087','162.159.199.2:4443','172.65.47.182#优选IP-220','\x20\x20\x20\x20key-direction:\x20','ZGlhbGVy','\x20|\x20Cloudflare</title>\x0a<meta\x20charset=\x22UTF-8\x22\x20/>\x0a<meta\x20http-equiv=\x22Content-Type\x22\x20content=\x22text/html;\x20charset=UTF-8\x22\x20/>\x0a<meta\x20http-equiv=\x22X-UA-Compatible\x22\x20content=\x22IE=Edge\x22\x20/>\x0a<meta\x20name=\x22robots\x22\x20content=\x22noindex,\x20nofollow\x22\x20/>\x0a<meta\x20name=\x22viewport\x22\x20content=\x22width=device-width,initial-scale=1\x22\x20/>\x0a<style>\x0abody{margin:0;padding:0;font-family:-apple-system,BlinkMacSystemFont,\x22Segoe\x20UI\x22,Roboto,\x22Helvetica\x20Neue\x22,Arial,sans-serif;background:#fff;color:#404041;font-size:16px;line-height:1.5}\x0a.cf-wrapper{max-width:960px;margin:0\x20auto;padding:0\x201.5em}\x0a#cf-error-details{padding:2.5em\x200}\x0a.cf-error-overview\x20h1{font-size:2.6em;font-weight:400;margin:0\x200\x20.3em;line-height:1.2}\x0a.cf-error-type{color:#404041}\x0a.cf-error-code{color:#bd2426;font-weight:600}\x0a.heading-ray-id{display:block;font-size:.5em;color:#92979b;margin-top:.8em;font-weight:400}\x0a.cf-subheadline{font-size:1.4em;font-weight:400;margin:0\x200\x201.2em;color:#404041}\x0a.cf-section{border-top:1px\x20solid\x20#e0e0e0;padding:1.4em\x200}\x0a.cf-error-source{background:#f6f6f6;border:1px\x20solid\x20#e0e0e0;padding:1.2em;color:#606265;font-size:.94em}\x0a.cf-error-source\x20p{margin:0\x200\x20.8em}\x0a.cf-error-source\x20p:last-child{margin:0}\x0a.cf-footer{border-top:1px\x20solid\x20#e0e0e0;padding:1.2em\x200;font-size:.86em;color:#92979b}\x0a.cf-footer\x20a,.cf-section\x20a{color:#2f7bbf;text-decoration:none}\x0a.cf-footer\x20p{margin:0\x200\x20.4em}\x0a</style>\x0a</head>\x0a<body>\x0a<div\x20id=\x22cf-wrapper\x22>\x0a<div\x20id=\x22cf-error-details\x22\x20class=\x22cf-error-details-wrapper\x22>\x0a<div\x20class=\x22cf-header\x20cf-error-overview\x22>\x0a<h1><span\x20class=\x22cf-error-type\x22>Error</span>\x20<span\x20class=\x22cf-error-code\x22>1101</span><small\x20class=\x22heading-ray-id\x22>Ray\x20ID:\x20','?ed=2048','2405:b500::/32','104.16.0.133#优选IP-093','/domain/Private.mrs','cfip.1323123.xyz','SMODE','104.17.146.117#优选IP-141','TROJAN','IPv6','bWl4ZWQtcG9ydA==','重置失败:\x20','104.25.122.6#优选IP-053','104.17.127.180#优选IP-001','\x20自动选择延迟最低家宽节点）\x0a\x20\x20-\x20{name:\x20家宽自动,\x20type:\x20','104.16.123.26#优选IP-149','-twitter','ADL','cfAccountId','104.27.116.114#优选IP-262','round-robin','custom','108.162.192.0/18','104.25.93.154#优选IP-126','162.159.199.2:8095','alpn','-cn','route','223.5.5.5','keyAnchor','104.18.119.34#优选IP-016','bG9vbg==','SJC','BOS',',Direct,直连连接\x0a\x20\x20-\x20','104.25.197.107#优选IP-105','cnamefuckxxs.yuchen.icu','Z2VvaXA=','意大利','_configError','https://090227.pages.dev/bestcf?isp=cmcc&ips=50','credential\x20unavailable','tokenish','104.19.168.0/24','-left.cf',',Netflix,节点选择\x0a\x20\x20-\x20','admin','us.','Q0hBQ0hBMjA=','c2VjdXJpdHk9',',TikTok,节点选择\x0a\x20\x20-\x20','162.159.192.111#优选IP-232','U3VyZ2U=','104.17.99.0#优选IP-143','binaryType','list','ZGlyZWN0LW5hbWVzZXJ2ZXI=','reset','600','send',',媒体优选',';\x20download=','test','useBuiltinProxy','HOME_WAN',':Direct,Private,China,Microsoft,AppleCN,Download\x22:\x0a\x20\x20\x20\x20\x20\x20-\x20\x22https://dns.alidns.com/dns-query\x22\x0a\x20\x20\x20\x20\x20\x20-\x20\x22https://doh.pub/dns-query\x22\x0a\x20\x20\x20\x20\x22',':\x20\x22https://github.com/','githubusercontent.com','min','104.18.173.224#优选IP-131','162.159.43.85#优选IP-293','104.17.48.0/20','aes-128gcm','ports','104.24.250.89#优选IP-296','104.21.2.1','eC1wYWRkaW5nLW9iZnMtbW9kZQ==','digest','OFF','104.16.249.249#优选IP-009','cloudflare.182682.xyz','162.159.44.215#优选IP-031','\x20true','TSA',';\x20charset=utf-8','https://bestcf.pages.dev/s5gy/hk.txt','.srs','fronts','every','CFN','body','https://8.8.8.8/dns-query','\x20\x20\x20\x20mtu:\x20','UXVhbnR1bXVsdA==','Bearer\x20','以色列','home','tgnote','https://dns.alidns.com/resolve',':\x20[自动选择','162.159.5.175#优选IP-015','https://bestcf.pages.dev/tiancheng2/hk.txt','-poly1305','162.159.14.18#优选IP-136','MASK','104.18.185.40#优选IP-041','\x20\x20-\x20{name:\x20','请先完成首次设置：设置管理密码后再访问面板','aes-256gcm','href','openvpn',']}\x0a\x20\x20-\x20{name:\x20前置自动,\x20type:\x20','自定义订阅没有有效节点；请检查列表，或开启追加默认节点。','172.67.131.200#优选IP-248',',CN,DIRECT\x0aFINAL,🐟\x20漏网之鱼\x0a','104.27.20.220#优选IP-266','\x20\x20\x20\x20password:\x20','_ctx','&extra=',')\x20that\x20is\x20on\x20the\x20<a\x20href=\x22https://www.cloudflare.com/5xx-error-landing/\x22>Cloudflare</a>\x20network.\x20Cloudflare\x20is\x20currently\x20unable\x20to\x20reach\x20the\x20origin\x20web\x20server.</p>\x0a</div>\x0a<div\x20class=\x22cf-section\x20cf-wrapper\x22>\x0a<div\x20class=\x22cf-error-source\x22>\x0a<p><strong>What\x20can\x20I\x20do?</strong></p>\x0a<p><strong>If\x20you\x20are\x20the\x20owner\x20of\x20this\x20website:</strong>\x20contact\x20your\x20hosting\x20provider\x20and\x20let\x20them\x20know\x20your\x20web\x20server\x20is\x20not\x20completing\x20requests.\x20An\x20Error\x20522\x20means\x20that\x20the\x20request\x20was\x20able\x20to\x20','162.159.10.243#优选IP-281','104.18.47.234#优选IP-025','\x20·\x20访客\x20','随机IPv6-','QUVTLTEyOC1HQ00=','multacom.','Y2xpZW50LWZpbmdlcnByaW50','d3Mtb3B0cw==','hwrefresh','\x20握手失败','echDns','104.27.207.36#优选IP-098',':\x20REJECT,\x20hidden:\x20true}','家宽出口,\x20','/ip/Telegram.mrs','104.17.25.173#优选IP-167','https://bestcf.pages.dev/tiancheng2/jp.txt','remote','\x20\x20-\x20{name:\x20节点选择,\x20type:\x20select,\x20','cHVibGljLWtleQ==','Y2lwaGVy','source',',TelegramIP,节点选择,no-resolve\x0a\x20\x20-\x20','162.159.153.10#优选IP-179','tls','nodeLimit','🌐\x20谷歌服务','cXVhbng=','(?:^|[^A-Z])','104.18.42.0/24','fmt','\x0a\x20\x20\x20\x20\x20\x20ports:\x20[443,\x208443]\x0a\x20\x20\x20\x20QUIC:\x0a\x20\x20\x20\x20\x20\x20ports:\x20[443,\x208443]\x0a\x20\x20skip-domain:\x0a\x20\x20\x20\x20-\x20\x22+.push.apple.com\x22\x0a\x0a#\x20TUN模式配置\x0atun:\x0a\x20\x20enable:\x20false\x0a\x20\x20stack:\x20mixed\x0a\x20\x20mtu:\x201480\x0a\x20\x20','websocket','nodeLimitCount','104.17.121.245#优选IP-258','domains','race','JFK','frontHost','public_key','cdn.tzpro.xyz','hwlist','/domain/Twitter.mrs','104.17.97.72#优选IP-213','https://github.com/','-spotify','\x20\x20-\x20{name:\x20手动选择,\x20type:\x20select,\x20include-all:\x20true,\x20','certRef','https://bestcf.pages.dev/s5gy/sg.txt','cnVsZS1zZXQ=','dHByb3h5LXBvcnQ=','https://www.gstatic.com/generate_204','speed.marisalnc.com','Netflix','level',',节点选择','104.19.106.1#优选IP-110','罗马尼亚','interface','crule:','randomUUID','104.16.11.246#优选IP-163','.pages.dev/random-region/JP/100.txt','user','172.67.103.87#优选IP-118','VEctVHdpbGlnaHQ=','findIndex','</strong></p><p>Your\x20IP:\x20','headers','sniff','tag','read','https://api.cloudflare.com/client/v4/graphql','172.67.229.44#优选IP-137','/releases/latest/download/dist.zip\x0aexternal-ui-name:\x20','\x20版本','超时/网络错误','104.27.72.4#优选IP-111','104.24.51.58#优选IP-138','d2FycE5hbWU=','_preamble','adminSession','RUNEU0E=','UXVyZQ==','cdns.doon.eu.org','):\x5c/\x5c/[^@\x5cs/]+@(\x5c[[0-9a-fA-F:]+\x5c]|[A-Za-z0-9.-]+)(?::(\x5cd{1,5}))?',':\x0a\x20\x20enable:\x20true\x0a\x20\x20force-dns-mapping:\x20true\x20\x20\x20#\x20强制\x20DNS\x20映射，提高分流准确度\x0a\x20\x20parse-pure-ip:\x20true\x20\x20\x20\x20\x20\x20\x20#\x20解析纯\x20IP\x20连接\x0a\x20\x20override-destination:\x20true\x0a\x20\x20sniff:\x0a\x20\x20\x20\x20HTTP:\x0a\x20\x20\x20\x20\x20\x20ports:\x20[80,\x208080-8880]\x0a\x20\x20\x20\x20','\x20\x20#\x20','colo','\x20\x20\x20\x20tls-auth:\x20|','byteOffset','订阅生成失败:\x20','104.19.97.238#优选IP-139','dWRw','?name=','172.67.64.0/20','username','TXT','比利时','162.159.199.2:443','charCodeAt',':Private\x0a\x20\x20\x20\x20-\x20','\x20\x20\x20\x20port:\x20','172.65.11.191#优选IP-122','close','error','104.17.195.184#优选IP-135','104.16.218.231#优选IP-155','104.25.36.200#优选IP-151','enableXhttp','YXURL','<!DOCTYPE\x20html>\x0a<!--[if\x20lt\x20IE\x207]>\x20<html\x20class=\x22no-js\x20ie6\x20oldie\x22\x20lang=\x22en-US\x22>\x20<![endif]-->\x0a<!--[if\x20IE\x207]>\x20\x20\x20\x20<html\x20class=\x22no-js\x20ie7\x20oldie\x22\x20lang=\x22en-US\x22>\x20<![endif]-->\x0a<!--[if\x20IE\x208]>\x20\x20\x20\x20<html\x20class=\x22no-js\x20ie8\x20oldie\x22\x20lang=\x22en-US\x22>\x20<![endif]-->\x0a<!--[if\x20gt\x20IE\x208]><!-->\x20<html\x20class=\x22no-js\x22\x20lang=\x22en-US\x22>\x20<!--<![endif]-->\x0a<head>\x0a<title>Worker\x20threw\x20exception\x20|\x20','some','subName','\x20→\x20','\x0askip-auth-prefixes:\x0a\x20\x20-\x20192.168.1.0/24\x0a\x20\x20-\x20192.168.31.0/24\x0a\x20\x20-\x20192.168.100.0/24\x0a\x20\x20-\x20127.0.0.1/8\x0a\x0a#\x20实验性功能\x0aexperimental:\x0a\x20\x20quic-go-disable-gso:\x20true\x0a\x0a#\x20管理面板配置\x0aexternal-ui-url:\x20https://github.com/','162.159.9.18#优选IP-230','Service\x20Unavailable','ALPN','188.114.97.61#优选IP-164','write','Q2xvdWRmbGFyZS1CZXN0SVA=','day','gbk','NRT','d2FycEZyb250','1.1.1.1','\x20库覆盖面更全）\x0a\x20\x20-\x20','\x20\x20\x20\x20username:\x20','#\x20====================\x20监听器\x20====================','162.159.136.73#优选IP-040','b64','EDI','getReader','\x20广告分类兜底（','172.65.184.114#优选IP-189','104.18.217.109#优选IP-033','concat','DEN',':AI,Telegram,Twitter,SocialMedia,Netflix,','flatMap','mixed','https://bestcf.pages.dev/tiancheng2/sg.txt','tun0','173.245.48.0/20','162.159.228.244#优选IP-071','_masqueError','dialerProxy','预设源:\x20','extra','127.0.0.1:9090'];r=function(){return qk;};return r();}const _XSRC={'t':0x0,'domain':[],'isp':{},'mix':[],'v6':[],'region':{},'domainT':0x0,'mixT':0x0,'v6T':0x0,'ispT':{},'regionT':{}};function _parseAddressText(H,W='',n=!0x1){const mO=V,G=[],a=new Set();for(let o of String(H||'')['split'](/[\r\n]+/)){o=o['trim']();if(!o)continue;const J=o[mO(0x1c9)]('#'),e0=(J>=0x0?o[mO(0x14f)](0x0,J):o)[mO(0x1df)](),e1=J>=0x0?o[mO(0x14f)](J+0x1)['trim']():'';let e2=e0[mO(0x499)](/^(\[[0-9a-fA-F:]+\]|[a-z0-9](?:[a-z0-9.-]*[a-z0-9])?)(?::(\d{1,5}))?$/i);if(!e2&&e0[mO(0x3bc)](':')&&Y(e0))e2=[e0,e0,''];if(!e2)continue;const e3=e2[0x1][mO(0x344)](/^\[|\]$/g,'')[mO(0x154)](),e4=e2[0x2]?parseInt(e2[0x2],0xa):0x1bb,e5=Y(e3),e6=/^[a-z0-9.-]+\.[a-z]{2,}$/i[mO(0x6b1)](e3);if(!e5&&!e6||e5&&!n&&!v(e3)||e4<0x1||e4>0xffff)continue;const e7=e3+'|'+e4;if(a[mO(0x1cf)](e7))continue;a[mO(0x4c4)](e7),G['push']({'ip':e3,'port':e4,'name':W||e1||e3,'note':e1});}return G;}function _mixedIsp(H){const mN=V,W=String(H||'')['toUpperCase']();if(W[mN(0x3bc)]('电信')||W[mN(0x3bc)](mN(0x11e))||/(?:^|\s)CT(?:\s|$)/[mN(0x6b1)](W))return'电信';if(W[mN(0x3bc)]('联通')||W[mN(0x3bc)](mN(0x2a7))||/(?:^|\s)CU(?:\s|$)/[mN(0x6b1)](W))return'联通';if(W[mN(0x3bc)]('移动')||W[mN(0x3bc)](mN(0x10b))||/(?:^|\s)(?:CM|CMCC)(?:\s|$)/[mN(0x6b1)](W))return'移动';return'';}function _roundRobinSources(H,W){const mZ=V,n=[],G=new Set();for(let a=0x0;;a++){let o=!0x1;for(const J of H){if(a>=J[mZ(0x1c8)])continue;o=!0x0;const e0=J[a],e1=String(e0['ip'])+'|'+(e0[mZ(0x564)]||0x1bb);if(!G[mZ(0x1cf)](e1)){G[mZ(0x4c4)](e1),n['push'](e0);if(n[mZ(0x1c8)]>=W)return n;}}if(!o)break;}return n;}async function _regionExtras(H){const mL=V,W=_XSRC,n=Date['now']();if(W[mL(0x452)][H]&&n-(W[mL(0x3f9)][H]||0x0)<0x927c0)return W[mL(0x452)][H];const G=await Promise['all']((_REGION_EXTRA_SOURCES[H]||[])[mL(0x12d)](async a=>{const mA=V;try{const o=await oe(a,{},0x1f40);if(!o||!o['ok'])return[];return _parseAddressText(await o[mA(0x1a7)](),'',!0x0)[mA(0x1e1)](J=>{const P0=V,e0=String(J[P0(0x4ae)]||'')[P0(0x59c)]('|')[P0(0x12d)](e1=>e1[P0(0x1df)]());if(e0[P0(0x1c8)]<0x3||!Y(J['ip']))return!0x1;return new RegExp(P0(0x707)+H+'(?:[^A-Z]|$)')[P0(0x6b1)](e0[e0[P0(0x1c8)]-0x2][P0(0x183)]());})[mA(0x12d)](J=>Object[mA(0x534)]({},J,{'relay':!0x0}));}catch(J){return[];}}));return W[mL(0x452)][H]=G,W[mL(0x3f9)][H]=Date[mL(0x549)](),G;}async function _externalSources(H=!0x1,W=he,n=!0x0,G=!0x1){const P1=V,a=Date['now'](),o=_XSRC,J=he[P1(0x1e1)](e2=>Array[P1(0x636)](W)&&W[P1(0x3bc)](e2)),e0=J[P1(0x1c8)]===he[P1(0x1c8)],e1=[];if(n&&(H||a-o[P1(0x35a)]>=0x927c0))e1[P1(0x3b4)](((async()=>{const P2=V,e2=await Promise[P2(0x643)](_DOMAIN_SOURCES[P2(0x12d)](async e5=>{try{const e6=await oe(e5,{},0x1f40);return e6&&e6['ok']?_parseAddressText(await e6['text']()):[];}catch(e7){return[];}})),e3=[],e4=new Set();for(const e5 of e2)for(const e6 of e5){const e7=String(e6['ip'])+'|'+(e6[P2(0x564)]||0x1bb);!e4[P2(0x1cf)](e7)&&(e4[P2(0x4c4)](e7),e3[P2(0x3b4)](e6));}o[P2(0x2d1)]=e3,o[P2(0x35a)]=Date[P2(0x549)]();})()));if(G&&(H||a-o['v6T']>=0x927c0))e1[P1(0x3b4)](((async()=>{const P3=V,e2=await Promise[P3(0x643)](_IPV6_SOURCES[P3(0x12d)](async e3=>{const P4=V;try{const e4=await oe(e3,{},0x1f40);return e4&&e4['ok']?_parseAddressText(await e4[P4(0x1a7)]())[P4(0x1e1)](e5=>String(e5['ip'])[P4(0x3bc)](':')):[];}catch(e5){return[];}}));o['v6']=_roundRobinSources(e2,0x3e8),o[P3(0x2e3)]=Date[P3(0x549)]();})()));if(e0){if(H||a-o['mixT']>=0x927c0)e1[P1(0x3b4)](((async()=>{const P5=V;try{const e2=await oe(_MIX_ISP_SOURCE,{},0x1f40);o[P5(0x197)]=e2&&e2['ok']?_parseAddressText(await e2[P5(0x1a7)]()):[];}catch(e3){o[P5(0x197)]=[];}o[P5(0x180)]=Date[P5(0x549)]();})()));}else{for(const e2 of J)if(H||a-(o[P1(0x628)][e2]||0x0)>=0x927c0)e1['push'](((async()=>{const P6=V;try{const e3=await oe(_ISP_SOURCES[e2],{},0x1f40);o[P6(0x2c9)][e2]=e3&&e3['ok']?_parseAddressText(await e3[P6(0x1a7)]()):[];}catch(e4){o[P6(0x2c9)][e2]=[];}o[P6(0x628)][e2]=Date['now']();})()));}return await Promise[P1(0x643)](e1),o['t']=a,o;}const Wt={'t':0x0,'ips':null};async function Vt(H){const P7=V;if(H=Math['max'](0x1,parseInt(H)||0x96),Date[P7(0x549)]()-Wt['t']<0x927c0)return Wt[P7(0x4c6)];const W=await oe(P7(0x650),{'headers':{'User-Agent':P7(0x57f)}},0x1770);if(W&&W['ok']){const G=Kt(await W['text']())[P7(0x1e1)](e0=>e0['ip']&&v(e0['ip'])),o=new Set(),J=[];for(const e0 of G)if(!o[P7(0x1cf)](e0['ip'])&&(o['add'](e0['ip']),J[P7(0x3b4)](e0),J[P7(0x1c8)]>=H))break;return Wt['t']=Date['now'](),Wt['ips']=J,J;}return null;}async function Jt(H){const P8=V,W=[],G={'preset':0x0,'presetErr':'','custom':0x0,'customErr':'','cidr':0x0},J=P8(0x688)===(H=H||{})['source']||!!H[P8(0x45a)],e0=e3=>{const P9=V;e3&&e3['ip']&&(J||v(e3['ip']))&&W[P9(0x3b4)]({'ip':e3['ip'],'port':e3[P9(0x564)]||H[P9(0x564)]||0x1bb,'name':e3[P9(0x3f1)]||''});};if(H[P8(0x700)]&&N[H['source']]){const e3=await oe(N[H[P8(0x700)]][P8(0x49f)],{'headers':{'User-Agent':P8(0x57f)}},0x1770);if(e3&&e3['ok']){const e4=Kt(await e3[P8(0x1a7)]());e4[P8(0x4fc)](e0),G[P8(0x4f4)]=e4['length'];}else G[P8(0x51b)]=e3?P8(0xf2)+e3[P8(0x5fd)]:P8(0x737);}if(H[P8(0x45a)]){const e5=se(H[P8(0x45a)])[P8(0x1e1)](e6=>/^https?:\/\//i['test'](e6))[P8(0x14f)](0x0,0x32);if(e5[P8(0x1c8)]){const e6=await Promise[P8(0x643)](e5[P8(0x12d)](async e9=>{const PD=V;try{const eD=await oe(e9,{'headers':{'User-Agent':PD(0x57f)}},0x1770);return eD&&eD['ok']?{'url':e9,'arr':Kt(await eD[PD(0x1a7)]()),'err':''}:{'url':e9,'arr':[],'err':eD?PD(0xf2)+eD['status']:'超时/网络错误'};}catch(eX){return{'url':e9,'arr':[],'err':eX&&eX[PD(0x3f0)]||String(eX)};}}));let e7=0x0;const e8=[];for(const e9 of e6)e9[P8(0x1fd)]?e8['push'](e9['url'][P8(0x344)](/^https?:\/\//,'')['slice'](0x0,0x28)+P8(0x75d)+e9[P8(0x1fd)]):(e9['arr'][P8(0x4fc)](e0),G[P8(0x688)]+=e9[P8(0x529)][P8(0x1c8)],e7++);e8[P8(0x1c8)]&&(G[P8(0x189)]=(e7?'部分源失败:\x20':'')+e8[P8(0x5da)]('；'));}else G[P8(0x189)]=P8(0x318);}const e1=new Set(),e2=[];for(const eD of W)e1[P8(0x1cf)](eD['ip'])||(e1[P8(0x4c4)](eD['ip']),e2[P8(0x3b4)](eD));if(e2[P8(0x1c8)]<(H[P8(0x18c)]||0x14)){let eX=(H[P8(0x18c)]||0x14)-e2[P8(0x1c8)];try{const em=await Ve();for(const eP of em){if(eX<=0x0)break;e1[P8(0x1cf)](eP['ip'])||v(eP['ip'])&&(e1[P8(0x4c4)](eP['ip']),e2[P8(0x3b4)]({'ip':eP['ip'],'port':H[P8(0x564)]||eP[P8(0x564)]||0x1bb,'name':eP['name']||''}),eX--);}}catch(eb){}G[P8(0x1cd)]=(H[P8(0x18c)]||0x14)-e2[P8(0x1c8)]-eX;}if(!0x1!==H[P8(0x408)]&&e2[P8(0x1c8)]<(H[P8(0x18c)]||0x14)){const eq=(H[P8(0x18c)]||0x14)-e2[P8(0x1c8)],er=at(u,0x3*eq);let ep=0x0;for(const eC of er){if(ep>=eq)break;e1[P8(0x1cf)](eC)||(e1[P8(0x4c4)](eC),e2[P8(0x3b4)]({'ip':eC,'port':H[P8(0x564)]||0x1bb,'name':''}),ep++);}G[P8(0x252)]=ep;}return{'candidates':e2,'stats':G};}function Yt(H){const PX=V;return String(H)[PX(0x344)](/%/g,PX(0x1b1))[PX(0x344)](/#/g,PX(0x1c2))['replace'](/\?/g,PX(0x2b8))['replace'](/ /g,PX(0x51a));}function Qt(H,W,G,a){return(W?0x1:0x0)+(G?0x1:0x0)+(a?0x1:0x0)<=0x1?{'v':H,'t':H,'x':H}:{'v':H,'t':H+'.T','x':H+'.X'};}function Zt(H,W,G,J,e0={}){const Pm=V,e1=H['host'],e2=W[Pm(0x3bc)](':')&&!W['startsWith']('[')?'['+W+']':W,e3=!L[Pm(0x1cf)](Number(G)),e4=encodeURIComponent;let e5=_d(Pm(0x2cf))+Pm(0x2a5);e5+=e3?'&'+_d(Pm(0x6a4))+Pm(0x4c9)+e4(e1)+Pm(0x15f):'&'+_d(Pm(0x6a4))+Pm(0x2a5),e3&&H[Pm(0x5c1)]&&(e5+=Pm(0x5cb)),e5+=Pm(0xc4)+e4(e1);const e6=_d(Pm(0x40a))===e0[Pm(0x462)]&&e3;return e6?(e5+=Pm(0x625)+_d(Pm(0x40a))+Pm(0x1b0)+_d('c3RyZWFtLW9uZQ=='),e5+=Pm(0x6e9)+e4(JSON[Pm(0x251)](function(e7){const PP=V,e8=e7['uuid']||'';return{'xPaddingObfsMode':!0x0,'xPaddingMethod':PP(0x69d),'xPaddingPlacement':PP(0x299),'xPaddingHeader':e8[PP(0x14f)](0x1,0x7),'xPaddingKey':'_'+e8[PP(0x14f)](0x19,0x1f)};}(H)))):e5+='&'+_d(Pm(0x2c5)),e5+=Pm(0xbf)+e4('/'+H[Pm(0x347)]+(!e6&&e3?Pm(0x674):'')),H[Pm(0x68c)]&&(e5+='&'+_d('YWxwbg==')+'='+H[Pm(0x68c)][Pm(0x59c)](',')[Pm(0x12d)](e7=>e7[Pm(0x1df)]()[Pm(0x344)](/[&#=]/g,''))[Pm(0x1e1)](Boolean)[Pm(0x5da)](',')),H[Pm(0x210)]&&(e5+=Pm(0x19d)+e4((H[Pm(0x159)]||Pm(0x405))+'+'+(H[Pm(0x6f5)]||Pm(0x1d5)))),_d(Pm(0x160))+Pm(0x4b2)+H['uuid']+'@'+e2+':'+G+'?'+e5+'#'+Yt(J);}function te(H,W,G,J){const Pb=V,e0=H['host'],e1=W[Pb(0x3bc)](':')&&!W[Pb(0x263)]('[')?'['+W+']':W,e2=encodeURIComponent,e3=!L[Pb(0x1cf)](Number(G)),e4='/'+H[Pb(0x347)]+(e3?Pb(0x674):'');let e5=e3?_d(Pb(0x6a4))+Pb(0x4c9)+e2(e0)+Pb(0x1f2)+e2(e0)+'&'+_d(Pb(0x2c5))+'&path='+e2(e4):_d(Pb(0x6a4))+Pb(0x282)+e2(e0)+'&'+_d(Pb(0x2c5))+Pb(0xbf)+e2(e4);return H[Pb(0x5c1)]&&e3&&(e5+=Pb(0x5cb)),H['alpn']&&e3&&(e5+='&'+_d(Pb(0x2f8))+'='+H[Pb(0x68c)]['split'](',')['map'](e6=>e6[Pb(0x1df)]()[Pb(0x344)](/[&#=]/g,''))[Pb(0x1e1)](Boolean)[Pb(0x5da)](',')),H[Pb(0x210)]&&e3&&(e5+=Pb(0x19d)+e2((H[Pb(0x159)]||Pb(0x405))+'+'+(H[Pb(0x6f5)]||Pb(0x1d5)))),_d(Pb(0x4a8))+Pb(0x4b2)+(H[Pb(0x5ea)]||H[Pb(0x137)])+'@'+e1+':'+G+'?'+e5+'#'+Yt(J);}const ee=new Map(),ne=0x1b7740,re=new Map();function _cacheRequest(H){const Pq=V;return new Request(Pq(0xc9)+encodeURIComponent(String(H)));}async function _cacheRead(H,W){const Pr=V;try{if(Pr(0x556)==typeof caches||!caches[Pr(0x1fc)])return null;const G=await caches[Pr(0x1fc)]['match'](_cacheRequest(H));if(!G)return null;return Pr(0x4d9)===W?G[Pr(0x4d9)]():Pr(0x1a7)===W?G['text']():G[Pr(0x103)]();}catch(a){return null;}}function _cacheWrite(H,W,G,J,e0){const Pp=V;try{if(Pp(0x556)==typeof caches||!caches[Pp(0x1fc)])return;const e1=caches[Pp(0x1fc)][Pp(0x25d)](_cacheRequest(H),new Response(W,{'headers':{'Content-Type':G||Pp(0x518),'Cache-Control':Pp(0x5d7)+(J||0x708)}}))[Pp(0x2eb)](()=>{});e0&&Pp(0x4bf)==typeof e0['waitUntil']?e0[Pp(0x358)](e1):e1['catch'](()=>{});}catch(e2){}}function ae(H,W){const PC=V;if(!W||!W[PC(0x1c8)])return;const G=re[PC(0x30b)](H)||0x0;if(Date[PC(0x549)]()-G<ne)return;re[PC(0x43e)]>0xc8&&re['clear'](),re[PC(0x598)](H,Date[PC(0x549)]());const a=JSON[PC(0x251)]({'t':Date[PC(0x549)](),'ips':W['slice'](0x0,0x12c)});_cacheWrite(H,a,'application/json',0x708,Be&&Be[PC(0x6e8)]);}function oe(H,W,G){return new Promise(J=>{const Pw=V,e0=new AbortController(),e1=setTimeout(()=>e0[Pw(0x40e)](),G);fetch(H,Object['assign']({},W,{'signal':e0[Pw(0x4f5)]}))['then'](e2=>{clearTimeout(e1),J(e2);})[Pw(0x2eb)](()=>{clearTimeout(e1),J(null);});});}function se(H){const PQ=V,W=[];let G='';const J=e1=>/^[a-z][a-z0-9+.-]*:\/\//i['test'](e1),e0=e1=>/^\[[0-9a-f:]+\](?::\d{1,5})?(?:[?#].*)?$/i[PQ(0x6b1)](e1)||/^(?:\d{1,3}(?:\.\d{1,3}){3}|[a-z0-9](?:[a-z0-9-]*[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]*[a-z0-9])?)+)(?::\d{1,5})?(?:[?#].*)?$/i[PQ(0x6b1)](e1);for(const e1 of String(H||'')[PQ(0x59c)](/[\n;]+/)){for(const e2 of e1[PQ(0x59c)](',')){const e3=e2[PQ(0x1df)]();e3&&(G?J(e3)||e0(e3)?(W[PQ(0x3b4)](G),G=e3):e3[PQ(0x3bc)]('=')||/^[A-Za-z0-9]{1,6}$/[PQ(0x6b1)](e3)?G=G+','+e3:(W['push'](G),G=e3):G=e3);}G&&(W[PQ(0x3b4)](G),G='');}return W;}async function ie(H,W=0x64,G=0x12c,J=!0x1,e0=!0x0,e1=!0x1){const Pv=V,e2=se(H)[Pv(0x12d)](e9=>e9[Pv(0x344)](/^\*\./,'')),e3=Date[Pv(0x549)](),e4=[Pv(0x435),Pv(0x6d5)],e5=async(e9,eD,eX)=>{const PV=V;for(const em of e4)try{const eP=await oe(em+PV(0x749)+encodeURIComponent(e9)+PV(0x625)+eD,{'headers':{'accept':PV(0x3f8)}},0xfa0);if(!eP||!eP['ok'])continue;return((await eP[PV(0x103)]())[PV(0x257)]||[])['filter'](eb=>eb[PV(0x462)]===eX&&('A'===eD?/^\d+\.\d+\.\d+\.\d+$/['test'](eb[PV(0x60f)]):/^[0-9a-fA-F:]+$/[PV(0x6b1)](eb['data'])))['map'](eb=>eb[PV(0x60f)]);}catch(eb){}return[];},e6=await Promise[Pv(0x643)](e2[Pv(0x12d)](async e9=>{const Px=V;if(e9[Px(0x3bc)](Px(0x4b2))){if(e9[Px(0x263)](Px(0x4a7))){let eC=e9['slice'](0x6);if(/^[A-Za-z0-9+/=]+$/[Px(0x6b1)](eC)&&eC[Px(0x1c8)]%0x4==0x0)try{const ew=atob(eC);/^https?:\/\//i['test'](ew)&&(eC=ew);}catch(eQ){}/^https?:\/\//i[Px(0x6b1)](eC)||(eC=Px(0x221)+eC),e9=eC;}const eb='url:'+e9+(J?Px(0x400):'')+(e0?'':Px(0x5d8)),eq=Px(0xd0)+F(eb)[Px(0x14f)](0x0,0x18),er=ee[Px(0x30b)](eb);if(er&&e3-er['t']<0x927c0)return er[Px(0x4c6)][Px(0x14f)](0x0,W);const ep=await async function(ev){const Pl=V,eV=await _cacheRead(ev,Pl(0x103));return!eV||!Array[Pl(0x636)](eV[Pl(0x4c6)])||!eV[Pl(0x4c6)][Pl(0x1c8)]||Date[Pl(0x549)]()-(eV['t']||0x0)>ne?null:eV['ips'];}(eq);if(ep)return ee['set'](eb,{'t':e3,'ips':ep}),ep[Px(0x14f)](0x0,W);try{const ev=await oe(e9,{},0x1770);if(!ev||!ev['ok'])throw new Error(Px(0x5db));let eV=Ht(await ev[Px(0x4d9)]());if(/^[A-Za-z0-9+/=\s]{40,}$/['test'](eV[Px(0x14f)](0x0,0x7d0))&&eV['replace'](/\s+/g,'')[Px(0x1c8)]%0x4==0x0)try{const eg=atob(eV[Px(0x344)](/\s+/g,''));eV=Ht(Uint8Array[Px(0x4c2)](eg,eK=>eK[Px(0x74f)](0x0)));}catch(eK){}const ex=new Set(),el={},eh=[],eT=(eD=e9,C[Px(0x6b1)](String(eD||''))),eF=eH=>!e0||v(eH)||eT,ef=eV[Px(0x1df)]()[Px(0x59c)](/\r?\n/)[Px(0x12d)](eH=>eH[Px(0x1df)]())[Px(0x1e1)](Boolean);if(ef[Px(0x1c8)]>0x1&&ef[0x0][Px(0x3bc)](',')){const eH=ef[0x0][Px(0x59c)](',')['map'](eM=>eM[Px(0x1df)]()),ed=eH[Px(0x3bc)](Px(0x65e))&&eH[Px(0x3bc)]('端口'),eE=eH[Px(0x75b)](eM=>eM[Px(0x3bc)]('IP'))&&eH[Px(0x75b)](eM=>eM[Px(0x3bc)]('延迟'))&&eH[Px(0x75b)](eM=>eM[Px(0x3bc)](Px(0x443)));if(ed||eE){const eM=eH[Px(0x72d)](ec=>ec[Px(0x3bc)]('IP')),eI=eH[Px(0x1c9)]('端口'),eW=eH[Px(0x72d)](ec=>ec['includes']('延迟')),ey=eH[Px(0x72d)](ec=>ec[Px(0x3bc)](Px(0x443))),eR=eH[Px(0x1c9)]('国家')>-0x1?eH['indexOf']('国家'):eH['indexOf']('城市')>-0x1?eH[Px(0x1c9)]('城市'):eH[Px(0x1c9)](Px(0x289)),eG=eH[Px(0x1c9)](Px(0x581));for(const ec of ef[Px(0x14f)](0x1)){if(eh[Px(0x1c8)]>=W)break;const es=ec[Px(0x59c)](',')[Px(0x12d)](eu=>eu[Px(0x1df)]());if(-0x1!==eG&&es[eG]&&'true'!==es[eG]['toLowerCase']())continue;const ea=(es[eM]||'')[Px(0x499)](/(\[[0-9a-fA-F:]+\]|\d{1,3}(?:\.\d{1,3}){3})/);if(!ea)continue;const eU=ea[0x1][Px(0x344)](/^\[|\]$/g,''),ej=-0x1!==eI&&es[eI]?parseInt(es[eI]):0x1bb,ek=eU+':'+ej;if(ex[Px(0x1cf)](ek))continue;if(!eF(eU))continue;ex['add'](ek);let ez=-0x1!==eR&&es[eR]?es[eR]:'';ez||-0x1===eW||-0x1===ey||(ez=Px(0xc5)+(es[eW]||'')+Px(0x41e)+(es[ey]||'')+Px(0x41d)),ez?(el[ez]=(el[ez]||0x0)+0x1,eh[Px(0x3b4)]({'ip':eU,'port':ej,'name':ez+'-'+String(el[ez])[Px(0x4ea)](0x2,'0'),...eT?{'relay':!0x0}:{}})):eh[Px(0x3b4)]({'ip':eU,'port':ej,'name':'',...eT?{'relay':!0x0}:{}});}return ee[Px(0x598)](eb,{'t':e3,'ips':eh}),ae(eq,eh),eh[Px(0x14f)]();}}if(eV[Px(0x3bc)](Px(0x504))&&eV[Px(0x3bc)]('data-label')){for(const eu of eV[Px(0x499)](/<tr[\s\S]*?<\/tr>/g)||[]){if(eh[Px(0x1c8)]>=W)break;const eo={};for(const eO of eu[Px(0x499)](/<td[^>]*>[\s\S]*?<\/td>/g)||[]){const eN=eO[Px(0x499)](/data-label="([^"]*)"[^>]*>([\s\S]*?)<\/td>/);eN&&(eo[eN[0x1]]=eN[0x2]['replace'](/<[^>]+>/g,'')[Px(0x1df)]());}const eY=(eo[Px(0x355)]||'')[Px(0x499)](/(\d{1,3}(?:\.\d{1,3}){3})(?::(\d{1,5}))?/);if(!eY)continue;const eJ=eY[0x1],eS=eY[0x2]?parseInt(eY[0x2]):0x1bb,ei=eJ+':'+eS;if(ex[Px(0x1cf)](ei))continue;if(!eF(eJ))continue;ex['add'](ei);const eB=(eo[Px(0x324)]||eo[Px(0x289)]||'线路')['trim']();eB?(el[eB]=(el[eB]||0x0)+0x1,eh[Px(0x3b4)]({'ip':eJ,'port':eS,'name':eB+'-'+String(el[eB])[Px(0x4ea)](0x2,'0'),...eT?{'relay':!0x0}:{}})):eh[Px(0x3b4)]({'ip':eJ,'port':eS,'name':'',...eT?{'relay':!0x0}:{}});}return ee[Px(0x598)](eb,{'t':e3,'ips':eh}),ae(eq,eh),eh[Px(0x14f)]();}for(const eZ of eV['split'](/\r?\n/)){if(eh[Px(0x1c8)]>=W)break;const eL=eZ[Px(0x499)](_r0);if(!eL)continue;const eA=eL[0x1]['replace'](/^\[|\]$/g,''),D0=eL[0x2]?parseInt(eL[0x2]):0x1bb,D1=eA+':'+D0;if(ex['has'](D1))continue;if(!eF(eA))continue;ex[Px(0x4c4)](D1);let D2='';const D3=eZ[Px(0x1c9)]('#');if(D3>=0x0)try{D2=decodeURIComponent(eZ[Px(0x14f)](D3+0x1)['trim']());}catch(D4){D2=eZ['slice'](D3+0x1)[Px(0x1df)]();}D2?(el[D2]=(el[D2]||0x0)+0x1,eh[Px(0x3b4)]({'ip':eA,'port':D0,'name':D2+'-'+String(el[D2])['padStart'](0x2,'0'),...eT?{'relay':!0x0}:{}})):eh['push']({'ip':eA,'port':D0,'name':'',...eT?{'relay':!0x0}:{}});}for(const D5 of eV[Px(0x59c)](/\r?\n/)){if(eh[Px(0x1c8)]>=W)break;const D6=D5[Px(0x499)](/(\d{1,3}(?:\.\d{1,3}){3})(?::(\d{1,5}))?(?:#([^\r\n]*))?/);if(!D6){const Dm=D5['trim']()[Px(0x499)](/^(\*\.)?([a-z0-9](?:[a-z0-9-]*[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]*[a-z0-9])?)+)(?::(\d{1,5}))?(?:#([^\r\n]*))?$/i);if(!Dm||Dm[0x1])continue;const DP=Dm[0x2][Px(0x154)](),Db=Dm[0x3]?parseInt(Dm[0x3]):0x1bb,Dq=DP+':'+Db;if(ex[Px(0x1cf)](Dq))continue;ex[Px(0x4c4)](Dq);const Dr=(Dm[0x4]||'')[Px(0x1df)]();eh[Px(0x3b4)]({'ip':DP,'port':Db,'name':Dr||DP,...eT?{'relay':!0x0}:{}});continue;}const D7=D6[0x1],D8=D6[0x2]?parseInt(D6[0x2]):0x1bb,D9=D7+':'+D8;if(ex[Px(0x1cf)](D9))continue;if(!eF(D7))continue;ex[Px(0x4c4)](D9);const DD=(D6[0x3]||'')[Px(0x1df)]();if(DD&&!/[\u4e00-\u9fa5]/[Px(0x6b1)](DD)&&!DD['includes']('|')){eh['push']({'ip':D7,'port':D8,'name':DD,...eT?{'relay':!0x0}:{}});continue;}let DX='';if(D6[0x3]){const Dp=D6[0x3][Px(0x499)](/^\s*[\u4e00-\u9fa5]{2,5}\s+[A-Z]{2}/);if(Dp){const DC=Dp[0x0][Px(0x499)](/[\u4e00-\u9fa5]{2,5}/);DC&&(DX=DC[0x0]);}else{const Dw=D6[0x3]['split']('|')[Px(0x12d)](Dv=>Dv[Px(0x1df)]()),DQ=Dw[Px(0x5b8)](Dv=>/^[\u4e00-\u9fa5]{2,5}\s+[A-Z]{2}$/[Px(0x6b1)](Dv));if(DQ){const Dv=DQ[Px(0x499)](/[\u4e00-\u9fa5]{2,5}/);Dv&&(DX=Dv[0x0]);}else{const DV=Dw[Px(0x5b8)](Dx=>/^[\u4e00-\u9fa5]{2,5}$/[Px(0x6b1)](Dx)&&!/^(地区随机|随机优选|官方优选|优选|CF优选)$/['test'](Dx));if(DV)DX=DV;else{const Dx=D6[0x3][Px(0x499)](/\b([A-Z]{2})\b/);Dx&&(DX=y[Dx[0x1]]||Dx[0x1]);}}}}DX?(el[DX]=(el[DX]||0x0)+0x1,eh['push']({'ip':D7,'port':D8,'name':DX+'-'+String(el[DX])[Px(0x4ea)](0x2,'0'),...eT?{'relay':!0x0}:{}})):eh[Px(0x3b4)]({'ip':D7,'port':D8,'name':'',...eT?{'relay':!0x0}:{}});}if(!eh[Px(0x1c8)]&&J){const Dl=(String(e9)[Px(0x499)](/\/([A-Z]{2})\//)||[])[0x1]||String(e9)[Px(0x344)](/^https?:\/\//,'')[Px(0x59c)]('.')[0x0];y[Dl]&&at(e1?m:f,W)[Px(0x4fc)]((Dh,DT)=>eh[Px(0x3b4)]({'ip':Dh,'port':0x1bb,'name':y[Dl]+'-'+String(DT+0x1)[Px(0x4ea)](0x2,'0')}));}return ee[Px(0x598)](eb,{'t':e3,'ips':eh}),ae(eq,eh),eh[Px(0x14f)]();}catch(Dh){const DT=ee[Px(0x30b)](eb);return DT&&DT[Px(0x4c6)]&&DT['ips'][Px(0x1c8)]?DT[Px(0x4c6)][Px(0x14f)](0x0,W):[];}}var eD;if(!e9[Px(0x3bc)]('://')&&!/^[a-z0-9.-]+\.[a-z]{2,}$/i['test'](e9)){const DF=e9[Px(0x499)](/^(\[?[0-9a-fA-F:]+\]?|\d{1,3}(?:\.\d{1,3}){3}|[a-z0-9.-]+\.[a-z]{2,})(?::(\d{1,5}))?(?:#([^\r\n]*))?$/i);if(!DF)return[];const Df=e9[Px(0x1c9)]('#'),Dg=z(Df>=0x0?e9[Px(0x14f)](0x0,Df):e9,0x1bb),DK=Dg[Px(0x234)][Px(0x344)](/^\[|\]$/g,''),DH=Dg[Px(0x564)],Dd=(DF[0x3]||'')[Px(0x1df)](),DE=Y(DK);if(!DE&&!/^[a-z0-9.-]+\.[a-z]{2,}$/i[Px(0x6b1)](DK))return[];if(e0&&DE&&!v(DK))return[];if(Dd)return[{'ip':DK,'port':DH,'name':Dd}];if(DE)return[{'ip':DK,'port':DH,'name':''}];}const eX=ee[Px(0x30b)](e9);if(eX&&e3-eX['t']<0x927c0)return eX[Px(0x4c6)][Px(0x14f)](0x0,W)[Px(0x12d)]((DM,DI)=>({'ip':DM,'port':0x1bb,'name':e9+'-'+(DI+0x1)}));const em=await e5(e9,'A',0x1);let eP=e0?em['filter'](v):em;if(e1){const DM=await e5(e9,'AAAA',0x1c);eP=[...new Set(em[Px(0x774)](DM))][Px(0x1e1)](DI=>!e0||v(DI));}return eP=eP[Px(0x14f)](0x0,W),eP[Px(0x1c8)]?(ee[Px(0x598)](e9,{'t':e3,'ips':eP}),eP['map']((DI,DW)=>({'ip':DI,'port':0x1bb,'name':e9+'-'+(DW+0x1)}))):eX&&eX[Px(0x4c6)]&&eX['ips'][Px(0x1c8)]?eX[Px(0x4c6)][Px(0x14f)](0x0,W)[Px(0x12d)]((DI,DW)=>({'ip':DI,'port':0x1bb,'name':e9+'-'+(DW+0x1)})):[];})),e7=[];let e8=0x0;for(;e8<G;){let e9=!0x1;for(const eD of e6){if(e8>=G)break;eD['length']&&(e7['push'](eD[Pv(0x3da)]()),e8++,e9=!0x0);}if(!e9)break;}return e7;}async function le(H,W=0x320,G=null){const Ph=V,J=[],e0=new Set(),e1=H[Ph(0x21b)]&&H['optimizer'][Ph(0x65b)]||'',e2=H[Ph(0x1e1)]&&H[Ph(0x1e1)][Ph(0x20c)]||[],e3=0x1===e2[Ph(0x1c8)]&&Ph(0x67c)===e2[0x0],e4=ve(H),e5=e3?g:e4?[..._CURATED_V4_CIDRS,...g]:_CURATED_V4_CIDRS,e6=Ph(0x688)===e1&&!(H[Ph(0x21b)]&&H['optimizer'][Ph(0x16c)]),e7=Ph(0x688)===e1||Ph(0x285)===e1,e8={'f':!!H['freeCpu'],'b':0x0,'cap':0x10000,'n':0x78},e9=(eb,eq,er,ep)=>{const PT=V,eC=J[PT(0x1c8)];((ew,eQ,ev,eV)=>{const PF=V;if(J[PF(0x1c8)]>=W||e8['f']&&(e8['b']>=e8[PF(0x4f2)]||J[PF(0x1c8)]>=e8['n']))return;if(Y(ew)&&!v(ew)&&!e6&&!eV)return;const ex=Number(eQ)||0x1bb,el=ew+'|'+ex;if(e0[PF(0x1cf)](el))return;if(H[PF(0x177)]&&L[PF(0x1cf)](ex))return;e0[PF(0x4c4)](el);const eh=!L[PF(0x1cf)](ex),eT=Qt(ev,!!H[PF(0x596)],!!H[PF(0x292)],!(!H[PF(0x758)]||!eh));H[PF(0x596)]&&J['push'](Zt(H,ew,ex,eT['v'])),H[PF(0x292)]&&eh&&J[PF(0x3b4)](te(H,ew,ex,eT['t'])),H[PF(0x758)]&&eh&&J['push'](Zt(H,ew,ex,eT['x'],{'type':_d(PF(0x40a))}));})(eb,Number(eq)||0x1bb,er,ep);if(e8['f']){for(let ew=eC;ew<J[PT(0x1c8)];ew++)e8['b']+=J[ew]['length'];}};if(Ph(0x285)===e1){let eb=Math['min'](Math[Ph(0x60a)](parseInt(H[Ph(0x21b)][Ph(0x22d)])||0x10,0x1),Math[Ph(0x6b7)](0x63,W));if(H['nodeLimit']){const ew=parseInt(H[Ph(0x70c)])||0x0;ew>0x0&&(eb=Math[Ph(0x6b7)](eb,ew));}e8['f']&&(eb=Math[Ph(0x6b7)](eb,e8['n']));const eq=(H[Ph(0x596)]?0x1:0x0)+(H[Ph(0x292)]?0x1:0x0)+(H[Ph(0x758)]?0x1:0x0)||0x1;let er=0x0;const ep=at(e5,0x3*Math[Ph(0x3b5)](eb/eq));let eC=ep;G&&(eC=[...ep['filter'](eQ=>!G['has'](eQ)),...ep['filter'](eQ=>G[Ph(0x1cf)](eQ))]);for(const eQ of eC){if(er>=eb)break;const ev=Qt((eQ[Ph(0x3bc)](':')?Ph(0x6ee):Ph(0x44f))+String(er+0x1)[Ph(0x4ea)](0x2,'0'),!!H['enableVless'],!!H['enableTrojan'],!!H[Ph(0x758)]);if(H['enableVless']&&(J[Ph(0x3b4)](Zt(H,eQ,0x1bb,ev['v'])),er++),er>=eb)break;if(H[Ph(0x292)]&&(J['push'](te(H,eQ,0x1bb,ev['t'])),er++),er>=eb)break;H[Ph(0x758)]&&(J[Ph(0x3b4)](Zt(H,eQ,0x1bb,ev['x'],{'type':_d(Ph(0x40a))})),er++);}return J;}const eD=se(H[Ph(0x375)])[Ph(0x1e1)](eV=>!eV[Ph(0x3bc)](Ph(0x4b2)));eD['forEach']((eV,ex)=>{const Pf=V,el=eV[Pf(0x1c9)]('#'),eh=(el>=0x0?eV[Pf(0x14f)](0x0,el):eV)['trim'](),eT=(el>=0x0?eV[Pf(0x14f)](el+0x1):'')[Pf(0x1df)](),eF=z(eh,0x1bb);eF[Pf(0x234)][Pf(0x263)]('*.')||e9(eF[Pf(0x234)],eF[Pf(0x564)],eT||(e6&&Y(eF[Pf(0x234)])?eF[Pf(0x234)][Pf(0x3bc)](':')?Pf(0x212):Pf(0x194):Pf(0x61d))+String(ex+0x1)['padStart'](0x2,'0'));});let eX=H[Ph(0x13b)]||[];if(e4&&!e3&&eX['length']>0x1){const eV=[],ex=[];for(const eT of eX)(String(eT['ip'])[Ph(0x1c9)](':')>=0x0?ex:eV)['push'](eT);const el=[],eh=Math[Ph(0x60a)](eV['length'],ex[Ph(0x1c8)]);for(let eF=0x0;eF<eh;eF++)eF<eV[Ph(0x1c8)]&&el[Ph(0x3b4)](eV[eF]),eF<ex[Ph(0x1c8)]&&el[Ph(0x3b4)](ex[eF]);eX=el;}if(eX[Ph(0x4fc)]((ef,eg)=>{const Pg=V,eK=/^[A-Za-z0-9.-]+\.[A-Za-z]{2,}-\d+$/[Pg(0x6b1)](ef[Pg(0x3f1)]||''),eH=ef[Pg(0x3f1)]&&!eK?ef[Pg(0x3f1)]:(String(ef['ip'])[Pg(0x3bc)](':')?Pg(0x212):'优选IPv4-')+String(eg+0x1)[Pg(0x4ea)](0x2,'0');e9(ef['ip'],ef[Pg(0x564)]||0x1bb,eH,!0x0===ef[Pg(0x17f)]||Y(ef['ip'])&&!v(ef['ip']));}),!('custom'!==e1||H[Ph(0x21b)]&&H[Ph(0x21b)][Ph(0x16c)]))return J;eD['length']||(H[Ph(0x13b)]||[])[Ph(0x1c8)]||(ot(E[Ph(0x5da)]('\x0a'))[Ph(0x4fc)](ef=>e9(ef['ip'],ef['port']||0x1bb,ef[Ph(0x3f1)]||'0')),A[Ph(0x4fc)]((ef,eg)=>e9(ef,0x1bb,Ph(0x34f)+String(eg+0x1)[Ph(0x4ea)](0x2,'0'))));const em=Math[Ph(0x6b7)](Math[Ph(0x60a)](parseInt(H[Ph(0x21b)]&&H[Ph(0x21b)][Ph(0x4df)]||0x0)||0x0,0x0),0x1388),eP=Math[Ph(0x6b7)](em,W)-e0['size'];if(eP>0x0){const ef=G?T[Ph(0x1e1)](ed=>!G[Ph(0x1cf)](ed)):T[Ph(0x14f)](),eg=at(e5,0x3*eP);let eK=[...ef,...G?eg[Ph(0x1e1)](ed=>!G['has'](ed)):eg];if(eK[Ph(0x1c8)]<eP&&(eK=[...T,...eg]),eK[Ph(0x1c8)]>0x0)eK=eK['slice'](0x0,eP);let eH=0x0;for(const ed of eK){if(J[Ph(0x1c8)]>=W||e8['f']&&e8['b']>=e8[Ph(0x4f2)])break;eH++,e9(ed,0x1bb,Ph(0x1cc)+String(eH)[Ph(0x4ea)](0x2,'0'));}}return J;}function ce(H){const PK=V,W=H[PK(0x1c9)]('@'),G=H[PK(0x1c9)]('?',W),o=G>W&&W>=0x0?H[PK(0x14f)](W+0x1,G):H['slice'](W+0x1);if(o[PK(0x263)]('[')){const e0=o[PK(0x1c9)](']'),e1=e0>0x0?o[PK(0x14f)](0x1,e0):o,e2=o[PK(0x14f)](e0+0x1),e3=e2[PK(0x263)](':')?parseInt(e2[PK(0x14f)](0x1)):0x1bb;return{'host':e1,'port':isNaN(e3)?0x1bb:e3};}const J=o[PK(0x36d)](':');if(J>0x0){const e4=parseInt(o[PK(0x14f)](J+0x1));return{'host':o[PK(0x14f)](0x0,J),'port':isNaN(e4)?0x1bb:e4};}return{'host':o,'port':0x1bb};}function pe(H,W){const PH=V,G=H[PH(0x1c9)]('?');if(G<0x0)return null;const o=H[PH(0x1c9)]('#',G),J=o>G?H['slice'](G+0x1,o):H[PH(0x14f)](G+0x1);for(const e0 of J[PH(0x59c)]('&')){const e1=e0['indexOf']('=');if((e1>0x0?e0[PH(0x14f)](0x0,e1):e0)===W)return e1>0x0?decodeURIComponent(e0[PH(0x14f)](e1+0x1)):'';}return null;}function de(H,W){const Pd=V,{host:G,port:J}=ce(H),e0=G,e1=H[Pd(0x1c9)]('#');let e2='节点'+(W+0x1);if(e1>=0x0)try{e2=decodeURIComponent(H[Pd(0x14f)](e1+0x1))||e2;}catch(e6){}const e3=H[Pd(0x1c9)]('@');let e4='';if(e3>=0x0){const e7=H[Pd(0x1c9)](Pd(0x4b2)),e8=e7>=0x0?e7+0x3:0x0;try{e4=decodeURIComponent(H[Pd(0x14f)](e8,e3));}catch(e9){e4=H[Pd(0x14f)](e8,e3);}}const e5=H['startsWith'](_d(Pd(0x4a8))+Pd(0x4b2));return{'srv':e0,'prt':J,'name':e2,'user':e4,'isTrojan':e5,'tls':e5||'tls'===(pe(H,'security')||'tls')};}const ue={'HK':['HK','香港'],'TW':['TW','台湾'],'US':['US','美国'],'SG':['SG','新加坡'],'JP':['JP','日本'],'KR':['KR','韩国'],'DE':['DE','德国']},fe={'移动':['移动','CM',Ds(0x10b)],'联通':['联通','CU',Ds(0x2a7)],'电信':['电信','CT',Ds(0x11e)]},he=['移动','联通','电信'],me=[Ds(0x2d3),Ds(0x67c)];function ge(H,W){const PE=V;if(!W||!W[PE(0x452)]&&!W['ipType']&&!W[PE(0x2c9)])return H;const G=W[PE(0x452)]||PE(0x643),J=W[PE(0x20c)]||me,e0=W[PE(0x2c9)]||he,e1=H[PE(0x12d)](e5=>{const PM=V,{host:e6}=ce(e5);let e7='';try{const e8=e5[PM(0x1c9)]('#');e8>=0x0&&(e7=decodeURIComponent(e5[PM(0x14f)](e8+0x1)||''));}catch(e9){e7='';}return{'host':e6,'name':e7,'up':e7[PM(0x183)]()};}),e2=e0[PE(0x1c8)]>0x0&&e0[PE(0x1c8)]<he['length'],e3=(e5,e6,e7)=>{const PI=V,e8=Array['isArray'](e5)?0x0===e5['length']||e5[PI(0x3bc)](PI(0x643))?null:e5[PI(0x777)](eD=>ue[eD]||[]):PI(0x643)!==e5?ue[e5]||[]:null,e9=e7[PI(0x1c8)]>0x0&&e7[PI(0x1c8)]<he[PI(0x1c8)];return H[PI(0x1e1)]((eD,eX)=>{const PW=V,em=e1[eX],eP=em[PW(0x234)][PW(0x1c9)](':')>=0x0;if(!em[PW(0x3f1)])return!0x1;if(e8&&!e8['some'](eb=>em['up']['includes'](eb[PW(0x183)]()))&&!/^(?:优选IP|优选IPv4|优选IPv6|优选域名|域名|内置优选IP|内置优选IPv6|内置优选域名)-\d+/[PW(0x6b1)](em[PW(0x3f1)])&&PW(0x5e9)!==em[PW(0x3f1)]&&!/^(?:移动|联通|电信)优选(?:IPv[46])?-\d+/[PW(0x6b1)](em[PW(0x3f1)]))return!0x1;if(0x1===e6[PW(0x1c8)]){if(PW(0x2d3)===e6[0x0]&&eP)return!0x1;if(PW(0x67c)===e6[0x0]&&!eP)return!0x1;}return!(e9&&!e7[PW(0x75b)](eb=>(fe[eb]||[eb])[PW(0x75b)](eq=>em['up'][PW(0x3bc)](eq['toUpperCase']()))));});};let e4=e3(G,J,e0);return e2&&!e4[PE(0x1c8)]?[]:(e4[PE(0x1c8)]||(e4=e3(G,J,he)),e4[PE(0x1c8)]||(e4=e3(PE(0x643),J,he)),e4);}function be(H){const Py=V;try{let W=ce(H)[Py(0x234)]||'';return'['===W[Py(0x4b4)](0x0)&&(W=W[Py(0x14f)](0x1,W[Py(0x1c9)](']')>0x0?W[Py(0x1c9)](']'):void 0x0)),W[Py(0x1c9)](':')>=0x0;}catch(n){return!0x1;}}function ve(H){const PR=V,W=H&&H[PR(0x1e1)]&&H[PR(0x1e1)][PR(0x20c)]||[];if(!W[PR(0x3bc)](PR(0x67c)))return!0x1;if(0x1===W[PR(0x1c8)])return!0x0;const G=H&&H[PR(0x55b)]||PR(0x114);return PR(0x39b)===G||PR(0x2c3)===G;}function ye(H,W,G){const Pn=V,J=W&&W['ipv6Mode']||Pn(0x114);if(G||Pn(0x2c3)===J||Pn(0x197)===J)return H;const e0=[],e1=[];for(const e3 of H)(be(e3)?e0:e1)[Pn(0x3b4)](e3);if(Pn(0x114)===J)return e1;if(!e0[Pn(0x1c8)]||H[Pn(0x1c8)]<0x2)return H;const e2=Math[Pn(0x60a)](0x1,Math[Pn(0x6b7)](e0['length'],0x28,Math[Pn(0x5d3)](0.1*e1[Pn(0x1c8)])));return e1[Pn(0x1c8)]?e1['concat'](e0[Pn(0x14f)](0x0,e2)):H;}const xe=/^(?:优选IP-S\d|内置·保底-|隧道前置-)/;function we(H){const PG=V;try{const W=H[PG(0x1c9)]('#');return!(W<0x0)&&xe[PG(0x6b1)](decodeURIComponent(H[PG(0x14f)](W+0x1)||''));}catch(n){return!0x1;}}function ke(H){const Pc=V;for(let W=H[Pc(0x1c8)]-0x1;W>0x0;W--){const G=Math[Pc(0x5d3)](Math[Pc(0x285)]()*(W+0x1)),a=H[W];H[W]=H[G],H[G]=a;}return H;}function _blockedPublicTarget(H){const Ps=V,W=String(H||'')['trim']()['toLowerCase']()['replace'](/^\[|\]$/g,'');if(!W||Ps(0x187)===W||'metadata'===W||W[Ps(0x326)](Ps(0x4d6))||W[Ps(0x326)](Ps(0x134))||W[Ps(0x326)](Ps(0x585)))return!0x0;const G=e8=>{if(e8['some'](eX=>eX>0xff))return!0x0;const e9=e8[0x0],eD=e8[0x1];return 0x0===e9||0xa===e9||0x7f===e9||0xa9===e9&&0xfe===eD||0xac===e9&&eD>=0x10&&eD<=0x1f||0xc0===e9&&0xa8===eD||0xc0===e9&&0x0===eD&&0x0===e8[0x2]||0x64===e9&&eD>=0x40&&eD<=0x7f||0xc6===e9&&(0x12===eD||0x13===eD)||e9>=0xe0;};if(W[Ps(0x1c9)](':')<0x0){const e8=W[Ps(0x499)](/^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/);return e8?G(e8[Ps(0x14f)](0x1)[Ps(0x12d)](Number)):/(^|\.)(\d+|0x[0-9a-f]+)$/[Ps(0x6b1)](W);}let o=W,J=[];const e0=o[Ps(0x499)](/^(.*:)(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/);if(e0){const e9=e0['slice'](0x2)[Ps(0x12d)](Number);if(e9[Ps(0x75b)](eD=>eD>0xff))return!0x0;o=e0[0x1]+(e9[0x0]<<0x8|e9[0x1])[Ps(0x165)](0x10)+':'+(e9[0x2]<<0x8|e9[0x3])[Ps(0x165)](0x10);}const e1=o['split']('::');if(e1[Ps(0x1c8)]>0x2)return!0x0;const e2=e1[0x0]?e1[0x0][Ps(0x59c)](':'):[],e3=0x2===e1[Ps(0x1c8)]&&e1[0x1]?e1[0x1][Ps(0x59c)](':'):[];let e4;if(0x2===e1[Ps(0x1c8)]){const eD=0x8-e2[Ps(0x1c8)]-e3['length'];if(eD<0x1)return!0x0;e4=e2[Ps(0x774)](Array(eD)[Ps(0x20b)]('0'),e3);}else e4=e2;if(0x8!==e4[Ps(0x1c8)])return!0x0;const e5=e4[Ps(0x12d)](eX=>/^[0-9a-f]{1,4}$/[Ps(0x6b1)](eX)?parseInt(eX,0x10):-0x1);if(e5['some'](eX=>eX<0x0))return!0x0;const e6=(eX,em)=>G([eX>>0x8,0xff&eX,em>>0x8,0xff&em]);if(e5[Ps(0x6cb)](eX=>0x0===eX)||e5[Ps(0x14f)](0x0,0x7)['every'](eX=>0x0===eX)&&0x1===e5[0x7])return!0x0;if(e5['slice'](0x0,0x5)['every'](eX=>0x0===eX)&&(0xffff===e5[0x5]||0x0===e5[0x5]))return e6(e5[0x6],e5[0x7]);if(0x64===e5[0x0]&&0xff9b===e5[0x1]&&e5[Ps(0x14f)](0x2,0x6)['every'](eX=>0x0===eX))return e6(e5[0x6],e5[0x7]);if(0x2002===e5[0x0])return e6(e5[0x1],e5[0x2]);const e7=e5[0x0];return(0xffc0&e7)===0xfe80||(0xffc0&e7)===0xfec0||(0xfe00&e7)===0xfc00||(0xff00&e7)===0xff00;}async function _subUserinfo(H,W){const Pa=V;try{const G=await Promise[Pa(0x70f)]([gt(H,W),new Promise(e3=>setTimeout(()=>e3(null),0x9c4))]);if(!G||!G[Pa(0x38d)]||G[Pa(0x754)]||!G[Pa(0x382)]||Pa(0x30a)!=typeof G[Pa(0x2b1)]||!(G['limit']>0x0))return'';const a=1048.576,o=Math['round']((G[Pa(0x382)]['pages']||0x0)*a),J=Math['round']((G[Pa(0x382)][Pa(0x4c7)]||0x0)*a),e0=Math[Pa(0x248)](G['limit']*a),e1=new Date(),e2=Math[Pa(0x5d3)](Date['UTC'](e1[Pa(0x119)](),e1[Pa(0x2f4)](),e1[Pa(0x63c)]()+0x1)/0x3e8);return Pa(0x18b)+o+Pa(0x6b0)+J+Pa(0xe0)+e0+Pa(0x3e8)+e2;}catch(e3){return'';}}function _crAuto(H){const PU=V,W=[];try{let n;if(n=/^https:\/\/github\.com\/([^/]+)\/([^/]+)\/raw\/([^/]+)\/(.+)$/[PU(0x13c)](H))W['push'](PU(0x66a)+n[0x1]+'/'+n[0x2]+'/'+n[0x3]+'/'+n[0x4],PU(0x29e)+n[0x1]+'/'+n[0x2]+'@'+n[0x3]+'/'+n[0x4]);else{if(n=/^https:\/\/raw\.githubusercontent\.com\/([^/]+)\/([^/]+)\/([^/]+)\/(.+)$/['exec'](H))W[PU(0x3b4)](PU(0x29e)+n[0x1]+'/'+n[0x2]+'@'+n[0x3]+'/'+n[0x4]);else{if(n=/^https:\/\/cdn\.jsdelivr\.net\/gh\/([^/]+)\/([^@/]+)@([^/]+)\/(.+)$/[PU(0x13c)](H))W[PU(0x3b4)](PU(0x66a)+n[0x1]+'/'+n[0x2]+'/'+n[0x3]+'/'+n[0x4]);}}}catch(G){}return W;}function _crUrls(H){const Pj=V,W=[H[Pj(0x49f)]][Pj(0x774)](Array['isArray'](H['fallbackUrls'])?H[Pj(0x4cf)]:[],_crAuto(H[Pj(0x49f)])),n=new Set(),G=[];for(const J of W)J&&!n[Pj(0x1cf)](J)&&(n[Pj(0x4c4)](J),G['push'](J));return G;}async function _raceDirect(H,W,G){const Pz=V,o=e7=>e7&&e7['readable']?e7:null,J=e7=>{const Pk=V;try{e7&&e7[Pk(0x753)]&&e7[Pk(0x753)]();}catch(e8){}},e0=Promise[Pz(0x52c)]()[Pz(0x273)](H)[Pz(0x273)](o,()=>null);let e1=null;const e2=()=>e1||(e1=Promise['resolve']()['then'](W)['then'](o,()=>null));let e3=null;const e4=new Promise(e7=>{const Pu=V;e3=setTimeout(()=>e7(Pu(0x258)),G);}),e5=await Promise[Pz(0x70f)]([e0,e4]);if(e3&&(clearTimeout(e3),e3=null),e5&&'__G__'!==e5)return e5;if(null===e5)return await e2();const e6=e2();return await new Promise(e7=>{const Po=V;let e8=0x2,e9=null;const eD=eX=>{eX&&(e9?J(eX):(e9=eX,e7(eX))),0x0!==--e8||e9||e7(null);};e0['then'](eD),e6[Po(0x273)](eD);});}function _cleanHosts(H){const PY=V,W=Array['isArray'](H)?H:String(H||'')[PY(0x59c)](/[\n,;、]+/),n=[],G=new Set();for(let J of W){J=String(J||'')[PY(0x1df)]()[PY(0x154)]()['replace'](/^https?:\/\//,'')[PY(0x59c)]('/')[0x0][PY(0x59c)](':')[0x0];if(!J||J[PY(0x1c9)]('.')<0x1||G[PY(0x1cf)](J)||!/^[a-z0-9]([a-z0-9._-]{0,251}[a-z0-9])?$/[PY(0x6b1)](J))continue;G[PY(0x4c4)](J),n[PY(0x3b4)](J);if(n[PY(0x1c8)]>=0x14)break;}return n;}function _nodeHost(H,W){const PJ=V;try{return pe(H,PJ(0x234))||pe(H,PJ(0x1d6))||W;}catch(n){return W;}}function _assignHosts(H,W){const PS=V,n=W&&W[PS(0x4ac)];if(!Array['isArray'](n)||n[PS(0x1c8)]<0x2||!W[PS(0x234)])return H;const G=encodeURIComponent(W['host']),a=new RegExp(PS(0x5e3)+G[PS(0x344)](/[.*+?^${}()|[\]\\]/g,PS(0x422))+PS(0x535),'g');return H['map']((o,J)=>{const Pi=V,e0=encodeURIComponent(n[J%n[Pi(0x1c8)]]);return e0===G?o:String(o)[Pi(0x344)](a,'$1'+e0);});}function _subName(H){const PB=V,W=String(H&&H[PB(0x75c)]||'')[PB(0x344)](/[\u0000-\u001f\u007f\\/:*?"<>|]/g,'\x20')[PB(0x344)](/\s+/g,'\x20')[PB(0x1df)]()[PB(0x14f)](0x0,0x28);return W||__B;}function _cdName(H,W){const PO=V,n=String(H)[PO(0x14f)](String(W)[PO(0x1c8)]),G=/^[\x20-\x7e]+$/['test'](W)?H:__B+n,J=encodeURIComponent(H)['replace'](/['()*]/g,e0=>'%'+e0['charCodeAt'](0x0)[PO(0x165)](0x10)[PO(0x183)]());return PO(0x4e6)+String(G)[PO(0x344)](/"/g,'')+PO(0x193)+J;}function _b64u(H){const PN=V,W=new TextEncoder()[PN(0x4b3)](String(H));let n='';for(let G=0x0;G<W['length'];G+=0x2000)n+=String[PN(0x395)][PN(0xdb)](null,W[PN(0x304)](G,G+0x2000));return btoa(n);}const _REGO=['香港','台湾','日本','美国',Ds(0x3d1),'韩国','德国','印度'];function _ordRegion(H){const PZ=V;if(!H||H[PZ(0x1c8)]<0x2)return H;const W=new Map(),n=H[PZ(0x12d)](function(G,a){const PL=V;let o='';try{o=de(G,0x0)[PL(0x3f1)]||'';}catch(e1){o='';}const J=Ce(o);let e0=0x2710;if(J){const e2=_REGO[PL(0x1c9)](J);if(e2>=0x0)e0=e2;else W[PL(0x1cf)](J)||W[PL(0x598)](J,_REGO[PL(0x1c8)]+W[PL(0x43e)]),e0=W[PL(0x30b)](J);}return{'u':G,'k':e0,'i':a};});return n[PZ(0x1ed)](function(G,o){return G['k']-o['k']||G['i']-o['i'];}),n[PZ(0x12d)](function(G){return G['u'];});}function _ordList(H,W){const PA=V;if(!H||H[PA(0x1c8)]<0x2||!Array[PA(0x636)](W)||!W[PA(0x1c8)])return H;const n=new Map();W[PA(0x4fc)](function(J,e0){const b0=V;J=String(J||'')[b0(0x154)](),J&&!n[b0(0x1cf)](J)&&n[b0(0x598)](J,e0);});const G=[],a=[];H['forEach'](function(J,e0){const b1=V;let e1='';try{e1=String(ce(J)['host']||'')[b1(0x154)]();}catch(e2){e1='';}n[b1(0x1cf)](e1)&&(G[b1(0x3b4)](e0),a[b1(0x3b4)]({'u':J,'p':n['get'](e1),'i':e0}));});if(a[PA(0x1c8)]<0x2)return H;a[PA(0x1ed)](function(J,e0){return J['p']-e0['p']||J['i']-e0['i'];});const o=H[PA(0x14f)]();for(let J=0x0;J<G['length'];J++)o[G[J]]=a[J]['u'];return o;}function Ie(H){const b2=V;if('boolean'==typeof H||'number'==typeof H)return String(H);const W=String(H);return/^[\w.\-/\u4e00-\u9fa5]+$/[b2(0x6b1)](W)?W:JSON[b2(0x251)](W);}function Pe(H,W){const b3=V,G='\x20'[b3(0x479)](W);return String(H||'')[b3(0x59c)]('\x0a')[b3(0x12d)](a=>G+(a||''));}function Ce(H){const b4=V,W=String(H||'');if(!W)return'';if(W[b4(0x1c9)](b4(0x245))>=0x0)return'印尼';let G='';for(const o in y){const J=y[o];J[b4(0x1c8)]>G['length']&&W[b4(0x1c9)](J)>=0x0&&(G=J);}if(G)return G;const a=W[b4(0x183)]()['match'](/[A-Z]{2,3}/g)||[];for(const e0 of a)if(k[e0])return k[e0];return'';}function _frNode(H){const b5=V;try{const W=String(H[b5(0x230)]||''),n=W[b5(0x59c)](/[\n\r]+/)[b5(0x12d)](function(ep){const b6=V;return ep[b6(0x1df)]();})['filter'](Boolean)[0x0];if(!n)return null;const G=/^([A-Za-z0-9]+):\/\/([\s\S]*)$/[b5(0x13c)](n);if(!G)return null;const a=G[0x1][b5(0x154)]();let J=G[0x2],e0=b5(0x531);const e1=J[b5(0x1c9)]('#');if(e1>=0x0){try{e0=decodeURIComponent(J[b5(0x14f)](e1+0x1))||e0;}catch(ep){}J=J[b5(0x14f)](0x0,e1);}const e2={},e3=J['indexOf']('?');e3>=0x0&&(J[b5(0x14f)](e3+0x1)['split']('&')[b5(0x4fc)](function(eC){const b7=V,ew=eC[b7(0x59c)]('=');if(!ew[0x0])return;try{e2[decodeURIComponent(ew[0x0])[b7(0x154)]()]=decodeURIComponent((ew[0x1]||'')[b7(0x344)](/\+/g,'\x20'));}catch(eQ){}}),J=J[b5(0x14f)](0x0,e3));if(('ss'===a||a===_d('c2hhZG93c29ja3M='))&&J['indexOf']('@')<0x0)try{let eC=J['replace'](/-/g,'+')[b5(0x344)](/_/g,'/');while(eC[b5(0x1c8)]%0x4)eC+='=';const ew=atob(eC);if(ew[b5(0x1c9)]('@')>0x0)J=ew;}catch(eQ){}const e4=J[b5(0x36d)]('@'),e5=e4>=0x0?J[b5(0x14f)](e4+0x1):J,e6=e4>=0x0?J['slice'](0x0,e4):'',e7=/^\[([^\]]+)\]:(\d+)$/[b5(0x13c)](e5)||/^([^:]+):(\d+)$/[b5(0x13c)](e5);if(!e7)return null;const e8=e7[0x1],e9=parseInt(e7[0x2],0xa);if(!e8||!(e9>0x0&&e9<0x10000))return null;let eD='',eX='';if(e6){const ev=e6[b5(0x1c9)](':');ev>=0x0?(eD=e6['slice'](0x0,ev),eX=e6[b5(0x14f)](ev+0x1)):eD=e6;}const em=function(eV){try{return decodeURIComponent(eV);}catch(ex){return eV;}};eD=em(eD),eX=em(eX);const eP=String(e2[_d(b5(0x255))]||'')[b5(0x154)](),eb=b5(0x703)===eP||_d(b5(0x122))===eP||_d(b5(0x4a8))===a||b5(0x4f9)===a,eq=String(e2[_d(b5(0x635))]||b5(0x533))[b5(0x154)](),er={};er[_d(b5(0x748))]=!0x0;if(_d('c29ja3M1')===a||_d('c29ja3M=')===a){const eV={'name':e0,'type':_d('c29ja3M1'),'server':e8,'port':e9};eV[_d('dWRw')]=!0x0;if(eD)eV[_d(b5(0x33d))]=eD;if(eX)eV[_d('cGFzc3dvcmQ=')]=eX;return eV;}if(b5(0x4e3)===a||b5(0x4f9)===a){const ex={'name':e0,'type':b5(0x4e3),'server':e8,'port':e9};ex[_d(b5(0x748))]=!0x0;if(eD)ex[_d('dXNlcm5hbWU=')]=eD;if(eX)ex[_d(b5(0x528))]=eX;if('https'===a)ex[_d(b5(0x315))]=!0x0;return ex;}if('ss'===a||a===_d(b5(0x147))){let el='',eh=e6;if(e6[b5(0x1c9)](':')>=0x0)el=e6[b5(0x14f)](0x0,e6[b5(0x1c9)](':')),eh=e6[b5(0x14f)](e6['indexOf'](':')+0x1);else try{const ef=atob(e6),eg=ef[b5(0x1c9)](':');eg>=0x0&&(el=ef['slice'](0x0,eg),eh=ef['slice'](eg+0x1));}catch(eK){}if(!el||!eh)return null;let eT=eh;try{eT=decodeURIComponent(eh);}catch(eH){}const eF={'name':e0,'type':_d('c2hhZG93c29ja3M='),'server':e8,'port':e9,[_d(b5(0x6ff))]:el,[_d(b5(0x528))]:eT};return eF[_d(b5(0x748))]=!0x0,eF;}if(_d(b5(0x4a8))===a||a===_d(b5(0x4a8))){const ed={'name':e0,'type':_d(b5(0x4a8)),'server':e8,'port':e9,'password':eD+(eX?':'+eX:''),'skip_':0x0};delete ed[b5(0xfb)];const eE={};eE[_d(b5(0x315))]=!0x0,eE[_d('c2tpcC1jZXJ0LXZlcmlmeQ==')]=!(b5(0x557)===String(e2[_d(b5(0x409))]||'')||'0'===String(e2[_d('YWxsb3dpbnNlY3VyZQ==')]||'')),eE[_d(b5(0x360))]=e2[_d(b5(0x5b5))]||e2[_d('cGVlcg==')]||e2[_d(b5(0x5ac))]||e8;if(e2[_d('YWxwbg==')])eE[_d(b5(0x2f8))]=e2[_d(b5(0x2f8))][b5(0x59c)](',')[b5(0x12d)](function(eM){const b8=V;return eM[b8(0x1df)]();})[b5(0x1e1)](Boolean);Object[b5(0x534)](ed,eE),ed[_d(b5(0x748))]=!0x0,ed[_d(b5(0x281))]='ws'===eq?'ws':_d('Z3JwYw==')===eq?_d(b5(0x48f)):b5(0x4e3)===eq||'h2'===eq?b5(0x4e3):b5(0x533);if('ws'===eq){ed[_d(b5(0x281))]='ws';const eM={'path':e2[_d(b5(0x2f3))]||'/','headers':{'Host':e2[_d(b5(0x5ac))]||e2[_d(b5(0x5b5))]||e8}};ed[_d(b5(0x6f2))]=eM;}else{if(_d(b5(0x48f))===eq){ed[_d(b5(0x281))]=_d(b5(0x48f));const eI={};eI[_d(b5(0x4d8))]=e2[_d(b5(0x404))]||e2[_d('cGF0aA==')]||'',ed[_d('Z3JwYy1vcHRz')]=eI;}}return ed;}if(_d('dmxlc3M=')===a||a===_d(b5(0x160))){if(!eD)return null;const eW={'name':e0,'type':_d(b5(0x160)),'server':e8,'port':e9,'uuid':eD};eW[_d(b5(0x748))]=!0x0;if(eb){eW[_d(b5(0x315))]=!0x0,eW[_d(b5(0x372))]=!(b5(0x557)===String(e2[_d(b5(0x409))]||'')||'0'===String(e2[_d('YWxsb3dpbnNlY3VyZQ==')]||'')),eW[_d(b5(0x360))]=e2[_d(b5(0x5b5))]||e2[_d(b5(0x5ac))]||e8;if(e2[_d(b5(0x224))])eW[_d(b5(0x6f1))]=e2[_d('ZnA=')];if(e2[_d(b5(0x2f8))])eW[_d(b5(0x2f8))]=e2[_d(b5(0x2f8))][b5(0x59c)](',')[b5(0x12d)](function(ey){const b9=V;return ey[b9(0x1df)]();})[b5(0x1e1)](Boolean);if(e2[_d(b5(0x200))])eW[_d(b5(0x200))]=e2[_d(b5(0x200))];if(_d(b5(0x122))===eP){const ey={};ey[_d(b5(0x6fe))]=e2[_d(b5(0x219))]||'';if(e2[_d(b5(0x10c))])ey[_d(b5(0x51e))]=e2[_d(b5(0x10c))];eW[_d(b5(0x227))]=ey;}}eW[_d(b5(0x281))]='ws'===eq?'ws':_d(b5(0x40a))===eq?_d('eGh0dHA='):_d('Z3JwYw==')===eq?_d(b5(0x48f)):b5(0x4e3)===eq||'h2'===eq?b5(0x4e3):b5(0x533);if('ws'===eq){eW[_d(b5(0x281))]='ws';const eR={'path':e2[_d('cGF0aA==')]||'/','headers':{'Host':e2[_d(b5(0x5ac))]||e2[_d(b5(0x5b5))]||e8}};eW[_d(b5(0x6f2))]=eR;}else{if(_d(b5(0x40a))===eq){eW[_d(b5(0x281))]=_d(b5(0x40a));let eG={};try{eG=JSON[b5(0x651)](e2[_d(b5(0x4f0))]||'{}');}catch(es){}const ec={'path':e2[_d('cGF0aA==')]||'/','mode':e2[_d(b5(0x4db))]||eG[b5(0x2ec)]||_d(b5(0x17d)),'host':e2[_d(b5(0x5ac))]||e2[_d(b5(0x5b5))]||e8,'x-padding-obfs-mode':void 0x0===eG[b5(0x385)]||!!eG[b5(0x385)],'x-padding-method':eG[b5(0x217)]||b5(0x69d),'x-padding-placement':eG[b5(0x570)]||b5(0x299),'x-padding-header':eG['xPaddingHeader']||'','x-padding-key':eG[b5(0x56e)]||''};eW[_d(b5(0x60d))]=ec;}else{if(_d(b5(0x48f))===eq){eW[_d(b5(0x281))]=_d(b5(0x48f));const ea={};ea[_d(b5(0x4d8))]=e2[_d(b5(0x404))]||e2[_d(b5(0x2f3))]||'',eW[_d(b5(0x487))]=ea;}}}return eW;}return null;}catch(eU){return null;}}function _frNodes(H){const bD=V,W=String(H['masqueFront']||'')['split'](/[\n\r]+/)[bD(0x12d)](n=>n['trim']())[bD(0x1e1)](Boolean);if(W[bD(0x1c8)]>0x5)throw new Error(bD(0x3d7));return W['map'](function(n,G){const bX=V,a=_frNode({'masqueFront':n});if(!a)throw new Error(bX(0x254)+(G+0x1)+'\x20个前置节点链接无效或格式不受支持');return a;});}function _bindMasqueFronts(H,W){const bm=V,G=_frNodes(W),a=new Set(H[bm(0x12d)](e0=>e0[bm(0x3f1)]));G[bm(0x4fc)](function(e0,e1){const bP=V,e2=G[bP(0x1c8)]>0x1?'前置'+(e1+0x1)+'·'+e0[bP(0x3f1)]:e0[bP(0x3f1)];let e3=e2,e4=0x2;while(a[bP(0x1cf)](e3))e3=e2+'·'+e4++;e0[bP(0x3f1)]=e3,a[bP(0x4c4)](e3);});let o=null;if(G[bm(0x1c8)]>0x1){let e0=bm(0x342),e1=0x2;while(a[bm(0x1cf)](e0))e0=e0+'·'+e1++;o={'name':e0,'type':'load-balance','strategy':bm(0x687),'proxies':G[bm(0x12d)](e2=>e2[bm(0x3f1)]),'url':bm(0x71e),'interval':0x258,'timeout':0x1388,'lazy':!![]};}const J=o?o[bm(0x3f1)]:G[bm(0x1c8)]?G[0x0]['name']:'';return{'nodes':H[bm(0x12d)](function(e2){const bb=V,e3=Object[bb(0x534)]({},e2);if(J)e3[bb(0x77e)]=J;return e3;}),'fronts':G,'group':o};}function Ee(H,W,G,J,e0,e1,e2,e3,e4,e5){const bq=V,e6=!!(H&&H[bq(0x5c1)]),e7=H[bq(0x234)],e8='/'+H[bq(0x347)],e9=e8+'?ed=2048',eD=H[bq(0x68c)]?H['alpn'][bq(0x59c)](',')['map'](ed=>ed[bq(0x1df)]())[bq(0x1e1)](Boolean):null,eX=new Set(),em=[],eP={},eb=String(G||'')[bq(0x183)](),eq=I[eb]||eb||'',er=String(e2||'')[bq(0x183)](),ep=I[er]||er||'',eC=String(e1||'')['trim']()[bq(0x183)](),ew=bq(0x6c1)===eC?'':y[eC]||ep||eq,eQ=W[bq(0x12d)](ed=>{const br=V,{user:eE,srv:eM,prt:eI,name:eW,isTrojan:ey,tls:eR}=de(ed,0x0),eG=_nodeHost(ed,e7);let ec=eW;const es=pe(ed,br(0x462))||'ws';let ea=Ce(ec);if(!ea)ea='CF优选';if(eX[br(0x1cf)](ec)){const ej=ey?'T':_d(br(0x40a))===es?'X':'W';let ek=ec+'·'+ej,ez=0x2;for(;eX[br(0x1cf)](ek);)ek=ec+'·'+ej+ez,ez++;ec=ek;}if(eX[br(0x4c4)](ec),ea){let eu=eP[ea];void 0x0===eu&&(eu=em[br(0x1c8)],eP[ea]=eu,em['push']({'name':ea,'code':x[ea]||'R'+eu,'nodes':[]})),em[eu][br(0x40f)][br(0x3b4)](ec);}const eU={'name':ec,'server':eM,'port':eI,'udp':!0x0,...eR?{'tls':!0x0,[_d(br(0x372))]:e6,'_w':!0x0,[_d(br(0x360))]:eG,[_d('Y2xpZW50LWZpbmdlcnByaW50')]:br(0x3ca),[_d(br(0x2f8))]:eD||['http/1.1']}:{},...H[br(0x210)]&&eR?{'ech-opts':{'enable':!0x0,'query-server-name':H[br(0x159)]||br(0x405)}}:{}};if(ey)return{...eU,'type':_d(br(0x4a8)),'password':eE,'network':'ws',[_d(br(0x6f2))]:{'path':eR?e9:e8,'headers':{'Host':eG}}};if(_d(br(0x40a))===es){let eo={};try{eo=JSON[br(0x651)](pe(ed,br(0x780))||'{}');}catch(eY){}return{...eU,'type':_d('dmxlc3M='),'uuid':eE,'network':_d(br(0x40a)),[_d(br(0x2f8))]:eD||['h2'],[_d(br(0x60d))]:{'path':e8,'mode':_d(br(0x17d)),'host':eG,[_d(br(0x6bf))]:void 0x0===eo[br(0x385)]||eo[br(0x385)],'x-padding-method':eo[br(0x217)]||br(0x69d),'x-padding-placement':eo[br(0x570)]||br(0x299),'x-padding-header':eo['xPaddingHeader']||'','x-padding-key':eo[br(0x56e)]||''}};}return{...eU,'type':_d(br(0x160)),'uuid':eE,'network':'ws',[_d('d3Mtb3B0cw==')]:{'path':eR?e9:e8,'headers':{'Host':eG}}};}),ev=bq(0x688)===(H[bq(0x21b)]&&H[bq(0x21b)][bq(0x65b)]||''),eV=eQ[bq(0x12d)](ed=>ed[bq(0x3f1)]),ex=(H[bq(0x259)]||H[bq(0x490)])&&eV['length']?bq(0x366):'',el=function(ed){const bp=V;if(!ed||!ed[bp(0x1c8)])return ed;const eE=ed[0x0],eM=(eI,eW)=>(eI||'')===(eW||'');return ed[bp(0x12d)](eI=>(eI!==eE?(eI['ca']&&eM(eI['ca'],eE['ca'])&&(eI[bp(0x3d9)]=bp(0x2b4)),eI['cert']&&eM(eI[bp(0x22c)],eE[bp(0x22c)])&&(eI[bp(0x71a)]=bp(0x126)),eI[bp(0x2bb)]&&eM(eI[bp(0x2bb)],eE[bp(0x2bb)])&&(eI[bp(0x185)]=bp(0x36c))):(eI['ca']&&(eI['caAnchor']=bp(0x2b4)),eI[bp(0x22c)]&&(eI[bp(0x580)]=bp(0x126)),eI['key']&&(eI[bp(0x690)]=bp(0x36c))),eI));}(function(ed,eE){const bC=V;if(!ed[bC(0x259)]&&!(ed[bC(0x490)]&&eV[bC(0x1c8)]))return[];if(!eV[bC(0x1c8)])return[];const eM=function(ey){const bw=V;return ey=parseInt(ey,0xa),ey>0x0?Math[bw(0x6b7)](ey,0x78):eE?0x3c:0x64;}(ed[bC(0x2b3)]),eI=(Array['isArray'](ed[bC(0x195)])&&ed[bC(0x195)][bC(0x1c8)]?ed[bC(0x195)]:[])['filter'](ey=>ey&&(!eE||'tcp'===String(ey['proto']||bC(0x583))))[bC(0x14f)](0x0,eM);if(!eI[bC(0x1c8)])return[];const eW={};return eI['map'](ey=>{const bQ=V,eR='家宽'+String(ey['country']||'XX')[bQ(0x183)]();let eG=eR,ec=0x2;for(;eW[eG];)eG=eR+'-'+ec,ec++;eW[eG]=0x1;const es={'name':eG,'type':bQ(0x6e1),'server':ey[bQ(0xea)],'port':Number(ey[bQ(0x564)])||0x4aa,'proto':bQ(0x533)===String(ey[bQ(0x523)]||bQ(0x583))?bQ(0x533):bQ(0x583),'username':bQ(0x33f),'password':bQ(0x33f),'ca':ey['ca']||'','dev':bQ(0x102),'handshakeTimeout':0x1e,'cipher':ey['cipher']||_d('QUVTLTEyOC1HQ00='),'auth':ey[bQ(0x4dc)]||bQ(0x661)};return ey[bQ(0x22c)]&&(es[bQ(0x22c)]=ey['cert']),ey[bQ(0x2bb)]&&(es['key']=ey[bQ(0x2bb)]),ey[bQ(0x175)]&&(es[bQ(0x47b)]=ey[bQ(0x175)],es['key-direction']='1'),ey[bQ(0x1cb)]&&(es[bQ(0xd3)]=ey[bQ(0x1cb)]),eE&&(es[_d('ZGlhbGVyUHJveHk=')]=eE),es;});}(H,ex)),eh=!(!H['homeWan']||ev),eT=!(!H['hwCo']||H['homeWan']||!el['length']);el['length']&&eQ[bq(0x3b4)](...el);if(e3&&e3[bq(0x1c8)]){const ed=e3[bq(0x12d)](function(eE){const bv=V,eM={'name':eE[bv(0x3f1)],'type':_d('bWFzcXVl'),'server':eE[bv(0x234)],'port':eE[bv(0x564)],'ip':eE['local'][0x0]?String(eE['local'][0x0])[bv(0x59c)]('/')[0x0]+'/32':'','private-key':eE['k'],'peer-public-key':eE['p'],'udp':!0x0,'mtu':0x500,'remote-dns-resolve':!0x0,'dns':['1.1.1.1'],'sni':eE['sni'],'uri':_d('aHR0cHM6Ly9jbG91ZGZsYXJlYWNjZXNzLmNvbQ=='),'congestion-controller':'bbr'};if(eE[bv(0x414)][0x1])eM[bv(0x2ea)]=String(eE['local'][0x1])[bv(0x59c)]('/')[0x0]+bv(0x3f2);if(eE['msnet'])eM[_d(bv(0x281))]=eE[bv(0x498)];return eE[_d('ZGlhbGVyUHJveHk=')]&&(eM[_d(bv(0x54a))]=eE[_d(bv(0x54a))]),eM;});eQ[bq(0x3b4)](...ed),e4&&eQ[bq(0x3b4)](...Array[bq(0x636)](e4)?e4:[e4]),em[bq(0x3b4)]({'name':x0(e3[0x0][bq(0x3f1)]),'code':'R'+em[bq(0x1c8)],'nodes':ed[bq(0x12d)](function(eE){return eE['name'];}),'proto':0x1});}em['sort'](function(eE,eM){const bx=V;var eI=['香港','台湾','日本','美国','新加坡','韩国','德国','印度'];function eW(eG){const bV=V;var ec=eI[bV(0x1c9)](eG);if(ec>=0x0)return ec;return eG===bV(0x1f0)?0x3e7:0x64;}var ey=eW(eE[bx(0x3f1)]),eR=eW(eM[bx(0x3f1)]);if(ey!==eR)return ey-eR;return String(eE[bx(0x3f1)])[bx(0x5e0)](String(eM['name']),'zh');});const eF=function(eE,eM){const bl=V,eI=bl(0x71e),eW=bl(0x71e);if(!eM)return bl(0x1a1)+_d(bl(0x2ef))+bl(0x4e1)+_d(bl(0xcf))+bl(0x481)+_d(bl(0xcf))+bl(0x32e);const ey=[];ey[bl(0x3b4)](bl(0x76c)),ey[bl(0x3b4)]('listeners:'),ey[bl(0x3b4)](bl(0x742)+_d(bl(0x2fd))+'监听器\x20-\x20远程连接家庭网络，端口和密码使用时请修改（默认密码请勿用于公网）'),ey[bl(0x3b4)](bl(0x2e2)+_d('c2hhZG93c29ja3M=')+bl(0x425)+_d(bl(0x107))+bl(0xc3)+_d(bl(0x204))+'}'),ey[bl(0x3b4)]('\x20\x20#\x20Mixed监听器\x20-\x20分地区专用端口\x20玩法：本地客户端或插件，实现分地区访问'),eE['slice'](0x0,0x7)['forEach']((eo,eY)=>{const bh=V;ey[bh(0x3b4)](bh(0x12e)+eo[bh(0x606)]+bh(0x27b)+(0xc350+eY)+bh(0x1a8)+eo[bh(0x3f1)]+bh(0x294));}),ey[bl(0x3b4)]('\x20\x20-\x20{name:\x20MIXED-AL,\x20type:\x20mixed,\x20port:\x2050007,\x20proxy:\x20节点选择}'),ey[bl(0x3b4)](''),ey[bl(0x3b4)](bl(0x577)),ey[bl(0x3b4)](_d(bl(0x2ef))+'s:');const eR=eE[bl(0x12d)](eo=>eo[bl(0x3f1)]+'节点'),eG=eE['some'](function(eo){const bT=V;return!!(eo&&eo[bT(0x523)]);}),ec=[];if(eG)eE[bl(0x4fc)](function(eo){const bF=V;if(!eo||!eo[bF(0x523)]||!Array[bF(0x636)](eo[bF(0x40f)]))return;eo[bF(0x40f)][bF(0x4fc)](function(eY){const bf=V;if(ec[bf(0x1c9)](eY)<0x0)ec[bf(0x3b4)](eY);});});const es=ec[bl(0x12d)](Ie)[bl(0x5da)](',\x20'),ea=el[bl(0x1c8)]>0x0,eU=eG||eT,ej=eG?es:eT?eV['map'](Ie)[bl(0x5da)](',\x20'):'',ek=_d(bl(0xcf)),ez=_d(bl(0x4b0)),eu=_d('ZW1wdHktZmFsbGJhY2s=');return ey['push'](bl(0x139)),ey[bl(0x3b4)](bl(0x6fd)+ek+bl(0x340)+[bl(0x333),bl(0x2b2)]['concat'](ea?[bl(0x1ef)]:[],eR,['直连连接'])[bl(0x5da)](',\x20')+']}'),ey[bl(0x3b4)](bl(0x33e)),ey[bl(0x3b4)](bl(0x173)+ez+',\x20'+(eU?ek+bl(0x340)+ej+']':bl(0x220))+bl(0x11a)+eI+bl(0x669)+eu+bl(0x51d)),ey[bl(0x3b4)](bl(0x432)),ey[bl(0x3b4)](eU?bl(0x543)+ek+bl(0x6d6)+(ej?',\x20'+ej:'')+']}':bl(0x719)+ek+bl(0x28b)),ey[bl(0x3b4)](bl(0x62d)),ey[bl(0x3b4)](bl(0x26b)+ek+bl(0x1fe)),ey[bl(0x3b4)](bl(0x55a)),eE[bl(0x4fc)](eo=>{const bg=V,eY=eo['name']+'节点',eJ=eo['name']+'自动',eS=eo[bg(0x523)]?eW:eI,ei=eo[bg(0x523)]?bg(0x6ad):bg(0x202);ey['push'](bg(0x742)+eo[bg(0x3f1)]+'（'+eo[bg(0x40f)]['length']+bg(0x5b6)+eJ+bg(0x5f5)),ey['push'](bg(0x6dd)+eY+bg(0x3c9)+_d(bg(0xcf))+bg(0x340)+eJ+',\x20'+eo[bg(0x40f)][bg(0x12d)](Ie)[bg(0x5da)](',\x20')+']}'),ey[bg(0x3b4)]('\x20\x20-\x20{name:\x20'+eJ+bg(0x161)+_d(bg(0x4b0))+',\x20'+_d(bg(0xcf))+bg(0x340)+eo[bg(0x40f)][bg(0x12d)](Ie)[bg(0x5da)](',\x20')+'],\x20url:\x20\x27'+eS+bg(0x52f)+_d(bg(0x407))+bg(0x6f7));}),ey['join']('\x0a')+'\x0a';}(em,eQ[bq(0x1c8)]),ef=String(H[bq(0x58e)]||'')[bq(0x1df)]()||bq(0x658)+wt(String(H[bq(0x137)]||'')+bq(0x242))[bq(0x14f)](0x0,0x14);let eg=bq(0x132)+_d(bq(0x5af))+'\x20/\x20build'+_d(bq(0x5af))+bq(0xf9)+_d(bq(0x3e1))+bq(0x664)+_d(bq(0x67d))+bq(0x3e3)+_d(bq(0x71d))+bq(0x10f)+_d(bq(0x5e1))+':\x20true\x0aunified-delay:\x20false\x0atcp-concurrent:\x20true\x0alog-level:\x20warning\x0abind-address:\x20\x27*\x27\x0afind-process-mode:\x20\x27always\x27\x0akeep-alive-interval:\x2015\x0akeep-alive-idle:\x20600\x0a\x0a#\x20认证配置（默认凭据请务必修改！）\x0aauthentication:\x0a\x20\x20-\x20'+_d(bq(0x169))+':'+ef+bq(0x75e)+_d(bq(0x36a))+'/'+_d(bq(0x662))+bq(0x735)+_d(bq(0x662))+'\x0aexternal-ui:\x20ui\x0aexternal-controller:\x20127.0.0.1:9090\x0asecret:\x20'+ef+bq(0x57b)+_d(bq(0x17b))+'\x20true\x0a\x0a#\x20配置存储\x0aprofile:\x0a\x20\x20store-selected:\x20true\x0a\x20\x20store-fake-ip:\x20true\x0a\x0a#\x20'+_d(bq(0x551))+bq(0x327)+_d(bq(0x698))+bq(0x25b)+_d(bq(0x5d5))+bq(0x3e2)+_d(bq(0x31d))+bq(0x587)+_d(bq(0x5d1))+bq(0x3ec)+_d(bq(0x698))+':\x20\x22https://github.com/'+_d('TWV0YUN1YmVY')+'/'+_d(bq(0x1d8))+bq(0x266)+_d('Z2VvaXA=')+'.dat\x22\x0a\x20\x20'+_d(bq(0x551))+bq(0x6b5)+_d(bq(0x31d))+'/'+_d(bq(0x1d8))+bq(0x266)+_d(bq(0x551))+bq(0x436)+_d(bq(0x31d))+'/'+_d(bq(0x1d8))+bq(0x5b0)+_d(bq(0x5c8))+bq(0x741)+_d(bq(0x644))+bq(0x70a)+_d(bq(0x329))+':\x0a\x20\x20\x20\x20-\x20\x22any:53\x22\x0a\x20\x20\x20\x20-\x20\x22tcp://any:53\x22\x0a\x20\x20udp-timeout:\x20300\x0a\x20\x20auto-route:\x20true\x0a\x20\x20strict-route:\x20true\x0a\x20\x20auto-redirect:\x20true\x0a\x20\x20auto-detect-interface:\x20true\x0a\x20\x20#\x20提示：系统级防泄露的最强手段是开启\x20TUN（自动劫持全部\x20DNS\x20流量）；\x0a\x20\x20#\x20不开\x20TUN\x20时，请把系统\x20/\x20LAN\x20设备的\x20DNS\x20指向\x20127.0.0.1:53（本机）或本机局域网\x20IP:53。\x0a\x0ahosts:\x0a\x20\x20miwifi.com:\x20192.168.31.2\x0a\x20\x20\x22epdg.epc.mnc010.mcc234.pub.3gppnetwork.org\x22:\x20[87.194.8.8,\x2087.194.88.8,\x2087.194.89.8,\x2087.194.9.8]\x0a\x20\x20services.googleapis.cn:\x20services.googleapis.com\x0a\x20\x20cn.bing.com:\x20www4.bing.com\x0a\x0a#\x20====================\x20DNS\x20配置\x20====================\x0a#\x20防泄露要点：\x0a#\x20\x20\x201)\x20respect-rules:\x20true：DNS\x20服务器连接遵循路由规则（国外\x20DoH\x20走隧道、国内\x20DoH\x20直连），\x0a#\x20\x20\x20\x20\x20\x20解析行为与规则分流一致，避免“规则走出口、解析却直连”的泄露。\x0a#\x20\x20\x202)\x20国内域名（China/Direct/geosite:cn\x20等）→\x20国内\x20DoH；国外域名（默认\x20nameserver\x20/\x20国外规则集\x20/\x20geosite:geolocation-!cn）→\x20国外\x20DoH\x20且经隧道，\x0a#\x20\x20\x20\x20\x20\x20两类解析各走各的，国外域名不会被国内/运营商\x20DNS\x20看到。\x0a#\x20\x20\x202b)\x20IPv4\x20/\x20IPv6\x20防泄露：A\x20与\x20AAAA\x20使用同一套\x20nameserver-policy；国外\x20DoH\x20用\x20IP\x20地址（不先走国内明文\x20DNS\x20解析\x20DoH\x20域名）；\x0a#\x20\x20\x20\x20\x20\x20DoH\x20的\x20IP\x20在\x20rules\x20中固定走出口，不会被\x20GEOIP\x20直连规则抢先命中。\x0a#\x20\x20\x203)\x20fake-ip-filter\x20补齐系统连通性检测\x20/\x20时间同步\x20/\x20运营商登录等域名，防止系统误判断网而回退运营商\x20DNS。\x0adns:\x0a\x20\x20enable:\x20true\x0a\x20\x20listen:\x200.0.0.0:53\x20\x20\x20\x20\x20\x20\x20\x20#\x20本机\x20/\x20LAN\x20设备可把\x20DNS\x20指向此地址，避免走运营商\x20DNS\x0a\x20\x20ipv6:\x20true\x0a\x20\x20prefer-h3:\x20false\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20#\x20respect-rules\x20下官方不推荐\x20DoH3；且\x20QUIC\x20已被规则拦截\x0a\x20\x20cache-algorithm:\x20arc\x20\x20\x20\x20\x20\x20#\x20性能更优的\x20ARC\x20缓存算法\x0a\x20\x20cache-size:\x204096\x0a\x20\x20enhanced-mode:\x20fake-ip\x0a\x20\x20fake-ip-range:\x20198.18.0.1/16\x0a\x20\x20fake-ip-filter:\x0a\x20\x20\x20\x20-\x20\x22+.lan\x22\x0a\x20\x20\x20\x20-\x20\x22+.local\x22\x0a\x20\x20\x20\x20-\x20\x22+.localhost\x22\x0a\x20\x20\x20\x20-\x20\x22+.home.arpa\x22\x0a\x20\x20\x20\x20-\x20\x22+.internal\x22\x0a\x20\x20\x20\x20#\x20系统连通性检测（防止\x20fake-ip\x20导致“无网络”判断，回退\x20ISP\x20DNS\x20造成泄露）\x0a\x20\x20\x20\x20-\x20\x22+.msft'+_d('Y29ubmVjdA==')+bq(0x26d)+_d(bq(0x209))+bq(0x1b7)+_d(bq(0x71c))+bq(0x106)+_d(bq(0x71c))+bq(0x750)+_d(bq(0x71c))+bq(0x51c)+_d(bq(0x551))+bq(0x34b)+_d(bq(0x551))+'\x20库兜底，防\x20fake-ip\x20干扰国内应用）\x0a\x20\x20use-hosts:\x20true\x0a\x20\x20respect-rules:\x20true\x0a\x20\x20#\x20引导用\x20DNS（解析\x20DoH/DoT\x20服务器自身的域名），必须是\x20IP\x0a\x20\x20default-nameserver:\x0a\x20\x20\x20\x20-\x20223.5.5.5\x0a\x20\x20\x20\x20-\x20119.29.29.29\x0a\x20\x20#\x20默认解析（未命中\x20'+_d(bq(0x57a))+bq(0x3ed)+_d(bq(0x6ab))+':\x0a\x20\x20\x20\x20-\x20\x22https://dns.alidns.com/dns-query\x22\x0a\x20\x20\x20\x20-\x20\x22https://doh.pub/dns-query\x22\x0a\x20\x20#\x20解析节点域名（防套娃\x20/\x20防循环，用国内直连可达的\x20DoH）\x0a\x20\x20'+_d(bq(0x63d))+bq(0x287)+_d(bq(0x57a))+bq(0x663)+_d(bq(0x71c))+bq(0x5d6)+_d(bq(0x261))+bq(0x1b3)+_d(bq(0x71c))+bq(0x6b4)+_d(bq(0x551))+bq(0x519)+_d(bq(0x71c))+bq(0x776)+_d('WW91VHViZQ==')+bq(0x11d)+_d(bq(0x551))+bq(0x14d)+_d('Q0xBU0g=')+'_GROUPS__\x0a\x0a#\x20====================\x20规则路由\x20====================\x0arules:\x0a\x20\x20#\x20广告拦截（常用：直接拒绝；如需临时放行可改为节点选择）\x0a\x20\x20-\x20'+_d(bq(0x52b))+bq(0x66d)+_d(bq(0x52b))+','+_d(bq(0x261))+bq(0x3f4)+_d(bq(0x52b))+bq(0x188)+_d(bq(0x5d5))+bq(0x415)+_d(bq(0x551))+bq(0x771)+_d(bq(0x55c))+bq(0x120)+_d(bq(0x52b))+bq(0x60e)+_d(bq(0x52b))+bq(0x695)+_d(bq(0x52b))+',Download,直连连接\x0a\x20\x20-\x20'+_d(bq(0x52b))+bq(0x307)+_d(bq(0x52b))+bq(0x512)+_d(bq(0x52b))+bq(0x403)+_d(bq(0x52b))+bq(0x53f)+_d(bq(0x5d5))+',CN,直连连接\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20#\x20'+_d(bq(0x551))+bq(0x398)+_d(bq(0x411))+bq(0x60c)+_d('UlVMRS1TRVQ=')+bq(0x16d)+_d(bq(0x52b))+bq(0x505)+_d(bq(0x52b))+bq(0x473)+_d(bq(0x52b))+bq(0x578)+_d(bq(0x52b))+bq(0x6a0)+_d(bq(0x52b))+','+_d('WW91VHViZQ==')+',节点选择\x0a\x20\x20-\x20'+_d(bq(0x52b))+bq(0x450)+_d(bq(0x52b))+bq(0x6a5)+_d(bq(0x52b))+',disney,节点选择\x0a\x20\x20-\x20'+_d(bq(0x52b))+',Google,节点选择\x0a\x20\x20-\x20'+_d(bq(0x52b))+',Proxy,节点选择\x0a\x0a\x20\x20#\x20IP规则\x0a\x20\x20-\x20'+_d(bq(0x52b))+bq(0x542)+_d(bq(0x52b))+bq(0x701)+_d(bq(0x52b))+','+_d('UHJveHlJUA==')+bq(0xd8)+_d(bq(0x52b))+bq(0x36f)+_d(bq(0x411))+bq(0x76a)+_d('R0VPSVA=')+bq(0x2f1)+_d(bq(0x20e))+bq(0x1eb)+_d(bq(0x29c))+bq(0x23b)+_d(bq(0x261))+bq(0x5cc)+_d(bq(0x261))+bq(0x32f)+_d(bq(0x298))+bq(0x167)+_d('WW91VHViZQ==')+'.mrs}\x0a\x20\x20Google:\x20\x20\x20\x20\x20\x20\x20\x20\x20{<<:\x20*BehaviorDN,\x20url:\x20__CRULES__/Google.mrs}\x0a\x20\x20Microsoft:\x20\x20\x20\x20\x20\x20{<<:\x20*BehaviorCL,\x20url:\x20__CRULES__/Microsoft.yaml}\x20\x20\x20#\x20微软全家桶全量：'+_d('YmxhY2ttYXRyaXg3')+bq(0x3b7)+_d(bq(0x58a))+bq(0x58c)+_d(bq(0x571))+bq(0x486)+_d(bq(0x571))+bq(0x5c2);eg=eg[bq(0x344)]('__'+_d(bq(0x1b9))+bq(0x138),eF+(e5?bq(0x2b5)+JSON[bq(0x251)](e5)+'\x0a':'')),(J&&(eg=eg[bq(0x344)](/__CRULES__/g,J)),eg=function(eE,eM,eI,eW,ey,eR,eG){const bK=V;if(!eM[bK(0x1c8)]&&!(ey&&ey[bK(0x1c8)]))return eW&&eW['length']?_smartGroups(eE,eW[bK(0x14f)](),!0x1,em['map'](function(es){const bH=V;return es[bH(0x3f1)]+'节点';})):eE;let ec=eE;if(eM[bK(0x1c8)]){const es=eM[bK(0x12d)](eo=>eo['name']),ea=es[bK(0x14f)]()[bK(0x1ed)]((eo,eY)=>eo<eY?-0x1:eo>eY?0x1:0x0),eU=eW&&eW[bK(0x1c8)]?'\x20\x20#\x20家宽隧道前置：CF\x20优选节点（默认「前置自动」=自动测活最快）；家宽\x20openvpn\x20经此拨号（'+_d(bK(0x672))+bK(0xef)+_d(bK(0xcf))+bK(0x26c)+eW[bK(0x14f)](0x0,eG)[bK(0x12d)](Ie)[bK(0x5da)](',\x20')+bK(0x6e2)+_d(bK(0x4b0))+',\x20'+_d(bK(0xcf))+bK(0x340)+eW[bK(0x14f)](0x0,eG)[bK(0x12d)](Ie)[bK(0x5da)](',\x20')+bK(0x44b)+_d(bK(0x407))+bK(0x45c):'',ej=bK(0x23a)+_d(bK(0x4b0))+bK(0x681)+_d(bK(0x4b0))+',\x20'+_d(bK(0xcf))+bK(0x340)+es['map'](Ie)[bK(0x5da)](',\x20')+bK(0x2a6)+_d(bK(0x407))+':\x20REJECT}\x0a',ek=(function(){const bd=V,eo=new Map();for(const eY of eM){let eJ=String(eY[bd(0x5dd)]||'')['trim']()[bd(0x183)]();if(!y[eJ]){const ei=Ce(eY[bd(0x3f1)]||'');eJ=Object[bd(0x2d2)](y)[bd(0x5b8)](eB=>y[eB]===ei)||'';}if(!y[eJ])continue;const eS=String(eY[bd(0x3f1)]||'')[bd(0x1df)]();if(!eS)continue;if(!eo[bd(0x1cf)](eJ))eo[bd(0x598)](eJ,[]);if(!eo[bd(0x30b)](eJ)['includes'](eS))eo[bd(0x30b)](eJ)['push'](eS);}return[...eo[bd(0x156)]()][bd(0x1ed)]((eB,eO)=>eB[0x0][bd(0x5e0)](eO[0x0]))[bd(0x12d)](([eB,eO])=>({'name':y[eB]+'家宽','nodes':eO}));}()),ez=ek[bK(0x12d)](eo=>bK(0x6dd)+eo[bK(0x3f1)]+',\x20type:\x20'+_d('dXJsLXRlc3Q=')+',\x20'+_d(bK(0xcf))+':\x20['+eo['nodes'][bK(0x12d)](Ie)[bK(0x5da)](',\x20')+bK(0x2a6)+_d(bK(0x407))+bK(0x45c))[bK(0x5da)](''),eu='\x20\x20#\x20家宽模式：VPN\x20Gate\x20OpenVPN\x20出口（多台家宽节点自动测活，经\x20'+_d(bK(0x672))+bK(0x1af)+ez+bK(0x351)+_d(bK(0xcf))+':\x20[家宽自动,\x20'+ek['map'](eo=>Ie(eo[bK(0x3f1)]))[bK(0x5da)](',\x20')+(ek[bK(0x1c8)]?',\x20':'')+ea[bK(0x12d)](Ie)[bK(0x5da)](',\x20')+bK(0x2a8);ec=ec[bK(0x344)](_HWS,()=>eU+ej+eu+_HWS),ec=ec[bK(0x344)](bK(0x454),()=>(eR?'':bK(0x62b))+(eI?bK(0xe8):'\x20\x20-\x20MATCH,节点选择'));}return _smartGroups(ec,eR?eW['slice']():(ey&&ey[bK(0x1c8)]?ey:eM)[bK(0x12d)](function(eo){const bE=V;return eo[bE(0x3f1)];}),!!eM['length'],em[bK(0x12d)](function(eo){return eo['name']+'节点';}));}(eg,el,eh,eV,e3,eT,Math[bq(0x6b7)](0x64,Math[bq(0x60a)](0x1,parseInt(H[bq(0x309)],0xa)||0x3c)))),eg=eg['split'](_HWS)[bq(0x5da)]('');{const eE=String(e7||'')[bq(0x154)](),eM=(H[bq(0x4ac)]&&H[bq(0x4ac)]['length']>0x1?H[bq(0x4ac)]:[eE])[bq(0x1e1)](eI=>/^[a-z0-9]([a-z0-9.-]{0,251}[a-z0-9])?$/[bq(0x6b1)](eI))['map'](eI=>bq(0x15b)+eI+bq(0x2de))[bq(0x5da)]('');eg=eg[bq(0x344)](bq(0xdf),bq(0x14e)+_d(bq(0x5af))+bq(0x331)+_d('Q2xhc2g=')+bq(0x530)+eM+'\x20\x20-\x20DOMAIN-SUFFIX,pages.dev,DIRECT\x0a\x20\x20-\x20DOMAIN-SUFFIX,workers.dev,DIRECT\x0a');}const eK=String(e0||'')[bq(0x183)](),eH=y[eK]||'';return'#\x20'+__B+bq(0xe5)+VERSION+'\x20·\x20机房\x20'+(eb||'未知')+(eq?'('+eq+')':'')+(er&&er!==eb?bq(0x619)+er+(ep?'('+ep+')':''):'')+(eK?bq(0x6ed)+eK+(eH?'('+eH+')':''):'')+bq(0x113)+eQ[bq(0x1c8)]+'\x20个'+(bq(0x629)+String((H[bq(0x375)]||'')['split'](/\n/)[bq(0x1e1)](function(eI){const bM=V;return eI[bM(0x1df)]();})['length'])+bq(0x457)+(H[bq(0x13b)]||[])[bq(0x1c8)]+bq(0x4d4)+(W[bq(0x1c8)]||0x0))+bq(0x303)+_d(bq(0xcf))+':\x0a'+eQ[bq(0x12d)](eI=>function(eW){const bI=V,ey=[];if(ey[bI(0x3b4)](bI(0x511)+Ie(eW[bI(0x3f1)])),ey[bI(0x3b4)](bI(0x427)+eW[bI(0x462)]),ey[bI(0x3b4)]('\x20\x20\x20\x20server:\x20'+Ie(eW[bI(0xea)])),ey[bI(0x3b4)](bI(0x751)+eW[bI(0x564)]),bI(0x6e1)===eW[bI(0x462)])return ey['push'](bI(0x610)+Ie(eW[bI(0x523)]||bI(0x583))),ey[bI(0x3b4)]('\x20\x20\x20\x20'+_d(bI(0x107))+'\x20'+(bI(0x533)===eW[bI(0x523)]?bI(0x557):'true')),ey[bI(0x3b4)](bI(0x76b)+Ie(eW[bI(0x74b)]||bI(0x33f))),ey[bI(0x3b4)](bI(0x6e7)+Ie(eW['password']||bI(0x33f))),eW[bI(0x3d9)]?ey[bI(0x3b4)](bI(0x4da)+eW[bI(0x3d9)]):eW['ca']&&(ey[bI(0x3b4)](eW[bI(0x616)]?'\x20\x20\x20\x20ca:\x20&'+eW[bI(0x616)]+'\x20|':'\x20\x20\x20\x20ca:\x20|'),ey[bI(0x3b4)](...Pe(eW['ca'],0x6))),eW['certRef']?ey[bI(0x3b4)]('\x20\x20\x20\x20cert:\x20*'+eW[bI(0x71a)]):eW[bI(0x22c)]&&(ey['push'](eW[bI(0x580)]?bI(0x2e1)+eW[bI(0x580)]+'\x20|':bI(0x232)),ey[bI(0x3b4)](...Pe(eW[bI(0x22c)],0x6))),eW[bI(0x185)]?ey[bI(0x3b4)](bI(0x16e)+eW[bI(0x185)]):eW[bI(0x2bb)]&&(ey[bI(0x3b4)](eW[bI(0x690)]?bI(0x495)+eW['keyAnchor']+'\x20|':bI(0x2ce)),ey[bI(0x3b4)](...Pe(eW[bI(0x2bb)],0x6))),eW[bI(0x47b)]&&(ey[bI(0x3b4)](bI(0x744)),ey[bI(0x3b4)](...Pe(eW[bI(0x47b)],0x6)),ey['push'](bI(0x671)+Ie(eW[bI(0x45b)]||'1'))),eW[bI(0xd3)]&&(ey[bI(0x3b4)](bI(0x199)),ey[bI(0x3b4)](...Pe(eW['tls-crypt'],0x6))),ey[bI(0x3b4)]('\x20\x20\x20\x20dev:\x20tun'),ey[bI(0x3b4)](bI(0x2cb)+Ie(eW[bI(0x164)]||_d(bI(0x6ef)))),ey[bI(0x3b4)](bI(0x131)+Ie(eW[bI(0x4dc)]||bI(0x661))),eW[bI(0x3cd)]&&ey[bI(0x3b4)]('\x20\x20\x20\x20handshake-timeout:\x20'+eW[bI(0x3cd)]),eW[_d(bI(0x54a))]&&ey[bI(0x3b4)](bI(0x1b2)+_d(bI(0x672))+bI(0x5ad)+Ie(eW[_d(bI(0x54a))])),ey[bI(0x5da)]('\x0a');if(_d(bI(0x143))===eW[bI(0x462)]){if(eW['ip'])ey[bI(0x3b4)](bI(0x5f2)+Ie(eW['ip']));if(eW[bI(0x2ea)])ey['push'](bI(0x4c3)+Ie(eW[bI(0x2ea)]));ey[bI(0x3b4)](bI(0x11c)+Ie(eW[bI(0xe9)]||'')),ey[bI(0x3b4)](bI(0x29a)+Ie(eW[bI(0x47e)]||'')),ey[bI(0x3b4)](bI(0x1b2)+_d('dWRwOg==')+bI(0x6c5)),ey[bI(0x3b4)](bI(0x6cf)+(eW[bI(0x614)]||0x500));if(eW[_d('ZGlhbGVyUHJveHk=')])ey[bI(0x3b4)](bI(0x1b2)+_d(bI(0x672))+bI(0x5ad)+Ie(eW[_d(bI(0x54a))]));if(eW['sni'])ey[bI(0x3b4)](bI(0x544)+Ie(eW['sni']));if(eW[bI(0x631)])ey[bI(0x3b4)](bI(0x1d3));if(eW['dns']&&eW[bI(0x5a5)][bI(0x1c8)])ey[bI(0x3b4)]('\x20\x20\x20\x20dns:\x20['+eW[bI(0x5a5)][bI(0x5da)](',\x20')+']');if(eW[bI(0x5ed)])ey[bI(0x3b4)](bI(0x1b2)+_d('dXJp')+':\x20'+eW[bI(0x5ed)]);if(eW[bI(0x2b0)])ey[bI(0x3b4)](bI(0x1b2)+_d(bI(0x48a))+':\x20'+eW[bI(0x2b0)]);if(eW[bI(0x34a)])ey[bI(0x3b4)](bI(0x1b2)+_d(bI(0x281))+':\x20'+eW[bI(0x34a)]);return ey[bI(0x5da)]('\x0a');}if(eW[bI(0x462)]===_d(bI(0x147))||eW[bI(0x462)]===_d(bI(0x29f))||bI(0x4e3)===eW[bI(0x462)]){if(eW[bI(0x164)])ey[bI(0x3b4)](bI(0x2cb)+Ie(eW['cipher']));if(eW[bI(0x74b)])ey[bI(0x3b4)](bI(0x76b)+Ie(eW[bI(0x74b)]));if(eW['password'])ey[bI(0x3b4)]('\x20\x20\x20\x20password:\x20'+Ie(eW[bI(0x346)]));if(eW[bI(0x703)])ey[bI(0x3b4)](bI(0x1b2)+_d(bI(0x649))+bI(0x6c5));return ey[bI(0x3b4)](bI(0x1b2)+_d('dWRwOg==')+'\x20true'),ey[bI(0x5da)]('\x0a');}if(_d(bI(0x160))===eW[bI(0x462)]?ey[bI(0x3b4)]('\x20\x20\x20\x20uuid:\x20'+Ie(eW[bI(0x137)])):ey[bI(0x3b4)](bI(0x6e7)+Ie(eW['password'])),ey['push']('\x20\x20\x20\x20'+_d('bmV0d29yazo=')+'\x20'+eW['network']),ey[bI(0x3b4)](bI(0x1b2)+_d(bI(0x107))+bI(0x6c5)),eW[bI(0x703)]&&(ey[bI(0x3b4)](bI(0x1b2)+_d(bI(0x649))+'\x20true'),ey[bI(0x3b4)]('\x20\x20\x20\x20'+_d(bI(0x372))+':\x20'+(eW['_w']&&!0x1===eW[_d(bI(0x372))]?'false':bI(0x31c))),ey[bI(0x3b4)](eW[bI(0x68c)]&&eW[bI(0x68c)][bI(0x1c8)]?bI(0x1b2)+_d('YWxwbg==')+':\x20['+eW[bI(0x68c)]['join'](',\x20')+']':_d('eGh0dHA=')===eW['network']?'\x20\x20\x20\x20'+_d(bI(0x2f8))+bI(0x3d4):'\x20\x20\x20\x20'+_d('YWxwbg==')+':\x20[http/1.1]'),ey[bI(0x3b4)](bI(0x1b2)+_d(bI(0x360))+':\x20'+Ie(eW[bI(0x25f)])),_d(bI(0x4a8))===eW[bI(0x462)]&&ey['push']('\x20\x20\x20\x20sni:\x20'+Ie(eW[bI(0x25f)])),ey[bI(0x3b4)](bI(0x1b2)+_d(bI(0x6f1))+bI(0x540)),eW[_d(bI(0x200))]&&ey[bI(0x3b4)]('\x20\x20\x20\x20'+_d('Zmxvdw==')+':\x20'+Ie(eW[_d(bI(0x200))])),eW[_d('cmVhbGl0eS1vcHRz')]&&(ey[bI(0x3b4)](bI(0x1b2)+_d(bI(0x227))+':'),ey[bI(0x3b4)](bI(0x393)+_d(bI(0x6fe))+':\x20'+Ie(eW[_d(bI(0x227))][_d(bI(0x6fe))]||'')),eW[_d(bI(0x227))][_d(bI(0x51e))]&&ey[bI(0x3b4)](bI(0x393)+_d('c2hvcnQtaWQ=')+':\x20'+Ie(eW[_d('cmVhbGl0eS1vcHRz')][_d(bI(0x51e))]))),eW[bI(0x513)]&&(ey[bI(0x3b4)](bI(0x2b7)),ey[bI(0x3b4)](bI(0x420)+Ie(eW[bI(0x513)][bI(0x3c1)])),ey[bI(0x3b4)](bI(0x2df)+Ie(eW[bI(0x513)]['query-server-name'])))),'ws'===eW[bI(0x34a)])ey[bI(0x3b4)]('\x20\x20\x20\x20'+_d(bI(0x6f2))+':'),ey['push'](bI(0x235)+Ie(eW[_d('d3Mtb3B0cw==')][bI(0x347)])),ey['push'](bI(0x497)),ey[bI(0x3b4)]('\x20\x20\x20\x20\x20\x20\x20\x20Host:\x20'+Ie(eW[_d(bI(0x6f2))][bI(0x72f)][bI(0x5c3)]));else{if(_d(bI(0x40a))===eW[bI(0x34a)]){const eR=eW[_d('eGh0dHA=')+bI(0x3ce)];ey[bI(0x3b4)](bI(0x1b2)+_d(bI(0x40a))+bI(0x14c)),ey['push'](bI(0x235)+Ie(eR['path'])),ey['push'](bI(0x5fe)+Ie(eR['mode'])),ey[bI(0x3b4)](bI(0x2c8)+Ie(eR['host'])),ey[bI(0x3b4)](bI(0x2dd)+_d(bI(0x463))+bI(0x30f)+Ie(eR[bI(0x592)+_d('b2Jmcw==')+bI(0x54f)])),ey[bI(0x3b4)](bI(0x2c6)+Ie(eR[bI(0x5dc)])),ey[bI(0x3b4)](bI(0x632)+Ie(eR[bI(0x243)])),ey[bI(0x3b4)](bI(0x22b)+Ie(eR[bI(0x48e)])),ey[bI(0x3b4)](bI(0x163)+Ie(eR[bI(0x1e3)]));}}return ey[bI(0x5da)]('\x0a');}(eI))[bq(0x5da)]('\x0a')+'\x0a'+eg+'\x0a';}function $e(H,W){const bW=V,G=!!(H&&H[bW(0x5c1)]),J=H[bW(0x234)],e0='/'+H[bW(0x347)],e1=[];for(const e3 of W)e3[bW(0x263)](_d(bW(0x4a8))+bW(0x4b2))&&e3[bW(0x1c9)](_d(bW(0x6a4))+'none')<0x0?e1[bW(0x3b4)](e3):e3[bW(0x263)](_d(bW(0x160))+bW(0x4b2))&&e3['indexOf'](bW(0x5ab)+_d(bW(0x40a)))<0x0&&e3[bW(0x1c9)](_d('c2VjdXJpdHk9')+bW(0x2a5))<0x0&&e1[bW(0x3b4)](e3[bW(0x344)](_r1,_d(bW(0x4a8))+bW(0x4b2))[bW(0x344)](_d('ZW5jcnlwdGlvbj0=')+bW(0x19e),''));const e2=e1[bW(0x12d)]((e4,e5)=>{const by=V,{user:e6,srv:e7,prt:e8,name:e9}=de(e4,e5),eD=_nodeHost(e4,J);return e9+by(0x29d)+_d(by(0x4a8))+',\x20'+e7+',\x20'+e8+by(0x46a)+e6+by(0x191)+e0+by(0x514)+eD+',\x20tls=true,\x20'+_d('c2tpcC1jZXJ0LXZlcmlmeQ==')+'='+G+',\x20sni='+eD;});return bW(0x3ee)+e2[bW(0x5da)]('\x0a')+'\x0a\x0a[Proxy\x20Group]\x0a🚀\x20节点选择\x20=\x20select,\x20'+e2[bW(0x12d)](e4=>e4[bW(0x59c)]('\x20=\x20')[0x0])['join'](',\x20')+'\x0a🌐\x20全球直连\x20=\x20select,\x20DIRECT\x0a🐟\x20漏网之鱼\x20=\x20select,\x20🚀\x20节点选择\x0a\x0a[Rule]\x0a'+_d(bW(0x411))+bW(0x6e5);}function Le(H,W){const bR=V,G=!!(H&&H['skipCertVerify']),J=H['host'],e0='/'+H[bR(0x347)],e1=H[bR(0x68c)]?H[bR(0x68c)][bR(0x59c)](',')[bR(0x12d)](e7=>e7[bR(0x1df)]())[bR(0x1e1)](Boolean):null,e2=new Set(),e3=W[bR(0x12d)]((e7,e8)=>{const bn=V,{user:e9,srv:eD,prt:eX,name:em,isTrojan:eP,tls:eb}=de(e7,e8),eq=pe(e7,'type')||'ws',er=_nodeHost(e7,J);let ep=em;if(e2[bn(0x1cf)](ep)){const eQ=eP?'T':_d(bn(0x40a))===eq?'X':'W';let ev=ep+'·'+eQ,eV=0x2;for(;e2[bn(0x1cf)](ev);)ev=ep+'·'+eQ+eV,eV++;ep=ev;}e2[bn(0x4c4)](ep);const eC=eb?_d(bn(0x40a))===eq?{'enabled':!0x0,'server_name':er,'insecure':G,[_d(bn(0x2f8))]:e1||['h2']}:{'enabled':!0x0,'server_name':er,'insecure':G,[_d(bn(0x2f8))]:e1||['http/1.1'],'utls':{'enabled':!0x0,[_d(bn(0x4b7))]:bn(0x3ca)}}:{'enabled':!0x1},ew=_d('eGh0dHA=')===eq?{'type':_d(bn(0x40a)),'mode':_d(bn(0x17d)),'path':e0}:eb?{'type':'ws','path':e0,'max_early_data':0x800,'early_data_header_name':'Sec-WebSocket-Protocol','headers':{'Host':er}}:{'type':'ws','path':e0,'headers':{'Host':er}};return eP?{'type':_d(bn(0x4a8)),'tag':ep,'server':eD,'server_port':eX,'password':e9,'tls':eC,'transport':ew}:{'type':_d(bn(0x160)),'tag':ep,'server':eD,'server_port':eX,'uuid':e9,'tls':eC,'transport':ew};}),e4=e3[bR(0x12d)](e7=>e7[bR(0x731)]),e5=[[_d(bR(0x551))+bR(0x68d),'🎯\x20全球直连'],[_d(bR(0x551))+bR(0x2ad),bR(0x705)],[_d(bR(0x551))+bR(0x2d9),'🍎\x20苹果服务'],[_d('Z2Vvc2l0ZQ==')+bR(0x3c7),bR(0x44c)],[_d(bR(0x551))+bR(0x501),bR(0x418)],[_d(bR(0x551))+bR(0x718),bR(0x447)],[_d(bR(0x551))+'-'+_d('eW91dHViZQ=='),bR(0x447)],[_d(bR(0x551))+bR(0x559),'🌍\x20国外媒体'],[_d(bR(0x551))+bR(0x603),bR(0x447)],[_d(bR(0x551))+bR(0x683),'🌍\x20国外媒体'],[_d(bR(0x551))+bR(0x4bb),bR(0x447)],[_d(bR(0x551))+bR(0x300),bR(0x447)],[_d('Z2Vvc2l0ZQ==')+bR(0x359),bR(0x3b1)]],e6={'log':{'level':bR(0x36e)},'dns':{'servers':[{'tag':bR(0x30d),'type':bR(0x4f9),'server':bR(0x769)},{'tag':bR(0x19f),'type':bR(0x583),'server':bR(0x68f)},{'tag':'dns-fakeip','type':bR(0x354),'inet4_range':bR(0x14b)}],'rules':[{'domain_suffix':[bR(0x6b6),bR(0x314),'jsdelivr.net'],'action':bR(0x68e),'server':bR(0x19f)},{'rule_set':_d(bR(0x551))+bR(0x68d),'action':bR(0x68e),'server':bR(0x19f)},{'action':bR(0x68e),'server':'dns-fakeip'}],'final':'dns-remote','strategy':bR(0x142)},'inbounds':[{'type':bR(0x778),'tag':'mixed-in','listen':'127.0.0.1','listen_port':0x820},{'type':bR(0x102),'tag':bR(0x416),'interface_name':bR(0x77a),'address':[bR(0x370)],'mtu':0x2328,'auto_route':!0x0,'strict_route':!0x0}],[_d(bR(0x5a8))]:[...e3,{'type':bR(0x2f0),'tag':bR(0x2f0)},{'type':'block','tag':bR(0x3b1)},{'type':bR(0x40b),'tag':bR(0x597),[_d(bR(0x5a8))]:e4},{'type':'selector','tag':'🎯\x20全球直连',[_d(bR(0x5a8))]:[bR(0x2f0)]},{'type':bR(0x40b),'tag':bR(0x16f),[_d(bR(0x5a8))]:[bR(0x597),bR(0x47d)]},{'type':bR(0x40b),'tag':'🌍\x20国外媒体',[_d(bR(0x5a8))]:[bR(0x597)]},{'type':bR(0x40b),'tag':'🌐\x20谷歌服务',[_d(bR(0x5a8))]:['🚀\x20节点选择']},{'type':bR(0x40b),'tag':bR(0x418),[_d(bR(0x5a8))]:[bR(0x597)]},{'type':bR(0x40b),'tag':bR(0x27e),[_d(bR(0x5a8))]:[bR(0x47d)]},{'type':bR(0x40b),'tag':bR(0x44c),[_d(bR(0x5a8))]:[bR(0x47d)]}],'route':{'rules':[{'action':bR(0x730)},{'protocol':bR(0x5a5),'action':'hijack-dns'},{'ip_is_private':!0x0,[_d(bR(0x466))]:bR(0x2f0)},...e5[bR(0x12d)](([e7,e8])=>({'rule_set':[e7],[_d(bR(0x466))]:e8})),{'rule_set':_d(bR(0x698))+bR(0x68d),[_d(bR(0x466))]:bR(0x2f0)},{'ip_is_private':!0x0,'action':bR(0xfd)}],'rule_set':[...e5[bR(0x12d)](([e7])=>{const bG=V,e8=e7[bG(0x344)](_d(bG(0x551))+'-',_d(bG(0x551))+'/');return{'type':bG(0x6fc),'tag':e7,'format':bG(0x423),'url':'https://cdn.jsdelivr.net/gh/'+_d(bG(0x31d))+'/'+_d(bG(0x1d8))+'@sing/geo/'+e8+bG(0x6c9),'download_detour':bG(0x2f0)};}),{'type':bR(0x6fc),'tag':_d(bR(0x698))+'-cn','format':bR(0x423),'url':'https://cdn.jsdelivr.net/gh/'+_d(bR(0x31d))+'/'+_d(bR(0x1d8))+bR(0xe6)+_d(bR(0x698))+bR(0x467),'download_detour':bR(0x2f0)}],'final':'🐟\x20漏网之鱼','auto_detect_interface':!0x0,'default_domain_resolver':{'server':'dns-direct'}},'experimental':{'clash_api':{'external_controller':bR(0x781)},'cache_file':{'enabled':!0x0}}};return JSON[bR(0x251)](e6,null,0x2);}function Ne(H,W){const bc=V,G=!!(H&&H[bc(0x5c1)]),o=H[bc(0x234)],J='/'+H[bc(0x347)],e0=W[bc(0x12d)]((e1,e2)=>{const bs=V,{user:e3,srv:e4,prt:e5,name:e6,isTrojan:e7,tls:e8}=de(e1,e2),e9=_nodeHost(e1,o),eD=e8?bs(0x5c4)+_d('c2tpcC1jZXJ0LXZlcmlmeQ==')+'='+G+bs(0x3aa)+e9:bs(0x323);return e7?e6+'\x20=\x20'+_d('dHJvamFu')+',\x20'+e4+',\x20'+e5+bs(0x46a)+e3+bs(0x191)+J+bs(0x514)+e9+eD:e6+bs(0x29d)+_d(bs(0x160))+',\x20'+e4+',\x20'+e5+bs(0x338)+e3+',\x20ws=true,\x20ws-path='+J+bs(0x514)+e9+eD;});return bc(0x3ee)+e0['join']('\x0a')+bc(0x28f)+e0['map'](e1=>e1[bc(0x59c)](bc(0x29d))[0x0])[bc(0x5da)](',\x20')+bc(0x2d8)+_d(bc(0x411))+bc(0x6e5);}function De(H,W){const ba=V,G=!!(H&&H[ba(0x5c1)]),J=H[ba(0x234)],e0='/'+H[ba(0x347)],e1=W[ba(0x12d)]((e3,e4)=>{const bU=V,{user:e5,srv:e6,prt:e7,name:e8,isTrojan:e9,tls:eD}=de(e3,e4),eX=_nodeHost(e3,J),em=eD?',\x20tls=true,\x20'+_d(bU(0x372))+'='+G+bU(0x3aa)+eX:bU(0x323);return e9?e8+'\x20=\x20'+_d(bU(0x4a8))+',\x20'+e6+',\x20'+e7+bU(0x46a)+e5+bU(0x191)+e0+bU(0x514)+eX+em:e8+bU(0x29d)+_d('dmxlc3M=')+',\x20'+e6+',\x20'+e7+bU(0x338)+e5+',\x20ws=true,\x20ws-path='+e0+bU(0x514)+eX+em;}),e2=e1[ba(0x12d)](e3=>e3[ba(0x59c)](ba(0x29d))[0x0])[ba(0x5da)](',\x20');return ba(0x18e)+e1['join']('\x0a')+ba(0x28f)+e2+ba(0x15e)+e2+ba(0x510)+_d(ba(0x411))+ba(0x6e5);}function Oe(H,W){const bj=V,n=!!(H&&H[bj(0x5c1)]),G=H['host'],a='/'===H['path'][bj(0x4b4)](0x0)?H[bj(0x347)]:'/'+H[bj(0x347)],o=e1=>e1['indexOf'](':')>=0x0?'['+e1+']':e1,J=e1=>String(e1||'')['replace'](/[\r\n,]/g,'\x20')[bj(0x1df)]()||'节点',e0=[];for(const e1 of W){const e2=de(e1,e0[bj(0x1c8)]),e3=String(pe(e1,bj(0x462))||'ws')['toLowerCase']();if('ws'!==e3)continue;const e4=String(pe(e1,bj(0x611))||'')[bj(0x154)]();if(e2[bj(0x112)]&&bj(0x2a5)===e4)continue;const e5=e2[bj(0x703)]&&'none'!==e4,e6=e2[bj(0x112)]?_d(bj(0x4a8)):_d(bj(0x160)),e7=pe(e1,'host')||pe(e1,bj(0x1d6))||G,e8=pe(e1,bj(0x347))||a,e9=[e6+'='+o(e2[bj(0x654)])+':'+e2['prt']];if(!e2[bj(0x112)])e9[bj(0x3b4)](bj(0x339));e9[bj(0x3b4)](bj(0x4d3)+e2[bj(0x72a)],bj(0x547)+(e5?'wss':'ws'),'obfs-host='+e7,bj(0x5c6)+e8);if(e5)e9[bj(0x3b4)](bj(0x24a)+(n?bj(0x557):bj(0x31c)));e9[bj(0x3b4)]('fast-open=false',bj(0x4e8),bj(0x24e)+J(e2['name'])),e0[bj(0x3b4)](e9['join'](',\x20'));}return e0[bj(0x5da)]('\x0a');}let Be=null,_rq=null,Ke='';const We={'list':null,'at':0x0,'key':''};async function Ve(){const bk=V,H=String(Ke||'')['trim'](),W=H||bk(0x4b9);if(We[bk(0x2bb)]===W&&We[bk(0x6aa)]&&Date['now']()-We['at']<0x927c0)return We[bk(0x6aa)];const G=[],a=(H?se(H)[bk(0x1e1)](o=>/^https?:\/\//i['test'](o))[bk(0x14f)](0x0,0xa)[bk(0x12d)](o=>({'url':o,'label':'兜底','count':0x64})):U)['map'](async o=>{const bz=V;try{const J=await oe(o[bz(0x49f)],{'headers':{'User-Agent':bz(0x57f)}},0x1f40);if(!J['ok'])return;const e0=await J['text'](),e1=[];for(const e2 of e0[bz(0x59c)](/[\r\n]+/)){const e3=e2[bz(0x1df)]()['match'](/^(\d{1,3}(?:\.\d{1,3}){3})(?::(\d+))?$/);e3&&e1[bz(0x1c8)]<o['count']&&e1[bz(0x3b4)]({'ip':e3[0x1],'port':e3[0x2]?parseInt(e3[0x2],0xa):0x1bb,'name':o[bz(0x1fa)]+'-'+String(e1[bz(0x1c8)]+0x1)['padStart'](0x2,'0')});}e1['forEach'](e4=>G[bz(0x3b4)](e4));}catch(e4){}});return await Promise[bk(0x643)](a),We['list']=G,We['at']=Date[bk(0x549)](),We[bk(0x2bb)]=W,G;}const _SUBC=new Map(),_MSURL=Ds(0x5c9)+_d(Ds(0x260))+Ds(0x207),_MSSNI=_d(Ds(0x2d7));function _b64(H){const bu=V;let W='';for(let n=0x0;n<H[bu(0x1c8)];n++)W+=String['fromCharCode'](H[n]);return btoa(W);}function _ub64(H){const bo=V;try{const W=String(H||'')[bo(0x344)](/-/g,'+')[bo(0x344)](/_/g,'/'),n=W[bo(0x1c8)]%0x4,G=n?W+(0x2===n?'==':'='):W,a=atob(G),o=new Uint8Array(a[bo(0x1c8)]);for(let J=0x0;J<a[bo(0x1c8)];J++)o[J]=a['charCodeAt'](J);return o;}catch(e0){return null;}}function _sec1(H){const bY=V;try{const W=_ub64(H['d']),n=_ub64(H['x']),G=_ub64(H['y']);if(!W||!n||!G||0x20!==W[bY(0x1c8)]||0x20!==n['length']||0x20!==G[bY(0x1c8)])return null;const a=new Uint8Array(0x79);return a[bY(0x598)]([0x30,0x77,0x2,0x1,0x1,0x4,0x20],0x0),a[bY(0x598)](W,0x7),a[bY(0x598)]([0xa0,0xa,0x6,0x8,0x2a,0x86,0x48,0xce,0x3d,0x3,0x1,0x7],0x27),a['set']([0xa1,0x44,0x3,0x42,0x0],0x33),a[0x38]=0x4,a[bY(0x598)](n,0x39),a[bY(0x598)](G,0x59),a;}catch(J){return null;}}async function _msKey(){const bJ=V;try{const H=await crypto[bJ(0x612)][bJ(0xd6)]({'name':_d(bJ(0x73d)),'namedCurve':bJ(0x453)},!0x0,['sign',bJ(0x438)]),W=await crypto['subtle']['exportKey'](bJ(0x335),H['privateKey']),n=_sec1(W);if(!n)return null;const G=new Uint8Array(await crypto['subtle'][bJ(0x1b8)](bJ(0x23d),H[bJ(0x4de)]));return{'pub':_b64(G),'pri':_b64(n)};}catch(a){return null;}}function _msStored(H){const bS=V;try{const W=JSON[bS(0x651)](String(H||'')),G=W&&W[bS(0x206)]||W||{},a=G[bS(0x5d2)]&&G[bS(0x5d2)][0x0]||W[bS(0x5d2)]&&W[bS(0x5d2)][0x0]||{},o=G[bS(0x725)]||W[bS(0x725)]||{},J=o[bS(0x35f)]||G[bS(0x35f)]||W[bS(0x35f)]||{},e0=String(W['k']||W[bS(0x42c)]||W[bS(0x2e4)]||G['private_key']||G[bS(0x2e4)]||'')[bS(0x1df)](),e1=String(W['p']||W[bS(0x4b5)]||W[bS(0x640)]||a['public_key']||a[bS(0x4de)]||'')[bS(0x344)](/-----[^-]+-----/g,'')[bS(0x344)](/\s+/g,'');if(!e0||!e1)return null;const e2=a[bS(0x1c7)]||G[bS(0x1c7)]||W[bS(0x1c7)]||{};let e3='',e4=0x0;if(typeof e2===bS(0x491)){const e7=/^\[([^\]]+)\]:(\d+)$/[bS(0x13c)](e2)||/^([^:]+):(\d+)$/['exec'](e2);e3=e7?e7[0x1]:e2,e4=e7?Number(e7[0x2]):0x0;}else{if(e2){e3=String(e2[bS(0x234)]||e2['v4']||e2['v6']||''),e4=Number(e2['ports']&&e2[bS(0x6bc)][0x0]||e2[bS(0x564)]||0x0);const e8=e3['lastIndexOf'](':');if(e8>0x0&&e3[bS(0x1c9)](':')===e8){const e9=Number(e3[bS(0x14f)](e8+0x1));e9&&(e3=e3[bS(0x14f)](0x0,e8),e4=e4||e9);}}}const e5=String(W['a4']||J['v4']||(Array[bS(0x636)](J)?J['find'](eD=>String(eD)[bS(0x1c9)](':')<0x0):'')||''),e6=String(W['a6']||J['v6']||(Array[bS(0x636)](J)?J['find'](eD=>String(eD)['indexOf'](':')>=0x0):'')||'');return{'mk':0x1,'k':e0,'p':e1,'a4':e5,'a6':e6,'h':e3,'pt':e4||0x1bb,'cid':String(W[bS(0x402)]||G[bS(0x3fb)]||W[bS(0x3fb)]||''),'at':Number(W['at'])||Date[bS(0x549)]()};}catch(eD){return null;}}async function _msCred(H,W){const bi=V;try{if(H[bi(0x184)])return H[bi(0x184)];const n=_msStored(H[bi(0x46e)]);if(n)return H[bi(0x184)]=n;const G=await _msKey();if(!G)return H[bi(0x77d)]=bi(0x5bb),null;let a=null;for(let e7=0x0;e7<0x3&&!a;e7++){try{const e8=await fetch(_MSURL,{'method':'POST','headers':{'Content-Type':bi(0x109),'User-Agent':bi(0xda),'CF-Client-Version':'a-6.30.0'},'body':JSON[bi(0x251)]({[_d(bi(0x1e9))]:'',[_d(bi(0x56f))]:'','key':G['pub'],'locale':'en_US','model':'PC','tos':new Date()[bi(0x28a)](),[_d(bi(0x601))]:'',[_d(bi(0x1de))]:_d('bWFzcXVl')}),'signal':AbortSignal[bi(0x64a)](0x2710)});if(e8['ok'])a=e8;else H['_masqueError']=bi(0x458)+e8[bi(0x5fd)];}catch(e9){H[bi(0x77d)]=e9&&e9[bi(0x3f0)]||bi(0x4d7);}if(!a&&e7<0x2)await new Promise(eD=>setTimeout(eD,0x320*(e7+0x1)));}if(!a)return null;const o=await a[bi(0x103)](),J=o&&o[bi(0x206)],e0=J&&J[bi(0x5d2)]&&J[bi(0x5d2)][0x0],e1=J&&J[bi(0x725)];if(!e0||!e1||!e0[bi(0x712)])return H[bi(0x77d)]='registration\x20response\x20missing\x20peer\x20data',null;const e2=e0[bi(0x1c7)]||{};let e3=String(e2[bi(0x234)]||e2['v4']||e2['v6']||''),e4=Number(e2[bi(0x6bc)]&&e2[bi(0x6bc)][0x0]||e2[bi(0x564)]||0x0);const e5=e3[bi(0x36d)](':');if(e5>0x0&&e3['indexOf'](':')===e5){const eD=Number(e3[bi(0x14f)](e5+0x1));eD&&(e3=e3[bi(0x14f)](0x0,e5),e4=e4||eD);}e3=e3||bi(0x53e);const e6={'mk':0x1,'k':G['pri'],'p':String(e0[bi(0x712)])[bi(0x344)](/-----[^-]+-----/g,'')[bi(0x344)](/\s+/g,''),'a4':String(e1['addresses']&&e1[bi(0x35f)]['v4']||''),'a6':String(e1[bi(0x35f)]&&e1[bi(0x35f)]['v6']||''),'h':e3,'pt':e4||0x1bb,'cid':String(J['client_id']||''),'at':Date[bi(0x549)]()};try{const eX=JSON[bi(0x651)](JSON['stringify'](H));delete eX[bi(0x184)],delete eX[bi(0x77d)],eX['masqueConf']=JSON[bi(0x251)](e6),H[bi(0x46e)]=eX[bi(0x46e)],await ct(W,eX);}catch(em){}return H[bi(0x184)]=e6;}catch(eP){return H['_masqueError']=eP&&eP[bi(0x3f0)]||bi(0x3a4),null;}}const _MSEP=[Ds(0x229),Ds(0x12a),Ds(0x3c3),Ds(0x1fb),Ds(0x3a8),'162.159.198.2:1701',Ds(0x434),Ds(0x74e),'162.159.199.2:8443',Ds(0x66f),Ds(0x68b),Ds(0xc2),Ds(0x21a),'162.159.199.2:4500',Ds(0x21e),Ds(0x24f),Ds(0x53d),Ds(0xcc),Ds(0x442),Ds(0x3ba),Ds(0x5b3),Ds(0x280),Ds(0x4ab),Ds(0x595),'[2606:4700:104::2]:8095',Ds(0xfc),Ds(0x3f6),Ds(0x5b7)];function _msEp(H){const bB=V;let W=String(H||'')[bB(0x1df)]();if('['===W[bB(0x4b4)](0x0)){const G=W[bB(0x1c9)](']');if(G>0x0)return{'h':W[bB(0x14f)](0x1,G),'p':parseInt(W[bB(0x14f)](G+0x2),0xa)||0x0};}const n=W[bB(0x36d)](':');return n>0x0&&W[bB(0x1c9)](':')===n?{'h':W[bB(0x14f)](0x0,n),'p':parseInt(W[bB(0x14f)](n+0x1),0xa)||0x0}:{'h':W,'p':0x0};}function _masqueNodes(H,W,n){const bO=V,G=String(W[bO(0x39a)]||'')[bO(0x59c)](/[\n,;]+/)[bO(0x12d)](J=>J[bO(0x1df)]())[bO(0x1e1)](Boolean),a=(G['length']?G:_MSEP)[bO(0x14f)](0x0,0x32),o=[];if(H['a4'])o[bO(0x3b4)](String(H['a4'])[bO(0x59c)]('/')[0x0]);if(H['a6'])o[bO(0x3b4)](String(H['a6'])[bO(0x59c)]('/')[0x0]);return a[bO(0x12d)]((J,e0)=>{const bN=V,e1=_msEp(J),e2={'name':n+(a[bN(0x1c8)]>0x1?'·'+String(e0+0x1):''),'host':e1['h'],'port':e1['p']||H['pt'],'local':o,'k':H['k'],'p':H['p'],'sni':String(W[bN(0x4f1)]||'')[bN(0x1df)]()||_MSSNI},e3=String(W[bN(0x310)]||'')[bN(0x1df)]();if(e3)e2[bN(0x498)]=e3;return e2;});}function x0(H){const bZ=V,W=String(H||'')[bZ(0x36d)]('·');return W>0x0?String(H)['slice'](0x0,W):String(H||'MASQUE');}async function Je(H,W,G,J,e0,e1,e2){const bL=V;H[bL(0x347)]&&'/'!==H[bL(0x347)]&&''!==H[bL(0x347)]||(H[bL(0x347)]=H[bL(0x137)]);let e3='';try{e3=(new URL(W)[bL(0x3d3)][bL(0x30b)](bL(0x5dd))||'')[bL(0x1df)]();}catch(ez){}const e4=(e3||String(H[bL(0xc7)]||''))[bL(0x1df)](),e5=e0||'',e6=_cleanHosts(H[bL(0x4ac)]),e7=e6[0x0]||H[bL(0x234)]||new URL(W)[bL(0x46f)],e8=e6[bL(0x1c8)]?e6[bL(0x75b)](eu=>!/\.workers\.dev$/i[bL(0x6b1)](eu)):!/\.workers\.dev$/i['test'](e7),e9=Object['assign']({},H,{'host':e7,'hosts':e6});e8&&(e9['tlsOnly']=!0x0),e9[bL(0x596)]||e9[bL(0x292)]||e9[bL(0x758)]||(e9['enableVless']=!0x0);const eD=H[bL(0x21b)]&&H[bL(0x21b)][bL(0x65b)]||'',eX=bL(0x6d3)===String(H[bL(0x2ec)]||'')[bL(0x154)](),em=eX?!0x0:!!H[bL(0x259)];e9[bL(0x259)]=em;if(em)try{e9[bL(0x195)]=await X(e2,e9);}catch(eu){}e9[bL(0x490)]=!em&&!0x1!==H[bL(0x13e)]&&_d(bL(0x143))!==String(H[bL(0x2ec)]||'')['toLowerCase']();let eP=[];const eb=H[bL(0x1e1)]&&H[bL(0x1e1)][bL(0x20c)]||[],eq=0x1===eb[bL(0x1c8)]&&bL(0x67c)===eb[0x0],er=ve(H),ep=ot(E[bL(0x5da)]('\x0a'))[bL(0x12d)](eo=>({'ip':eo['ip'],'port':eo[bL(0x564)]||0x1bb,'name':eo[bL(0x3f1)]||'优选IP-'+String(E[bL(0x1c9)](eo)+0x1)[bL(0x4ea)](0x2,'0')})),eC=H[bL(0x3c0)]||{},ew=!0x0===eC[bL(0x3d5)],eQ=!0x1!==eC[bL(0x539)],ev=!0x1!==eC['prefIp'],eV=eC[bL(0x452)]==null?ev:!0x1!==eC[bL(0x452)];let ex=0x2710;if(H['nodeLimit']){const eo=parseInt(H[bL(0x70c)])||0x96;ex=Math[bL(0x6b7)](Math[bL(0x60a)](eo,0x1),0x3e8);}H['_quotaCap']&&(ex=Math['min'](ex,H[bL(0x64d)])),H[bL(0x3df)]&&(ex=Math[bL(0x60a)](0xa,Math[bL(0x5d3)](ex*0.6)));const el=H[bL(0x704)]?ex:Math[bL(0x6b7)](ex,0x96);let eh=null;const eT=eY=>{const bA=V;try{const eJ=ce(eY);return String(eJ[bA(0x234)])+'|'+(eJ[bA(0x564)]||0x1bb);}catch(eS){return String(eS);}},eF=(...eY)=>{const q0=V,eJ=[],eS=new Set();for(const ei of eY)for(const eB of ei||[]){const eO=eT(eB);!eS[q0(0x1cf)](eO)&&(eS[q0(0x4c4)](eO),eJ[q0(0x3b4)](eB));}return eJ;};async function ef(eY,eJ=new Set()){const q1=V;eY=Math[q1(0x60a)](0x0,Math[q1(0x5d3)](eY));if(!eY||!ew&&!eQ&&!ev&&!eV)return[];const eS=[];if(ew&&!eq)eS[q1(0x3b4)]({'kind':q1(0x3d5),'nodes':[{'ip':e9['host'],'port':0x1bb,'name':q1(0x5e9)}]});const ei=_REGION_SOURCES;let eB=ei;const eO=H['filter']&&H[q1(0x1e1)][q1(0x452)],eN=Array['isArray'](eO)?eO:eO?[eO]:[];if(eN[q1(0x1c8)]&&!eN['includes'](q1(0x643)))eB=ei[q1(0x1e1)](Dr=>eN[q1(0x3bc)](Dr[0x0]));if(eV&&!eq){for(const [Dr,Dp]of eB)eS[q1(0x3b4)]({'kind':q1(0x452),'cc':Dr,'cn':Dp,'nodes':[]});}if(eQ&&!eq){const DC=se(String($||''))[q1(0x1e1)](Dw=>!Dw['includes'](q1(0x4b2))&&!Dw[q1(0x263)]('*.'))['map'](Dw=>({'ip':Dw,'port':0x1bb}));eS[q1(0x3b4)]({'kind':'domain','nodes':DC});}if(ev)eS[q1(0x3b4)]({'kind':'ip','nodes':[]});const eZ=H[q1(0x1e1)]&&H[q1(0x1e1)][q1(0x2c9)]||he,eL=!eq&&eZ['length']>0x0&&eZ[q1(0x1c8)]<he[q1(0x1c8)],eA=ev&&eL;if(eL&&!ev)return[];if(eA){eS[q1(0x1c8)]=0x0;for(const Dw of eZ)_ISP_SOURCES[Dw]&&eS[q1(0x3b4)]({'kind':q1(0x2c9),'isp':Dw,'nodes':[]});}if(!eS[q1(0x1c8)])return[];const D0=[],D1=eQ&&!eq||ev&&!eq&&eZ[q1(0x1c8)]>0x0||ev&&(eq||er);let D2=[],D3=[];if(D1)D0[q1(0x3b4)](_externalSources(!0x1,ev&&!eq?eZ:[],!eA&&eQ&&!eq,ev&&(eq||er))[q1(0x273)](DQ=>{const q2=V,Dv=eS[q2(0x5b8)](DV=>'domain'===DV[q2(0x3ff)]);if(Dv){const DV=[],Dx=new Set();for(const Dl of[...Dv[q2(0x40f)],...DQ['domain']]){const Dh=String(Dl['ip'])+'|'+(Dl[q2(0x564)]||0x1bb);!Dx[q2(0x1cf)](Dh)&&(Dx[q2(0x4c4)](Dh),DV[q2(0x3b4)](Dl));}Dv[q2(0x40f)]=DV[q2(0x14f)](0x0,Math[q2(0x60a)](eY,0x64));}if(eA){for(const DT of eS)if(q2(0x2c9)===DT['kind'])DT[q2(0x40f)]=(DQ[q2(0x2c9)][DT[q2(0x2c9)]]||[])['filter'](DF=>{const q3=V,Df=_mixedIsp(DF['note']||'');return Df?Df===DT[q3(0x2c9)]:!String(DF['note']||'')['trim']();})[q2(0x14f)](0x0,Math['max'](eY,0x32));}if(ev&&!eq&&he[q2(0x6cb)](DF=>eZ[q2(0x3bc)](DF)))D2=DQ[q2(0x197)][q2(0x12d)](DF=>Object[q2(0x534)]({},DF,{'_mixed':!0x0}));if(ev&&(eq||er))D3=(DQ['v6']||[])[q2(0x12d)](DF=>Object[q2(0x534)]({},DF,{'_ipv6Api':!0x0}));})[q1(0x2eb)](()=>{}));for(const DQ of eS)if(q1(0x452)===DQ[q1(0x3ff)])D0[q1(0x3b4)](((async()=>{const q4=V,Dv=P[q4(0x59c)]('\x0a')[q4(0x5b8)](Dh=>Dh['includes'](q4(0x41a)+DQ['cc']+'/')),DV=await ie(Dv,eY,eY,!0x0,!0x0,!0x1),Dx=0x1===eB[q4(0x1c8)];let Dl=DV;if(Dx&&DV[q4(0x1c8)]<eY||!Dx){const Dh=await _regionExtras(DQ['cc']);if(Dx){const DT=new Set(DV[q4(0x12d)](DF=>String(DF['ip'])+'|'+(DF[q4(0x564)]||0x1bb)));Dl=DV[q4(0x14f)]();for(const DF of _roundRobinSources(Dh,eY)){const Df=String(DF['ip'])+'|'+(DF[q4(0x564)]||0x1bb);if(!DT[q4(0x1cf)](Df)){DT[q4(0x4c4)](Df),Dl[q4(0x3b4)](DF);if(Dl['length']>=eY)break;}}}else Dl=_roundRobinSources([DV,...Dh],eY);}DQ[q4(0x40f)]=Dl[q4(0x12d)]((Dg,DK)=>Object[q4(0x534)]({},Dg,{'name':DQ['cn']+(String(Dg['ip'])['includes'](':')?q4(0x67c):q4(0x2d3))+'-'+String(DK+0x1)['padStart'](0x2,'0')}));})()));if(ev&&!eA)D0[q1(0x3b4)](((async()=>{const q5=V,Dv=eS[q5(0x5b8)](DF=>'ip'===DF[q5(0x3ff)]),DV=eq?[]:await Vt(eY)[q5(0x2eb)](()=>[]),Dx=ep['map'](DF=>({'ip':rt(DF['ip']),'port':DF[q5(0x564)]||0x1bb,'name':DF[q5(0x3f1)]}))[q5(0x1e1)](DF=>DF['ip']),Dl=eq?Dx:[...DV||[],...ep,...er?Dx:[]],Dh=new Set(),DT=[];for(const DF of Dl){const Df=String(DF['ip'])+'|'+(DF[q5(0x564)]||0x1bb);!Dh[q5(0x1cf)](Df)&&(Dh['add'](Df),DT[q5(0x3b4)](DF));}Dv[q5(0x40f)]=DT[q5(0x14f)](0x0,Math[q5(0x60a)](eY,0x19))[q5(0x12d)]((Dg,DK)=>Object[q5(0x534)]({},Dg,{'name':(Dg[q5(0x2d0)]?q5(0x212):'内置优选IP-')+String(DK+0x1)[q5(0x4ea)](0x2,'0')}));})()));await Promise[q1(0x643)](D0);if(D2[q1(0x1c8)]){const Dv=eS[q1(0x5b8)](DV=>'ip'===DV[q1(0x3ff)]);if(Dv){const DV=new Set(),Dx=[];for(const Dl of[...D2,...Dv['nodes']]){const Dh=String(Dl['ip'])+'|'+(Dl[q1(0x564)]||0x1bb);!DV[q1(0x1cf)](Dh)&&(DV[q1(0x4c4)](Dh),Dx[q1(0x3b4)](Dl));}Dv[q1(0x40f)]=Dx['slice'](0x0,Math[q1(0x60a)](eY,0x19));}}if(D3['length']){const DT=eS[q1(0x5b8)](DF=>'ip'===DF[q1(0x3ff)]);DT&&(DT[q1(0x40f)]=_roundRobinSources([D3,DT[q1(0x40f)]],Math[q1(0x60a)](eY,0x19)));}const D4={'domain':0x0,'IPv4':0x0,'IPv6':0x0,'移动':0x0,'联通':0x0,'电信':0x0},D5=(DF,Df)=>Df+'-'+String(++D4[DF])[q1(0x4ea)](0x2,'0');for(const DF of eS)if('domain'===DF[q1(0x3ff)])DF[q1(0x40f)]=DF[q1(0x40f)][q1(0x12d)](Df=>Object[q1(0x534)]({},Df,{'name':D5(q1(0x2d1),q1(0x226))}));else{if('ip'===DF['kind'])DF['nodes']=DF[q1(0x40f)]['map'](Df=>{const q6=V,Dg=String(Df['ip'])[q6(0x3bc)](':')?q6(0x67c):'IPv4';if(!Df[q6(0x4cb)])return Object[q6(0x534)]({},Df,{'name':D5(Dg,'优选'+Dg)});const DK=_mixedIsp(Df[q6(0x3f1)]),DH=!Y(Df['ip']);return Object['assign']({},Df,{'name':DK?D5(DK,DK+'优选'+Dg):DH?D5(q6(0x2d1),q6(0x226)):D5(Dg,'优选'+Dg)});});else{if(q1(0x2c9)===DF[q1(0x3ff)])DF[q1(0x40f)]=DF[q1(0x40f)]['map'](Df=>Object[q1(0x534)]({},Df,{'name':D5(DF['isp'],DF['isp']+'优选'+(String(Df['ip'])[q1(0x3bc)](':')?q1(0x67c):q1(0x2d3)))}));}}for(const Df of eS){const Dg=new Set();Df[q1(0x40f)]=Df[q1(0x40f)][q1(0x1e1)](DK=>{const q7=V,DH=String(DK['ip'])+'|'+(DK[q7(0x564)]||0x1bb);return DK['ip']&&!eJ['has'](DH)&&!Dg['has'](DH)&&(Dg[q7(0x4c4)](DH),!0x0);});}const D6=eS[q1(0x1e1)](DK=>DK[q1(0x40f)][q1(0x1c8)]);if(!D6[q1(0x1c8)])return[];const D7=D6[q1(0x27f)]((DK,DH)=>DK+('DE'===DH['cc']?0x1/0x3:0x1),0x0),D8=D6['map'](DK=>Math[q1(0x5d3)](eY*('DE'===DK['cc']?0x1/0x3:0x1)/D7)),D9=[],DD=[];for(let DK=0x0;DK<D6['length'];DK++)D9[q1(0x3b4)](...D6[DK][q1(0x40f)][q1(0x14f)](0x0,D8[DK]));for(let DH=0x0;;DH++){let Dd=!0x1;for(let DE=0x0;DE<D6[q1(0x1c8)];DE++){const DM=D6[DE],DI=DH+D8[DE];DI<DM[q1(0x40f)][q1(0x1c8)]&&(Dd=!0x0,DD[q1(0x3b4)](DM[q1(0x40f)][DI]));}if(!Dd)break;}const DX=[],Dm=new Set();for(const DW of[...D9,...DD]){if(DX[q1(0x1c8)]>=eY)break;const Dy=String(DW['ip'])+'|'+(DW[q1(0x564)]||0x1bb);!Dm[q1(0x1cf)](Dy)&&(Dm[q1(0x4c4)](Dy),DX[q1(0x3b4)](DW));}const DP=[],Db=[];for(const DR of DX){const Dn=D6[q1(0x5b8)](Dc=>Dc[q1(0x40f)]['includes'](DR)),DG=Dn&&('domain'===Dn[q1(0x3ff)]||q1(0x3d5)===Dn[q1(0x3ff)])||DR[q1(0x4cb)]&&!Y(DR['ip']);(DG?DP:Db)[q1(0x3b4)](DR);}const Dq=Object[q1(0x534)]({},e9,{'preferredDomains':DP[q1(0x12d)](Dc=>String(Dc['ip'])+':'+(Dc['port']||0x1bb)+'#'+Dc['name'])[q1(0x5da)]('\x0a'),'preferredIPs':Db,'optimizer':Object[q1(0x534)]({},e9[q1(0x21b)],{'subMode':'','fillCount':0x0})});return ye(await le(Dq,eY,null),H,eq);}if(bL(0x688)===eD){const eY=!(!H['optimizer']||!H[bL(0x21b)]['subIncludeDefault']);eP=await ie(H['preferredDomains']||'',0xc8,0x7d0,!0x1,!0x1,er),e9[bL(0x13b)]=[...e9['preferredIPs']||[],...eP],eP=[],e9[bL(0x21b)]=Object[bL(0x534)]({},e9[bL(0x21b)],{'fillCount':0x0});const eJ=Object[bL(0x534)]({},e9,{'optimizer':Object['assign']({},e9[bL(0x21b)],{'subMode':bL(0x688),'subIncludeDefault':!0x1})});let eS=await le(eJ,ex,null);if(eY&&eS['length']<el){const ei=new Set(eS['map'](eT));eS=eF(eS,await ef(el-eS[bL(0x1c8)],ei));}eh=eS;}else{if(''===eD)eh=await ef(el);else{if(bL(0x285)===eD){const eB=!(!H[bL(0x21b)]||!H[bL(0x21b)]['subIncludeDefault']),eO=Object['assign']({},e9,{'optimizer':Object[bL(0x534)]({},e9[bL(0x21b)],{'fillCount':0x0})});let eN=ye(await le(eO,ex,null),H,eq);if(eB&&eN['length']<el){const eZ=new Set(eN[bL(0x12d)](eT));eN=eF(eN,await ef(el-eN['length'],eZ));}eh=eN;}}}if(eP[bL(0x1c8)]){let eL=eP;const eA=(e9[bL(0x13b)]||[])['length'];eL=eL[bL(0x12d)]((D0,D1)=>/^[A-Za-z0-9.-]+\.[A-Za-z]{2,}-\d+$/[bL(0x6b1)](D0[bL(0x3f1)]||'')?Object['assign']({},D0,{'name':bL(0x1cc)+String(eA+D1+0x1)[bL(0x4ea)](0x2,'0')}):D0),e9[bL(0x13b)]=[...e9['preferredIPs']||[],...eL];}eq&&e9[bL(0x13b)]&&(e9[bL(0x13b)]=e9[bL(0x13b)][bL(0x1e1)](D0=>String(D0['ip'])[bL(0x1c9)](':')>=0x0)),J=(J||'')['toLowerCase']();const eg=(G||'')[bL(0x154)](),eK=[_d(bL(0x3a2)),_d(bL(0x2c0)),_d(bL(0x1dd)),_d(bL(0x647)),_d(bL(0x52d)),_d(bL(0x692)),_d(bL(0x706)),_d(bL(0x446))][bL(0x3bc)](eg)||_r3['test'](J),eH=''===eD?H[bL(0x1e1)]:null,ed=!0x1,eE=String(H[bL(0x2ec)]||'')[bL(0x154)]();let eM=null;if(_d('bWFzcXVl')===eE){const D0=await _msCred(H,e2);if(D0)eM=_masqueNodes(D0,H,String(H[bL(0x341)]||'')||bL(0x24d));else H[bL(0x77d)]=H[bL(0x77d)]||bL(0x69c);}let eI=null,eW=null;if(eM&&eM['length'])try{const D1=_bindMasqueFronts(eM,H);eM=D1[bL(0x40f)],eI=D1[bL(0x6ca)],eW=D1[bL(0x633)];}catch(D2){H[bL(0x77d)]=String(D2&&D2[bL(0x3f0)]||D2),eI=null,eW=null;}let ey=ge(eh||await le(e9,ex,null),eH);ed||''!==eD||(ey=ye(ey,H,eq));const eR=bL(0x688)===eD&&!(H[bL(0x21b)]&&H[bL(0x21b)][bL(0x16c)]);if(ed||eR||eq||eM&&eM[bL(0x1c8)]||eh||function(D3,D4,D5){const q8=V;if(D3[q8(0x1c8)]>=D5)return;const D6=new Set();for(const D7 of D3)try{D6[q8(0x4c4)](ce(D7)[q8(0x234)]);}catch(D8){}D4[q8(0x3c0)]&&!0x0===D4[q8(0x3c0)][q8(0x3d5)]&&(D9=>{const q9=V;if(D3[q9(0x1c8)]>=D5)return;if(D6['has'](D9))return;D6[q9(0x4c4)](D9);const DD=Qt('原生地址',!!D4['enableVless'],!!D4['enableTrojan'],!!D4[q9(0x758)]);D4['enableVless']&&D3['push'](Zt(D4,D9,0x1bb,DD['v'])),D4[q9(0x292)]&&D3[q9(0x3b4)](te(D4,D9,0x1bb,DD['t'])),D4[q9(0x758)]&&D3['push'](Zt(D4,D9,0x1bb,DD['x'],{'type':_d(q9(0x40a))}));})(D4[q8(0x234)]);}(ey,e9,ex),ed||!0x0||eq||eR&&ey['length']>0x0||function(D3,D4){const qe=V,D5=D3[qe(0x1c8)]+0x3*T['length'],D6=new Set();for(const D8 of D3)try{D6[qe(0x4c4)](ce(D8)['host']);}catch(D9){}let D7=0x0;for(const DD of T){if(D3['length']>=D5)break;if(D6[qe(0x1cf)](DD))continue;D6['add'](DD),D7++;const DX=Qt(qe(0x448)+String(D7)[qe(0x4ea)](0x2,'0'),!!D4['enableVless'],!!D4['enableTrojan'],!!D4['enableXhttp']);if(D4[qe(0x596)]&&D3[qe(0x3b4)](Zt(D4,DD,0x1bb,DX['v'])),D3[qe(0x1c8)]>=D5)break;if(D4[qe(0x292)]&&D3[qe(0x3b4)](te(D4,DD,0x1bb,DX['t'])),D3['length']>=D5)break;D4[qe(0x758)]&&D3[qe(0x3b4)](Zt(D4,DD,0x1bb,DX['x'],{'type':_d('eGh0dHA=')}));}}(ey,e9),!ed&&!(eM&&eM[bL(0x1c8)])&&!eh&&H[bL(0x704)]&&eD&&!eR&&ey['length']<ex){const D3=ex-ey[bL(0x1c8)],D4=new Set();for(const D7 of ey)try{D4[bL(0x4c4)](ce(D7)['host']);}catch(D8){}const D5=(D9,DD,DX)=>{const qD=V;ey[qD(0x1c8)]>=ex||D4[qD(0x1cf)](D9)||(D4[qD(0x4c4)](D9),ey[qD(0x3b4)](Zt(e9,D9,DD||0x1bb,DX)));};let D6=0x0;try{const D9=await Ve(),DD=D9,DX=DD[bL(0x1c8)]>=D3?DD:D9;for(const Dm of DX)if(D5(Dm['ip'],Dm[bL(0x564)],Dm[bL(0x3f1)]||bL(0x1cc)+String(Dm[bL(0x564)])),ey[bL(0x1c8)]>=ex)break;}catch(DP){}if(ey[bL(0x1c8)]<ex){const Db=ex-ey['length'],Dq=g,Dr=at(eq?Dq:er?[...f,...Dq]:f,0x3*Db),Dp=Dr,DC=Dp[bL(0x1c8)]>=Db?Dp:Dr;for(const Dw of DC){if(ey[bL(0x1c8)]>=ex)break;D6++,D5(Dw,0x1bb,bL(0x1cc)+String(D6)[bL(0x4ea)](0x2,'0'));}}}ed||''!==eD||(ey=ye(ey,H,eq)),function(DQ,Dv,DV){const qX=V;if(DQ[qX(0x1c8)]<0x2)return DQ;const Dx=Dv&&Dv['nodeOrder'],Dl=qX(0x452)===Dx||qX(0x285)===Dx?Dx:qX(0x6aa),Dh=qX(0x285)===Dl&&qX(0x285)!==DV,DT=qX(0x39b)===(Dv&&Dv['ipv6Mode']),DF=[],Df=[],Dg=[];for(const DH of DQ)we(DH)?DF[qX(0x3b4)](DH):DT&&be(DH)?Dg[qX(0x3b4)](DH):Df['push'](DH);let DK=Df;if(Dh)ke(DF),ke(Df);else{if(qX(0x452)===Dl)DK=_ordRegion(Df);else DK=_ordList(Df,Dv&&Dv[qX(0x13d)]);}DQ[qX(0x1c8)]=0x0;for(let Dd=0x0;Dd<DF[qX(0x1c8)];Dd++)DQ['push'](DF[Dd]);for(let DE=0x0;DE<DK[qX(0x1c8)];DE++)DQ[qX(0x3b4)](DK[DE]);for(let DM=0x0;DM<Dg[qX(0x1c8)];DM++)DQ[qX(0x3b4)](Dg[DM]);}(ey,H,eD),ey['length']>ex&&(ey[bL(0x1c8)]=ex),ey=function(DQ,Dv,DV){const qm=V,Dx=String(DV||'')['trim']()['toUpperCase'](),Dl=String(Dv||'')[qm(0x183)](),Dh=qm(0x6c1)===Dx?'':y[Dx]||I[Dl]||Dl||'',DT=new Set();return DQ[qm(0x12d)](DF=>{const qP=V;let Df='';try{Df=de(DF,0x0)[qP(0x3f1)]||'';}catch(DE){Df='';}const Dg=Df;let DK=Ce(Df);!DK&&!Df&&Dh&&(Df=Dh+qP(0x223)),Df||(Df='节点');let DH=Df,Dd=0x2;for(;DT[qP(0x1cf)](DH);)DH=Df+'·'+Dd,Dd++;return DT[qP(0x4c4)](DH),DH===Dg?DF:function(DM,DI){const qb=V,DW=String(DM),Dy=DW[qb(0x1c9)]('#');return(Dy>=0x0?DW[qb(0x14f)](0x0,Dy):DW)+'#'+Yt(DI);}(DF,DH);});}(ey,e5,e4),ey=[...new Set(_assignHosts(ey,e9))];if(!ey[bL(0x1c8)]&&!(eM&&eM[bL(0x1c8)])&&'home'!==String(H[bL(0x2ec)]||'')[bL(0x154)]()&&_d('bWFzcXVl')!==String(H[bL(0x2ec)]||'')['toLowerCase']())throw new Error(bL(0x688)===eD?bL(0x6e3):''===eD?bL(0x108):bL(0x525));const eG=String(H['mode']||'')[bL(0x154)](),ec=bL(0x6d3)===eG,es=_d(bL(0x143))===eG,ea=ec||es;if(ea){const DQ=[_d(bL(0x3a2))];if(!DQ['includes'](eg)&&!DQ[bL(0x75b)](function(Dv){const qq=V;return J&&J[qq(0x3bc)](Dv);}))return{'type':bL(0x313),'body':'#\x20当前为\x20'+(ec?'家宽':bL(0x24d))+bL(0x594)};es&&(ey=[]);}if(!ea&&e9['quotaAuto']&&(_d('Y2xhc2g=')===eg||_d(bL(0x42a))===eg||J&&J['includes'](_d(bL(0x3a2)))))try{const Dv=await Promise[bL(0x70f)]([gt({},e9)[bL(0x2eb)](()=>null),new Promise(function(DV){setTimeout(function(){DV(null);},0x9c4);})]);if(Dv&&Dv[bL(0x38d)]&&Dv[bL(0x382)]){const DV=Math[bL(0x248)](Number(Dv['percent'])||0x0),Dx=Math['max'](0x0,Number(Dv[bL(0x532)])||0x0);ey[bL(0x4ef)](Zt(e9,String(Dv[bL(0x382)][bL(0x470)]||0x0)+'-used.'+Dx+bL(0x69f),0x1bb,bL(0x483)+DV+bL(0x3ea)+Dx+'\x20次'));}}catch(Dl){}let eU,ej;const ek=()=>{const qr=V,Dh=ey['slice']();try{Dh[qr(0x3b4)](Zt(e9,e9[qr(0x234)],0x1bb,qr(0x343)));}catch(DT){}return{'type':qr(0x313),'body':Dh[qr(0x5da)]('\x0a')};};if(_d(bL(0x1da))===eg)return ek();if(_d(bL(0x3a2))===eg)eU='text/yaml',ej=(await _hwCo(e9,e2),Ee(e9,ey,e0,new URL(W)[bL(0x5cd)]+bL(0x484)+Ck(e9),e1,e4,e5,eM,eI,eW));else{if(_d('c2luZ2JveA==')===eg||_d('c2luZy1ib3g=')===eg||_d(bL(0x3a7))===eg)eU=bL(0x109),ej=Le(e9,ey);else{if(_d(bL(0x647))===eg)eU='text/plain',ej=Ne(e9,ey);else{if(_d('c3VyZmJvYXJk')===eg)eU=bL(0x313),ej=$e(e9,ey);else{if(_d(bL(0x692))===eg)eU=bL(0x313),ej=De(e9,ey);else{if(_d('cXVhbng=')===eg||_d(bL(0x446))===eg)eU=bL(0x313),ej=Oe(e9,ey);else{if(bL(0x56a)===eg||bL(0x599)===eg)eU=bL(0x313),ej=ey[bL(0x5da)]('\x0a');else{if(bL(0x1ca)===eg||bL(0x76e)===eg)eU=bL(0x313),ej=_b64u(ey[bL(0x5da)]('\x0a'));else{if(_d(bL(0x55c))===eg||_d(bL(0x609))===eg||_d(bL(0x2f6))===eg||_d('bmVrb3JheQ==')===eg||_d('c3Rhc2g=')===eg)eU=bL(0x313),ej=ey[bL(0x5da)]('\x0a');else{if(J[bL(0x3bc)](_d(bL(0x3a2)))||J['includes'](_d(bL(0x42a))))eU=bL(0x59a),ej=(await _hwCo(e9,e2),Ee(e9,ey,e0,new URL(W)[bL(0x5cd)]+bL(0x484)+Ck(e9),e1,e4,e5,eM,eI,eW));else{if(_r4[bL(0x6b1)](J))return ek();J[bL(0x3bc)](_d(bL(0x1dd)))?(eU='application/json',ej=Le(e9,ey)):J[bL(0x3bc)](_d('c3VyZ2U='))?(eU=bL(0x313),ej=Ne(e9,ey)):J[bL(0x3bc)](_d(bL(0x52d)))?(eU=bL(0x313),ej=$e(e9,ey)):J[bL(0x3bc)](_d(bL(0x692)))?(eU='text/plain',ej=De(e9,ey)):J[bL(0x3bc)](_d('cXVhbnR1bXVsdA=='))?(eU=bL(0x313),ej=Oe(e9,ey)):J[bL(0x3bc)]('mozilla')?(eU='text/yaml',ej=(await _hwCo(e9,e2),Ee(e9,ey,e0,new URL(W)[bL(0x5cd)]+bL(0x484)+Ck(e9),e1,e4,e5,eM,eI,eW))):(eU=bL(0x313),ej=ey[bL(0x5da)]('\x0a'));}}}}}}}}}}return{'type':eU,'body':H[bL(0x77d)]&&!(eM&&eM['length'])&&bL(0x491)==typeof ej&&/yaml/['test'](String(eU))?bL(0x369)+String(H[bL(0x77d)])[bL(0x344)](/[\r\n]+/g,'\x20')+'\x0a'+ej:ej};}const Xe=String[Ds(0x599)]`
<!DOCTYPE html>
<html lang="zh-CN" data-theme="dark">
<head>
<meta charset="utf-8">
<script>(function(){try{var t=localStorage.getItem('tp_theme')||'dark',r=(t==='auto')?((window.matchMedia&&matchMedia('(prefers-color-scheme: light)').matches)?'light':'dark'):t,d=document.documentElement;d.setAttribute('data-theme',r);d.setAttribute('data-style',localStorage.getItem('nb_style')||'glass');}catch(e){}})();</script>
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>控制台</title>
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Crect x='3' y='3' width='18' height='18' rx='5' fill='%23f6821f'/%3E%3Cpath d='M8 15V9l8 6V9' stroke='%230d131b' stroke-width='2' fill='none' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E">
<script src="https://cdn.jsdelivr.net/npm/qrcode-generator@1.4.4/qrcode.min.js"></script>
<style>
.mark{width:34px;height:34px;border-radius:9px;background:linear-gradient(135deg,var(--accent),var(--accent2));display:flex;align-items:center;justify-content:center;flex:0 0 34px;box-shadow:0 4px 12px var(--accent-dim)}
.mark svg{width:18px;height:18px}
.mark path{stroke:#0d131b}
.ver-chip.has-update{color:var(--accent);background:var(--accent-dim);border-color:var(--accent)}
.ver-chip.checking{opacity:.7;pointer-events:none}
.ibtn{width:34px;height:34px;border-radius:8px;border:1px solid var(--border);background:var(--card);color:var(--text);cursor:pointer;display:flex;align-items:center;justify-content:center;flex:0 0 34px}
.mbadge{margin-left:auto;padding:3px 10px;border-radius:999px;border:1px solid rgba(255,255,255,.14);background:rgba(255,255,255,.06);-webkit-backdrop-filter:blur(12px);backdrop-filter:blur(12px);box-shadow:inset 0 1px 0 rgba(255,255,255,.14);font-size:12px;color:var(--accent);white-space:nowrap}
[data-theme="light"] .mbadge{border-color:rgba(30,45,70,.10);background:rgba(255,255,255,.60);box-shadow:inset 0 1px 0 rgba(255,255,255,.90)}
.ibtn:hover{border-color:var(--accent);color:var(--accent)}
.ibtn svg{width:16px;height:16px;stroke:currentColor}
.wdwarn{display:none;background:rgba(59,130,246,.10);border-bottom:1px solid rgba(59,130,246,.35);color:var(--accent2);padding:9px 26px;font-size:12.5px;line-height:1.6;text-align:center}
[data-theme="light"] .wdwarn{color:var(--accent);background:rgba(29,95,168,.06);border-bottom-color:rgba(29,95,168,.35)}
.content{padding:22px 26px 96px;max-width:1180px;width:100%;margin:0 auto}
@keyframes fade{from{opacity:0;transform:translateY(4px)}to{opacity:1;transform:none}}
.view-head{margin-bottom:16px}
.view-head h2{font-size:20px;font-weight:700}
.view-head p{color:var(--dim);font-size:13px;margin-top:4px}
.grid2{display:grid;grid-template-columns:repeat(auto-fit,minmax(330px,1fr));gap:16px}
.filter-region{display:flex;align-items:center;gap:14px;padding:2px 0 14px;border-bottom:1px solid var(--border);margin-bottom:14px;flex-wrap:wrap}
.filter-region-label{font-size:13px;font-weight:600;white-space:nowrap}
.filter-row{display:flex;flex-wrap:wrap;row-gap:16px}
.filter-group{flex:0 1 auto;min-width:180px;padding:0 14px;border-left:1px solid var(--border)}
.filter-group:first-child{border-left:none;padding-left:0}
.filter-group-title{font-size:12px;font-weight:600;color:var(--dim);margin-bottom:9px;letter-spacing:.3px}
.pills.nowrap{flex-wrap:nowrap;white-space:nowrap;overflow-x:auto;overflow-y:hidden;padding:6px 2px 8px;margin:-6px -2px -8px;-webkit-overflow-scrolling:touch;scrollbar-width:none}.pills.nowrap::-webkit-scrollbar{display:none;width:0;height:0}
.pills.nowrap .spill span{padding:5px 10px;font-size:12px}
.spill input{position:absolute;opacity:0;pointer-events:none}
.spill span{display:inline-block;padding:5px 14px;border:1px solid rgba(255,255,255,.13);border-radius:999px;font-size:12.5px;color:var(--dim);cursor:pointer;background:rgba(255,255,255,.05);-webkit-backdrop-filter:blur(12px);backdrop-filter:blur(12px);box-shadow:inset 0 1px 0 rgba(255,255,255,.14),0 2px 8px rgba(0,0,0,.20);transition:border-color .15s,color .15s,background .15s,box-shadow .15s;user-select:none;line-height:1.5}
.spill:hover span{border-color:var(--accent);color:var(--accent)}
.spill input:checked + span{background:var(--accent);border-color:var(--accent);color:#fff;font-weight:600;border-radius:999px}
.card h3 .tick{width:3px;height:14px;border-radius:2px;background:var(--accent)}
.checkline{display:flex;align-items:center;gap:20px;padding:5px 0;font-size:13px;cursor:pointer}
.checkline input{margin:0;flex:0 0 auto;vertical-align:middle}
.checkline span{line-height:1.5}
.proto-row{display:flex;align-items:center;gap:10px;padding:8px 0;border-bottom:1px dashed var(--border);font-size:13.5px}
.proto-row:last-child{border-bottom:none}
.switch{position:relative;display:inline-block;width:40px;height:22px;flex:0 0 40px}
.switch input{opacity:0;width:0;height:0}
.switch input:checked+.sl{background:var(--accent)}
.switch input:checked+.sl::before{transform:translateX(18px)}
.btn.primary{background:linear-gradient(135deg,var(--accent),var(--accent2));border-color:transparent;color:#201308;font-weight:600}
.btn.primary:hover{filter:brightness(1.06);color:#201308}
.btn.danger{background:var(--err-dim);border-color:transparent;color:var(--err)}
.btn.danger:hover{border-color:var(--err)}
.btn .dirty-dot{display:none;width:6px;height:6px;border-radius:50%;background:var(--warn)}
.btn.dirty .dirty-dot{display:inline-block}
.tbl-wrap{overflow-x:auto}
.badge{display:inline-block;padding:2px 8px;border-radius:10px;font-size:11.5px}
.badge.g{background:var(--ok-dim);color:var(--ok)}
.badge.r{background:var(--err-dim);color:var(--err)}
.msg.show{display:block}
.fbar{position:fixed;right:22px;bottom:22px;display:flex;gap:10px;z-index:60;align-items:center;max-width:calc(100vw - 24px);box-sizing:border-box}
.fbar .btn{box-shadow:var(--shadow)}
.saved-at{font-size:11.5px;color:var(--faint);background:var(--card);border:1px solid var(--border);border-radius:8px;padding:5px 10px;box-shadow:var(--shadow);white-space:nowrap}
.toast.show{opacity:1;transform:translateX(-50%) translateY(0)}
.sec-title{font-size:12px;color:var(--faint);letter-spacing:1px;margin:20px 0 10px;font-weight:600}
.danger-zone{border:1px solid var(--err);border-radius:12px;padding:16px;background:var(--err-dim)}
.qrbox{display:flex;justify-content:center;padding:12px 0 4px}
.qrbox img{width:168px;height:168px;image-rendering:pixelated;border-radius:8px}
.note-box{background:var(--card2);border:1px solid var(--border);border-left:3px solid var(--accent);border-radius:8px;padding:12px 14px;font-size:12.5px;color:var(--dim);line-height:1.7;margin-bottom:12px}
@media (min-width:1100px){
  /* 右侧避让右下角浮动保存栏（尚未保存/重置/保存全部），避免遮挡筛选勾选项 */
  .filter-grid{padding-right:200px}
}
.mmode{position:fixed;inset:0;z-index:120;display:none;align-items:center;justify-content:center;padding:18px;background:rgba(4,8,13,.74)}
.mmode.show{display:flex}
.mmodebox{width:100%;max-width:680px;max-height:88vh;overflow-y:auto;background:var(--card);border:1px solid var(--border);border-radius:14px;box-shadow:var(--shadow);padding:22px 22px 16px}
.mmodebox h3{margin:0 0 6px;font-size:17px}
.mmodebox .msub{color:var(--dim);font-size:12.5px;line-height:1.65;margin-bottom:16px}
.mmodegrid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px;justify-content:center}
.mmodecard{border:1px solid rgba(255,255,255,.14);border-radius:11px;background:rgba(255,255,255,.055);color:var(--text);padding:15px 14px;cursor:pointer;text-align:left;-webkit-backdrop-filter:blur(18px);backdrop-filter:blur(18px);box-shadow:inset 0 1px 0 rgba(255,255,255,.16),0 8px 22px rgba(0,0,0,.30);transition:border-color .15s,transform .15s,box-shadow .15s,background .15s}
.mmodecard:hover{border-color:var(--accent);transform:translateY(-2px)}
.mmodecard b{display:block;font-size:14.5px;margin-bottom:7px}
.mmodecard span{display:block;font-size:12.5px;color:var(--dim);line-height:1.6}
.mmodecard em{display:block;font-style:normal;font-size:11.5px;color:var(--faint);margin-top:9px}
.mmodefoot{margin-top:14px;text-align:right}
.mmodefoot a{color:var(--dim);font-size:12.5px;text-decoration:none}
.mmodefoot a:hover{color:var(--accent)}
@media (max-width:760px){
  .mmodegrid{grid-template-columns:1fr}
}
*{box-sizing:border-box;margin:0;padding:0}:root{--bg:#06080d;--bg2:#090d14;--card:#0c1119;--card2:#101724;--border:#1a2331;--text:#e9eef7;--dim:#93a3b8;--faint:#61718a;--line:#131a25;--accent:#7c6cff;--accent2:#22d3ee;--accent-dim:rgba(124,108,255,.14);--ok:#22c55e;--ok-dim:rgba(34,197,94,.13);--err:#f87171;--err-dim:rgba(248,113,113,.13);--warn:#fbbf24;--sb-bg:#080c12;--sb-text:#9fb0c5;--sb-dim:#5f7292;--sb-border:#161d28;--sb-active-bg:rgba(124,108,255,.14);--sb-active-text:#ab9dff;--sb-active-bar:#7c6cff;--glass:rgba(23,32,45,.54);--glass-2:rgba(19,27,39,.62);--glass-line:rgba(255,255,255,.10);--sb-glass:rgba(20,28,41,.50);--sb-rim:rgba(255,255,255,.46);--sb-vol-a:rgba(255,255,255,.11);--sb-vol-b:rgba(0,0,0,.20);--sb-glass-m:rgba(15,21,32,.88);--glass-rim:rgba(255,255,255,.30);--glass-hi:rgba(255,255,255,.12);--glass-field:rgba(255,255,255,.045);--glass-hover:rgba(255,255,255,.07);--glass-btn:rgba(255,255,255,.09);--glass-btn-hi:rgba(255,255,255,.17);--glass-rim-sm:rgba(255,255,255,.55);--glass-field-brd:rgba(255,255,255,.09);--glass-blur:22px;--glass-sh:0 20px 48px rgba(0,0,0,.42);--glass-shx:12px 0 36px rgba(0,0,0,.30);--blob-o:.44;--shadow:0 14px 40px rgba(0,0,0,.4);color-scheme:dark}[data-theme="light"]{--bg:#f4f6fb;--bg2:#eaeef6;--card:#fff;--card2:#f7f9fd;--border:#e1e7f0;--text:#16202e;--dim:#5a6a80;--faint:#93a1b4;--line:#eaeff6;--accent:#6355f5;--accent2:#0ea5b7;--accent-dim:rgba(99,85,245,.10);--ok:#17915a;--ok-dim:rgba(23,145,90,.11);--err:#dc4c4c;--err-dim:rgba(220,76,76,.10);--warn:#b7791f;--sb-bg:#ffffff;--sb-text:#5a6a80;--sb-dim:#9aa8bb;--sb-border:#e5eaf2;--sb-active-bg:rgba(99,85,245,.10);--sb-active-text:#5546e8;--sb-active-bar:#6355f5;--glass:rgba(255,255,255,.50);--glass-2:rgba(255,255,255,.60);--glass-line:rgba(20,40,70,.10);--sb-glass:rgba(255,255,255,.46);--sb-rim:rgba(255,255,255,1);--sb-vol-a:rgba(255,255,255,.68);--sb-vol-b:rgba(20,40,70,.075);--sb-glass-m:rgba(255,255,255,.90);--glass-rim:rgba(255,255,255,.95);--glass-hi:rgba(255,255,255,.70);--glass-field:rgba(255,255,255,.62);--glass-hover:rgba(20,40,70,.055);--glass-btn:rgba(255,255,255,.86);--glass-btn-hi:#ffffff;--glass-rim-sm:rgba(255,255,255,1);--glass-field-brd:rgba(20,40,70,.11);--glass-blur:22px;--glass-sh:0 18px 44px rgba(25,45,80,.13);--glass-shx:10px 0 30px rgba(25,45,80,.09);--blob-o:.42;--shadow:0 12px 34px rgba(25,40,70,.12);color-scheme:light}html,body{min-height:100%}body{background:var(--bg);color:var(--text);font-family:"PingFang SC","Microsoft YaHei","Segoe UI",system-ui,sans-serif;font-size:14px;line-height:1.6;-webkit-font-smoothing:antialiased}a{color:var(--accent);text-decoration:none}a:hover{text-decoration:underline}.app{display:flex;min-height:100vh;gap:12px;padding:12px}.sidebar{width:232px;flex:0 0 232px;background:var(--sb-bg);border-right:1px solid var(--sb-border);display:flex;flex-direction:column;position:sticky;top:12px;height:calc(100vh - 24px);z-index:50}.brand{display:flex;align-items:center;gap:11px;padding:18px 18px 14px}.brand .lg{width:34px;height:34px;flex:0 0 34px;border-radius:10px;background:linear-gradient(135deg,var(--accent),var(--accent2));display:flex;align-items:center;justify-content:center;box-shadow:0 4px 12px var(--accent-dim)}.brand .lg svg{width:18px;height:18px;stroke:#0b0e14;fill:none;stroke-width:2.2;stroke-linecap:round;stroke-linejoin:round}.brand .bt{display:flex;flex-direction:column;line-height:1.25;min-width:0}.brand .bt b{font-size:15px;font-weight:700;letter-spacing:.3px}.brand .bt span{font-size:11px;color:var(--sb-dim);white-space:nowrap;over${_d(Ds(0x2cc))}hidden;text-over${_d(Ds(0x2cc))}ellipsis}.nav{flex:1;padding:6px 10px 12px;overflow-y:auto}.nav-item{display:flex;align-items:center;gap:10px;width:100%;padding:9px 12px;margin:2px 0;border:none;background:transparent;color:var(--sb-text);font-size:13.5px;font-family:inherit;text-align:left;cursor:pointer;border-radius:8px;position:relative;transition:.15s}.nav-item svg{width:17px;height:17px;flex:0 0 17px;stroke:currentColor;fill:none;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round}.nav-item:hover{background:var(--sb-active-bg);color:var(--sb-active-text)}.nav-item.on{background:var(--sb-active-bg);color:var(--sb-active-text);font-weight:600}.nav-item.on::before{content:"";position:absolute;left:-10px;top:8px;bottom:8px;width:3px;border-radius:0 3px 3px 0;background:var(--sb-active-bar)}.side-foot{padding:12px 18px;border-top:1px solid var(--sb-border);display:flex;align-items:center;justify-content:space-between;font-size:11.5px;color:var(--sb-dim)}.ver-chip{font-family:ui-monospace,Consolas,monospace;background:var(--accent-dim);color:var(--sb-active-text);padding:2px 8px;border-radius:6px;font-size:11px;border:1px solid transparent}.main{flex:1;min-width:0;display:flex;flex-direction:column;gap:12px}.topbar{display:flex;align-items:center;gap:14px;padding:12px 20px;border:1px solid var(--border);border-radius:18px;background:var(--bg);position:sticky;top:12px;z-index:40}.topbar h1{font-size:17px;font-weight:600;flex:1;min-width:0}.ibtn.hamb{display:none}.pill{display:inline-flex;align-items:center;gap:6px;font-size:12px;padding:4px 11px;border-radius:20px;background:var(--ok-dim);color:var(--ok);white-space:nowrap}.pill.off{background:var(--err-dim);color:var(--err)}.pill i{width:6px;height:6px;border-radius:50%;background:currentColor;display:block}.ibtn{width:34px;height:34px;border-radius:9px;border:1px solid var(--border);background:var(--card2);color:var(--dim);cursor:pointer;display:flex;align-items:center;justify-content:center}.ibtn:hover{border-color:var(--accent);color:var(--accent)}.ibtn svg{width:16px;height:16px;stroke:currentColor;fill:none;stroke-width:1.9;stroke-linecap:round;stroke-linejoin:round}.wrap{width:100%;max-width:1180px;margin:0 auto;padding:0 4px 96px}.view{display:none}.view.on{display:block;animation:up .2s ease}@keyframes up{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:none}}.vh{margin-bottom:16px}.vh h2{font-size:20px;font-weight:700}.vh p{color:var(--dim);font-size:13px;margin-top:3px}.grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(330px,1fr));gap:16px}.grid3{display:grid;grid-template-columns:repeat(auto-fit,minmax(210px,1fr));gap:16px}.card{background:var(--card);border:1px solid var(--border);border-radius:14px;padding:18px;margin-bottom:16px}.card h3{font-size:14px;font-weight:650;margin-bottom:14px;display:flex;align-items:center;gap:9px}.card h3 .dot{width:4px;height:15px;border-radius:3px;background:linear-gradient(var(--accent),var(--accent2))}.card h3 .sub{font-size:12px;color:var(--dim);font-weight:400;margin-left:auto}.kv{display:flex;justify-content:space-between;gap:12px;padding:8px 0;border-bottom:1px dashed var(--line);font-size:13px}.kv:last-child{border-bottom:none}.kv .k{color:var(--dim);white-space:nowrap}.kv .v{text-align:right;word-break:break-all;font-family:ui-monospace,Consolas,monospace;font-size:12.5px}.kv .v.ok{color:var(--ok)}.kv .v.bad{color:var(--err)}.kv .v.warn{color:var(--warn)}.field{margin-bottom:13px}.field>label{display:block;font-size:12.5px;color:var(--dim);margin-bottom:6px;font-weight:500}input[type=text],input[type=password],input[type=number],select,textarea{width:100%;background:var(--card2);border:1px solid var(--border);color:var(--text);border-radius:9px;padding:9px 11px;font-size:13.5px;outline:none;font-family:inherit;transition:.15s}input:focus,select:focus,textarea:focus{border-color:var(--accent);box-shadow:0 0 0 3px var(--accent-dim)}textarea{resize:vertical;line-height:1.55;font-family:ui-monospace,Consolas,monospace;font-size:12.5px}select{cursor:pointer;appearance:none;-webkit-appearance:none;padding-right:30px;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6'%3E%3Cpath d='M1 1l4 4 4-4' stroke='%2393a3b8' stroke-width='1.6' fill='none' stroke-linecap='round'/%3E%3C/svg%3E");background-repeat:no-repeat;background-position:right 11px center}select option,select optgroup{background:var(--bg2);color:var(--text)}input,select,textarea{accent-color:var(--accent)}.hint{font-size:12px;color:var(--dim);margin-top:7px;line-height:1.7}
.hm-mask{position:fixed;inset:0;background:rgba(0,0,0,.5);display:none;align-items:center;justify-content:center;z-index:900;padding:16px}
.hm-mask.show{display:flex}
.hm-box{width:100%;max-width:460px;background:var(--card);border:1px solid var(--border);border-radius:16px;padding:18px;color:var(--text);box-shadow:0 20px 60px rgba(0,0,0,.35)}
.hm-box h4{margin:0 0 12px;font-size:15px}
.hm-box textarea{min-height:160px;resize:vertical;font-family:ui-monospace,Menlo,Consolas,monospace;line-height:1.7}
.hm-act{display:flex;gap:10px;margin-top:14px}
.hm-act .btn{flex:1;padding:11px 15px}.inrow{display:flex;flex-wrap:wrap;gap:8px;align-items:flex-start}.inrow>div{flex:1}.sw{position:relative;display:inline-block;width:40px;height:22px;flex:0 0 40px}.sw input{opacity:0;width:0;height:0}.sw .sl{position:absolute;inset:0;background:var(--border);border-radius:22px;cursor:pointer;transition:.18s}.sw .sl::before{content:"";position:absolute;width:16px;height:16px;left:3px;top:3px;background:#fff;border-radius:50%;transition:transform .18s}.sw input:checked+.sl{background:var(--accent)}.sw input:checked+.sl::before{transform:translateX(18px)}.prow{display:flex;align-items:center;gap:11px;padding:9px 0;border-bottom:1px dashed var(--line);font-size:13.5px}.prow:last-child{border-bottom:none}.btn{display:inline-flex;align-items:center;justify-content:center;gap:6px;border:1px solid var(--border);background:var(--card2);color:var(--text);border-radius:9px;padding:9px 15px;font-size:13px;cursor:pointer;font-family:inherit;white-space:nowrap;transition:.15s}.btn:hover{border-color:var(--accent);color:var(--accent)}.btn:active{transform:translateY(1px)}.btn:disabled{opacity:.5;cursor:not-allowed}.btn.pri{background:linear-gradient(135deg,var(--accent),var(--accent2));border-color:transparent;color:#0b0e14;font-weight:600}.btn.pri:hover{filter:brightness(1.07);color:#0b0e14}.btn.dgr{background:var(--err-dim);border-color:transparent;color:var(--err)}.btn.sm{padding:5px 11px;font-size:12px;border-radius:7px}.row{display:flex;align-items:center;gap:10px;flex-wrap:wrap}.row .grow{flex:1;min-width:150px}.pills{display:flex;flex-wrap:wrap;gap:8px}.sp{position:relative}.sp input{position:absolute;opacity:0;pointer-events:none}.sp span{display:inline-block;padding:5px 13px;border:1px solid var(--border);border-radius:999px;font-size:12.5px;color:var(--dim);cursor:pointer;background:var(--card2);transition:.15s;user-select:none}.sp:hover span{border-color:var(--accent);color:var(--accent)}.sp input:checked+span{background:var(--accent);border-color:var(--accent);color:#fff;font-weight:600}.blk{border-top:1px solid var(--line);margin-top:14px;padding-top:14px}.blk-t{font-size:12px;font-weight:600;color:var(--dim);margin-bottom:10px;letter-spacing:.4px}.tbl{overflow-x:auto}table{width:100%;border-collapse:collapse}th,td{text-align:left;padding:9px 10px;font-size:13px;border-bottom:1px solid var(--line);white-space:nowrap}th{color:var(--dim);font-weight:500;font-size:12px;background:var(--card2)}td.ip{font-family:ui-monospace,Consolas,monospace;font-size:12.5px}.bdg{display:inline-block;padding:2px 9px;border-radius:10px;font-size:11.5px}.bdg.g{background:var(--ok-dim);color:var(--ok)}.bdg.r{background:var(--err-dim);color:var(--err)}.mono{font-family:ui-monospace,Consolas,monospace;font-size:12.5px}.msg{display:none;margin-top:12px;padding:10px 13px;border-radius:9px;font-size:12.5px;line-height:1.65}.msg.on{display:block}.msg.ok{background:var(--ok-dim);color:var(--ok)}.msg.err{background:var(--err-dim);color:var(--err)}.msg.info{background:var(--accent-dim);color:var(--accent)}pre.code{background:var(--bg2);border:1px solid var(--border);border-radius:9px;padding:12px;font-size:11.5px;line-height:1.55;font-family:ui-monospace,Consolas,monospace;over${_d(Ds(0x2cc))}auto;max-height:280px;white-space:pre-wrap;word-break:break-all;color:var(--dim);margin-top:10px}.bar{position:fixed;right:20px;bottom:20px;display:flex;gap:10px;align-items:center;z-index:60}.bar .btn{box-shadow:var(--shadow)}.stat{font-size:11.5px;color:var(--faint);background:var(--card);border:1px solid var(--border);border-radius:9px;padding:6px 11px;box-shadow:var(--shadow);white-space:nowrap}.toast{position:fixed;left:50%;bottom:26px;transform:translateX(-50%) translateY(90px);background:var(--card);border:1px solid var(--border);padding:11px 20px;border-radius:11px;font-size:13px;opacity:0;transition:.25s;z-index:200;box-shadow:var(--shadow);pointer-events:none;max-width:86vw}.toast.on{opacity:1;transform:translateX(-50%) translateY(0)}.toast.ok{border-color:var(--ok);color:var(--ok)}.toast.err{border-color:var(--err);color:var(--err)}.toast.warn{border-color:var(--warn);color:var(--warn)}.note{background:var(--card2);border:1px solid var(--border);border-left:3px solid var(--accent);border-radius:9px;padding:12px 14px;font-size:12.5px;color:var(--dim);line-height:1.75}.steps{list-style:none;counter-reset:st}.steps li{counter-increment:st;position:relative;padding:0 0 15px 32px;font-size:13px;color:var(--dim)}.steps li::before{content:counter(st);position:absolute;left:0;top:1px;width:22px;height:22px;border-radius:50%;background:var(--accent-dim);color:var(--accent);display:flex;align-items:center;justify-content:center;font-size:11.5px;font-weight:700}.steps li b{color:var(--text)}.prog{height:9px;border-radius:7px;background:var(--card2);over${_d(Ds(0x2cc))}hidden;margin:10px 0}.prog>div{height:100%;width:0;border-radius:7px;background:linear-gradient(90deg,var(--ok),var(--accent));transition:width .5s}.qr{display:flex;justify-content:center;padding:12px 0 2px}.qr img{width:170px;height:170px;image-rendering:pixelated;border-radius:10px;background:#fff;padding:8px}.dz{border:1px solid var(--err);border-radius:14px;padding:16px;background:var(--err-dim);margin-bottom:16px}.dz h3{font-size:14px;color:var(--err);margin-bottom:8px}.fgrp{border:1px solid var(--border);border-radius:11px;padding:12px;margin-bottom:12px}.fgrp-t{font-size:12px;font-weight:600;color:var(--dim);margin-bottom:9px}.bgfx{position:fixed;inset:0;z-index:0;over${_d('Zmxvdzo=')}hidden;pointer-events:none}.bgfx i{position:absolute;display:block;border-radius:50%;filter:blur(74px);opacity:var(--blob-o);will-change:transform}.bgfx i:nth-child(1){width:46vw;height:46vw;left:-12vw;top:-16vh;background:var(--accent);animation:blob 24s ease-in-out infinite}.bgfx i:nth-child(2){width:38vw;height:38vw;right:-14vw;top:2vh;background:var(--accent2);opacity:calc(var(--blob-o) * .72);animation:blob 30s ease-in-out infinite -8s}.bgfx i:nth-child(3){width:34vw;height:34vw;left:20vw;bottom:-22vh;background:#f472b6;opacity:calc(var(--blob-o) * .55);animation:blob 27s ease-in-out infinite -14s}.bgfx i:nth-child(4){width:30vw;height:30vw;right:10vw;bottom:-16vh;background:#38bdf8;opacity:calc(var(--blob-o) * .5);animation:blob 33s ease-in-out infinite -20s}@keyframes blob{0%,100%{transform:translate3d(0,0,0) scale(1)}33%{transform:translate3d(4vw,4vh,0) scale(1.1)}66%{transform:translate3d(-3vw,2vh,0) scale(.94)}}.app{position:relative;z-index:1}.sidebar{background:var(--sb-glass);-webkit-backdrop-filter:blur(30px) saturate(190%);backdrop-filter:blur(30px) saturate(190%);border:1px solid var(--glass-line);border-radius:22px;corner-shape:squircle;isolation:isolate;box-shadow:var(--glass-sh),inset 0 1px 0 var(--glass-hi),0 0 0 1px rgba(255,255,255,.03)}.sidebar::before{content:"";position:absolute;inset:0;border-radius:inherit;pointer-events:none;z-index:0;background:radial-gradient(520px 400px at var(--mx,50%) var(--my,-16%),var(--glass-hi),transparent 62%),linear-gradient(180deg,var(--sb-vol-a) 0,rgba(0,0,0,0) 32%,rgba(0,0,0,0) 60%,var(--sb-vol-b) 100%)}.sidebar::after{content:"";position:absolute;inset:0;border-radius:inherit;padding:1px;pointer-events:none;z-index:1;background:linear-gradient(150deg,var(--sb-rim) 0,rgba(255,255,255,0) 34%,rgba(255,255,255,0) 66%,var(--sb-rim) 100%);-webkit-mask:linear-gradient(#000 0 0) content-box,linear-gradient(#000 0 0);-webkit-mask-composite:xor;mask:linear-gradient(#000 0 0) content-box,linear-gradient(#000 0 0);mask-composite:exclude}.sidebar>*{position:relative;z-index:2}.side-foot{border-top:1px solid var(--glass-line)}.nav::-webkit-scrollbar{width:8px}.nav::-webkit-scrollbar-thumb{background:var(--glass-field-brd);border-radius:8px}.nav-item{border-radius:12px}.nav-item:hover{background:var(--glass-hover)}.nav-item.on{background:var(--sb-active-bg);box-shadow:inset 0 1px 0 var(--glass-hi),0 6px 18px rgba(0,0,0,.16)}.topbar{background:var(--glass-2);-webkit-backdrop-filter:blur(20px) saturate(180%);backdrop-filter:blur(20px) saturate(180%);border:1px solid var(--glass-line);box-shadow:var(--glass-sh),inset 0 1px 0 var(--glass-hi)}.topbar::after{content:"";position:absolute;inset:0;border-radius:inherit;padding:1px;pointer-events:none;background:linear-gradient(150deg,var(--glass-rim) 0,rgba(255,255,255,0) 36%,rgba(255,255,255,0) 64%,var(--glass-rim) 100%);-webkit-mask:linear-gradient(#000 0 0) content-box,linear-gradient(#000 0 0);-webkit-mask-composite:xor;mask:linear-gradient(#000 0 0) content-box,linear-gradient(#000 0 0);mask-composite:exclude}.ibtn{position:relative;background:var(--glass-field);border:1px solid var(--glass-field-brd);border-radius:11px;box-shadow:inset 0 1px 0 var(--glass-hi);transition:.18s cubic-bezier(.34,1.4,.64,1)}.ibtn:hover{background:var(--glass);border-color:var(--glass-rim);color:var(--accent);transform:translateY(-1px)}.ibtn:active{transform:translateY(0) scale(.96)}.card{position:relative;background:var(--glass);-webkit-backdrop-filter:blur(var(--glass-blur)) saturate(170%);backdrop-filter:blur(var(--glass-blur)) saturate(170%);border:1px solid var(--glass-line);border-radius:20px;corner-shape:squircle;box-shadow:var(--glass-sh),inset 0 1px 0 var(--glass-hi)}.card>*{position:relative;z-index:1}.card::before{content:"";position:absolute;inset:0;border-radius:inherit;pointer-events:none;z-index:0;background:radial-gradient(440px 260px at var(--mx,50%) var(--my,-12%),var(--glass-hi),transparent 68%)}.card::after{content:"";position:absolute;inset:0;border-radius:inherit;padding:1px;pointer-events:none;z-index:0;background:linear-gradient(150deg,var(--glass-rim) 0,rgba(255,255,255,0) 32%,rgba(255,255,255,0) 64%,var(--glass-rim) 100%);-webkit-mask:linear-gradient(#000 0 0) content-box,linear-gradient(#000 0 0);-webkit-mask-composite:xor;mask:linear-gradient(#000 0 0) content-box,linear-gradient(#000 0 0);mask-composite:exclude}.fgrp{background:var(--glass-field);border:1px solid var(--glass-field-brd);border-radius:14px;corner-shape:squircle}.note{background:var(--glass-field);border:1px solid var(--glass-field-brd);border-left:3px solid var(--accent);border-radius:14px}pre.code{background:var(--glass-field);border:1px solid var(--glass-field-brd);border-radius:14px}.msg{border-radius:13px}input[type=text],input[type=password],input[type=number],select,textarea{background:var(--glass-field);border:1px solid var(--glass-field-brd);border-radius:12px;box-shadow:inset 0 1px 0 var(--glass-hi)}.sp span{background:var(--glass-field);border:1px solid var(--glass-field-brd)}th{background:var(--glass-field)}.btn{background:var(--glass-field);border:1px solid var(--glass-field-brd);border-radius:13px;position:relative;box-shadow:inset 0 1px 0 var(--glass-hi),0 4px 14px rgba(0,0,0,.16);transition:.18s cubic-bezier(.34,1.4,.64,1)}.btn:hover{background:var(--glass);border-color:var(--glass-rim);color:var(--text);transform:translateY(-1px)}.btn:active{transform:translateY(0) scale(.985)}.btn.sm{border-radius:10px}.btn.pri{background:linear-gradient(135deg,var(--accent),var(--accent2));border-color:transparent;color:#0b0e14;box-shadow:0 8px 24px var(--accent-dim),inset 0 1px 0 rgba(255,255,255,.45);over${_d(Ds(0x2cc))}hidden}.btn.pri:hover{color:#0b0e14;filter:brightness(1.06)}.btn.pri::after{content:"";position:absolute;top:-60%;left:-40%;width:36%;height:220%;pointer-events:none;transform:rotate(16deg);background:linear-gradient(90deg,rgba(255,255,255,0),rgba(255,255,255,.6),rgba(255,255,255,0));opacity:0;transition:opacity .2s}.btn.pri:hover::after{opacity:1;animation:sheen .85s cubic-bezier(.4,0,.2,1)}@keyframes sheen{from{left:-40%}to{left:130%}}.bar .stat{background:var(--glass);-webkit-backdrop-filter:blur(18px) saturate(180%);backdrop-filter:blur(18px) saturate(180%);border:1px solid var(--glass-line);border-radius:14px;box-shadow:var(--glass-sh)}.toast{background:var(--glass);-webkit-backdrop-filter:blur(24px) saturate(180%);backdrop-filter:blur(24px) saturate(180%);border:1px solid var(--glass-line);border-radius:16px;box-shadow:var(--glass-sh)}.pill{box-shadow:inset 0 1px 0 rgba(255,255,255,.18)}.btn::before,.ibtn::before,.sp span::before,.pill::before,.nav-item.on::after{content:"";position:absolute;inset:0;border-radius:inherit;padding:1px;pointer-events:none;background:linear-gradient(160deg,var(--glass-rim-sm) 0,rgba(255,255,255,0) 42%,rgba(255,255,255,0) 58%,var(--glass-rim-sm) 100%);-webkit-mask:linear-gradient(#000 0 0) content-box,linear-gradient(#000 0 0);-webkit-mask-composite:xor;mask:linear-gradient(#000 0 0) content-box,linear-gradient(#000 0 0);mask-composite:exclude}.btn{background:var(--glass-btn);border-radius:13px;box-shadow:inset 0 1px 0 var(--glass-hi),0 6px 18px rgba(0,0,0,.20),0 1px 2px rgba(0,0,0,.18)}.btn:hover{background:var(--glass-btn-hi);border-color:var(--glass-rim-sm);color:var(--text);transform:translateY(-1px);box-shadow:inset 0 1px 0 var(--glass-hi),0 10px 26px rgba(0,0,0,.26)}.bar .btn{box-shadow:inset 0 1px 0 var(--glass-hi),var(--glass-sh)}.ibtn{background:var(--glass-btn);box-shadow:inset 0 1px 0 var(--glass-hi),0 4px 12px rgba(0,0,0,.16)}.ibtn:hover{background:var(--glass-btn-hi)}.sp span{position:relative;background:var(--glass-btn);box-shadow:inset 0 1px 0 var(--glass-hi)}.sp input:checked+span{box-shadow:inset 0 1px 0 rgba(255,255,255,.35),0 4px 14px var(--accent-dim)}.pill{position:relative;box-shadow:inset 0 1px 0 rgba(255,255,255,.22)}.ver-chip{position:relative;box-shadow:inset 0 1px 0 rgba(255,255,255,.20)}.nav-item{border-radius:12px}.nav-item.on{background:linear-gradient(180deg,rgba(255,255,255,.10),rgba(255,255,255,0)),var(--sb-active-bg);box-shadow:inset 0 1px 0 var(--glass-hi),0 8px 20px rgba(0,0,0,.18)}.sw .sl{background:var(--glass-field);border:1px solid var(--glass-field-brd);box-shadow:inset 0 1px 2px rgba(0,0,0,.16)}.sw input:checked+.sl{background:linear-gradient(135deg,var(--accent),var(--accent2));border-color:transparent;box-shadow:inset 0 1px 0 rgba(255,255,255,.40),0 2px 10px var(--accent-dim)}.sw .sl::before{box-shadow:0 1px 4px rgba(0,0,0,.40)}.bdg{box-shadow:inset 0 1px 0 rgba(255,255,255,.20)}.fgrp,.note,pre.code{box-shadow:inset 0 1px 0 var(--glass-hi)}.msg{box-shadow:inset 0 1px 0 rgba(255,255,255,.14)}.prog{background:var(--glass-field);border:1px solid var(--glass-field-brd);box-shadow:inset 0 1px 2px rgba(0,0,0,.14)}.steps li::before{background:var(--accent-dim);box-shadow:inset 0 1px 0 rgba(255,255,255,.22)}.dz{background:var(--err-dim);border:1px solid rgba(248,113,113,.30);border-radius:18px;-webkit-backdrop-filter:blur(14px);backdrop-filter:blur(14px);box-shadow:var(--glass-sh)}@supports not ((backdrop-filter:blur(1px)) or (-webkit-backdrop-filter:blur(1px))){.sidebar,.topbar{background:var(--card2)}.card{background:var(--card)}.btn,.ibtn,.sp span{background:var(--card2)}.bar .stat,.toast{background:var(--card)}}@media(prefers-reduced-motion:reduce){.bgfx i{animation:none}.btn.pri:hover::after{animation:none;opacity:0}.ibtn:hover,.btn:hover{transform:none}.view.on{animation:none}}@media(max-width:640px){:root{--glass-blur:14px}.sidebar{-webkit-backdrop-filter:blur(18px) saturate(180%);backdrop-filter:blur(18px) saturate(180%)}.bgfx i:nth-child(3),.bgfx i:nth-child(4){display:none}}@media(max-width:960px){.sidebar{position:fixed;left:12px;top:12px;height:calc(100vh - 24px);background:var(--sb-glass-m);transform:translateX(calc(-100% - 28px));transition:transform .22s ease;z-index:70;box-shadow:var(--glass-sh),inset 0 1px 0 var(--glass-hi)}.sidebar.open{transform:translateX(0)}.ibtn.hamb{display:flex}.app{padding:10px;gap:10px}.wrap{padding:0 2px 92px}.topbar{padding:10px 14px;top:10px}}@media(max-width:560px){.topbar .pill{display:none}}[data-style="material"]{--bg:var(--m-surface);--bg2:var(--m-surface-container);--card:var(--m-surface-container-low);--card2:var(--m-surface-container);--border:var(--m-outline-variant);--line:var(--m-outline-variant);--text:var(--m-on-surface);--dim:var(--m-on-surface-variant);--faint:var(--m-outline);--accent:var(--m-primary);--accent2:var(--m-tertiary);--accent-dim:var(--m-primary-container);--ok:var(--m-primary);--ok-dim:var(--m-primary-container);--err:var(--m-error);--err-dim:var(--m-error-container);--warn:var(--m-tertiary);--glass-rim:transparent;--glass-rim-sm:transparent;--glass-hi:transparent;--sb-rim:transparent;--sb-vol-a:transparent;--sb-vol-b:transparent;--m-e1:0 1px 2px rgba(0,0,0,.42),0 1px 3px 1px rgba(0,0,0,.24);--m-e2:0 1px 2px rgba(0,0,0,.42),0 2px 6px 2px rgba(0,0,0,.24);--m-e3:0 1px 3px rgba(0,0,0,.42),0 4px 8px 3px rgba(0,0,0,.24);--shadow:var(--m-e2);font-family:Roboto,"Roboto Flex","Noto Sans SC","PingFang SC","Microsoft YaHei",system-ui,sans-serif}[data-theme="light"][data-style="material"]{--m-e1:0 1px 2px rgba(0,0,0,.16),0 1px 3px 1px rgba(0,0,0,.09);--m-e2:0 1px 2px rgba(0,0,0,.16),0 2px 6px 2px rgba(0,0,0,.09);--m-e3:0 1px 3px rgba(0,0,0,.16),0 4px 8px 3px rgba(0,0,0,.09)}[data-style="material"] .bgfx{display:none}[data-style="material"] .card::before,[data-style="material"] .card::after,[data-style="material"] .sidebar::before,[data-style="material"] .sidebar::after,[data-style="material"] .topbar::after{display:none}[data-style="material"] .sidebar{background:var(--m-surface-container-low);-webkit-backdrop-filter:none;backdrop-filter:none;border:none;border-radius:16px;box-shadow:var(--m-e1)}[data-style="material"] .brand .lg{border-radius:12px;box-shadow:none}[data-style="material"] .brand .bt b{font-weight:500}[data-style="material"] .nav-item{border-radius:28px;padding:10px 16px;font-size:14px}[data-style="material"] .nav-item.on::before{display:none}[data-style="material"] .nav-item.on{background:var(--m-secondary-container);color:var(--m-on-secondary-container);font-weight:500;box-shadow:none}[data-style="material"] .nav-item:hover{background:transparent;color:var(--text)}[data-style="material"] .side-foot{border-top:1px solid var(--m-outline-variant)}[data-style="material"] .ver-chip{background:var(--m-secondary-container);color:var(--m-on-secondary-container);border-radius:8px;box-shadow:none}[data-style="material"] .topbar{background:var(--m-surface);-webkit-backdrop-filter:none;backdrop-filter:none;border:none;border-radius:16px;box-shadow:none}[data-style="material"] .topbar h1{font-weight:400;font-size:20px}[data-style="material"] .ibtn{background:transparent;border:none;border-radius:50%;color:var(--m-on-surface-variant);box-shadow:none;over${_d(Ds(0x2cc))}hidden}[data-style="material"] .ibtn:hover{background:transparent;color:var(--m-on-surface)}[data-style="material"] .ibtn:active{transform:none}[data-style="material"] .pill{background:var(--m-secondary-container);color:var(--m-on-secondary-container);border-radius:8px;box-shadow:none;padding:5px 12px;font-weight:500}[data-style="material"] .card{background:var(--m-surface-container-low);border:none;border-radius:16px;box-shadow:var(--m-e1);-webkit-backdrop-filter:none;backdrop-filter:none}[data-style="material"] .card h3{font-weight:500}[data-style="material"] .card h3 .dot{background:var(--m-primary)}[data-style="material"] .fgrp,[data-style="material"] .note,[data-style="material"] pre.code{background:var(--m-surface-container);border:1px solid var(--m-outline-variant);border-radius:12px;box-shadow:none}[data-style="material"] .note{border-left:1px solid var(--m-outline-variant)}[data-style="material"] .msg{border-radius:12px;box-shadow:none}[data-style="material"] input[type=text],[data-style="material"] input[type=password],[data-style="material"] input[type=number],[data-style="material"] select,[data-style="material"] textarea{background:transparent;border:1px solid var(--m-outline);border-radius:8px;box-shadow:none}[data-style="material"] input:focus,[data-style="material"] select:focus,[data-style="material"] textarea:focus{border-color:var(--m-primary);box-shadow:inset 0 0 0 1px var(--m-primary)}[data-style="material"] th{background:var(--m-surface-container);font-weight:500}[data-style="material"] .bdg{box-shadow:none;background:var(--m-secondary-container);color:var(--m-on-secondary-container)}[data-style="material"] .box{background:var(--m-surface-container-high);border:none;border-radius:28px;-webkit-backdrop-filter:none;backdrop-filter:none;box-shadow:var(--m-e3);corner-shape:round}[data-style="material"] .box::after{display:none}[data-style="material"] .logo{background:var(--m-primary-container);border-radius:16px;box-shadow:none}[data-style="material"] .logo svg{stroke:var(--m-on-primary-container)}[data-style="material"] .box p{color:var(--m-on-surface-variant)}[data-style="material"] .btn{background:var(--m-secondary-container);color:var(--m-on-secondary-container);border:none;border-radius:20px;box-shadow:none;font-weight:500;-webkit-mask:none;over${_d(Ds(0x2cc))}hidden}[data-style="material"] .btn:hover{background:var(--m-secondary-container);color:var(--m-on-secondary-container);transform:none;box-shadow:var(--m-e1)}[data-style="material"] .btn:active{transform:none}[data-style="material"] .btn.pri{background:var(--m-primary);color:var(--m-on-primary);box-shadow:none;border-radius:20px}[data-style="material"] .btn.pri:hover{background:var(--m-primary);color:var(--m-on-primary);box-shadow:var(--m-e1);filter:none}[data-style="material"] .btn.pri::after{display:none}[data-style="material"] .btn.sm{border-radius:18px}[data-style="material"] .btn.dgr{background:var(--m-error);color:var(--m-on-error)}[data-style="material"] .sp span{background:transparent;border:1px solid var(--m-outline);color:var(--m-on-surface-variant);border-radius:20px;box-shadow:none}[data-style="material"] .sp input:checked+span{background:var(--m-secondary-container);color:var(--m-on-secondary-container);border-color:transparent;box-shadow:none}[data-style="material"] .btn::before,[data-style="material"] .ibtn::before,[data-style="material"] .sp span::before,[data-style="material"] .nav-item::before{content:"";position:absolute;inset:0;border-radius:inherit;background:currentColor;opacity:0;-webkit-mask:none;mask:none;pointer-events:none;transition:opacity .12s}[data-style="material"] .btn:hover::before,[data-style="material"] .ibtn:hover::before,[data-style="material"] .sp span:hover::before,[data-style="material"] .nav-item:hover::before{opacity:.08}[data-style="material"] .btn:active::before,[data-style="material"] .ibtn:active::before,[data-style="material"] .sp span:active::before{opacity:.12}[data-style="material"] .card,.md-rip-host{position:relative}[data-style="material"] .nav-item,[data-style="material"] .sp span,[data-style="material"] .pill,[data-style="material"] .fgrp{position:relative;over${_d('Zmxvdzo=')}hidden}.md-rip{position:absolute;border-radius:50%;pointer-events:none;background:currentColor;opacity:0;transform:scale(0);animation:mdRip .62s cubic-bezier(.2,0,0,1) forwards}@keyframes mdRip{0%{opacity:.20;transform:scale(.25)}55%{opacity:.14}100%{opacity:0;transform:scale(1)}}@media(prefers-reduced-motion:reduce){.md-rip{display:none}}[data-style="material"] .sw .sl{background:var(--m-surface-container-highest);border:1px solid var(--m-outline);box-shadow:none}[data-style="material"] .sw input:checked+.sl{background:var(--m-primary);border-color:var(--m-primary);box-shadow:none}[data-style="material"] .sw .sl::before{box-shadow:0 1px 3px rgba(0,0,0,.30)}[data-style="material"] .prog{background:var(--m-surface-container-highest);border:none;border-radius:4px;box-shadow:none;height:8px}[data-style="material"] .prog>div{border-radius:4px;background:var(--m-primary)}[data-style="material"] .steps li::before{background:var(--m-primary-container);color:var(--m-on-primary-container);box-shadow:none}[data-style="material"] .dz{background:var(--m-error-container);border:none;border-radius:16px;-webkit-backdrop-filter:none;backdrop-filter:none;box-shadow:none}[data-style="material"] .dz h3{color:var(--m-on-error-container)}[data-style="material"] .dz p{color:var(--m-on-error-container)}[data-style="material"] .bar .stat,[data-style="material"] .toast{background:var(--m-surface-container-high);-webkit-backdrop-filter:none;backdrop-filter:none;border:none;border-radius:12px;box-shadow:var(--m-e3);color:var(--text)}[data-style="material"] .bar .btn{box-shadow:var(--m-e2)}[data-style="material"] .qr img{border-radius:12px}.seg{display:flex;gap:8px;flex-wrap:wrap}.seg button{flex:1;min-width:120px;justify-content:center}.seg button.on{background:var(--accent);color:#fff;border-color:transparent}[data-style="material"] .seg button.on{background:var(--m-primary);color:var(--m-on-primary)}.md-sw{display:flex;gap:8px;flex-wrap:wrap;margin-top:10px}.md-sw i{width:30px;height:30px;border-radius:50%;cursor:pointer;display:block;box-shadow:0 0 0 1px var(--border);transition:transform .15s}.md-sw i:hover{transform:scale(1.1)}.md-sw i.on{box-shadow:0 0 0 2px var(--accent),0 0 0 4px var(--bg2)}.md-pal{margin-top:14px;border:1px solid var(--border);border-radius:12px;over${_d(Ds(0x2cc))}hidden}.md-pal .r{display:flex;align-items:center;gap:2px;padding:3px 6px}.md-pal .r b{width:66px;flex:0 0 66px;font-size:10.5px;font-weight:500;color:var(--dim);font-family:ui-monospace,Consolas,monospace}.md-pal .r i{flex:1;height:20px;border-radius:4px;display:block;cursor:pointer;position:relative;z-index:0;transition:transform .12s ease,box-shadow .12s ease}.md-pal .r:hover b{color:var(--text)}.md-pal .r i:hover{transform:scale(1.16);z-index:3;box-shadow:0 0 0 1.5px var(--text),0 4px 10px rgba(0,0,0,.45)}.md-pal .r i.on{z-index:2;box-shadow:inset 0 0 0 2px rgba(255,255,255,.94),inset 0 0 0 4px rgba(0,0,0,.56)}.md-pal .r:first-child i{border-radius:6px 6px 4px 4px}.md-pal .r:last-child i{border-radius:4px 4px 6px 6px}.md-out{display:flex;align-items:center;gap:9px;margin-top:10px;flex-wrap:wrap;font-size:12px}.md-out .chip{width:20px;height:20px;border-radius:6px;flex:0 0 20px;display:block;box-shadow:0 0 0 1px var(--border)}.md-out .hx{font-family:ui-monospace,Consolas,monospace;color:var(--text);cursor:pointer;letter-spacing:.4px;padding:3px 7px;border-radius:7px;background:var(--bg2);box-shadow:0 0 0 1px var(--border)}.md-out .hx:hover{background:var(--card2)}.md-out .tag{color:var(--faint)}.md-seed{display:flex;gap:8px;flex-wrap:wrap;margin-top:10px}.md-seed i{width:34px;height:34px;border-radius:9px;cursor:pointer;display:block;box-shadow:0 0 0 1px var(--border);transition:transform .15s}.md-seed i:hover{transform:scale(1.08)}.md-seed i.on{box-shadow:0 0 0 2px var(--accent),0 0 0 4px var(--bg2)}

/* ===== ${_d(Ds(0x374))} 自有组件层：对齐参考面板视觉 ===== */
.view-head{margin-bottom:16px}
.view-head h2{font-size:20px;font-weight:700}
.view-head p{color:var(--dim);font-size:13px;margin-top:4px}
.mark{width:34px;height:34px;flex:0 0 34px;border-radius:10px;background:linear-gradient(135deg,var(--accent),var(--accent2));display:flex;align-items:center;justify-content:center;box-shadow:0 4px 12px var(--accent-dim)}
.mark svg{width:19px;height:19px}
.mark path{stroke:#fff}
.fold{display:none}
.fold.open{display:block}
.foldbtn{margin-left:auto;flex:0 0 26px;width:26px;height:26px;padding:0;border:1px solid var(--border);border-radius:8px;background:var(--card2);color:var(--dim);display:flex;align-items:center;justify-content:center;cursor:pointer;transition:color .18s,border-color .18s,background .18s}
.foldbtn:hover{color:var(--text);border-color:var(--accent);background:var(--accent-dim)}
.foldbtn svg{width:14px;height:14px;transition:transform .2s ease}
.foldbtn[data-open="1"] svg{transform:rotate(180deg)}
.foldbtn path{fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}
.card h3 .tick{width:4px;height:15px;border-radius:3px;background:linear-gradient(var(--accent),var(--accent2))}
.btn.primary{background:linear-gradient(135deg,var(--accent),var(--accent2));border-color:transparent;color:#fff;font-weight:600}
.btn.primary:hover{filter:brightness(1.06);color:#fff}
.spill input:checked + span{background:var(--accent);border-color:var(--accent);color:#fff;font-weight:600}
.note-box{background:var(--card2);border:1px solid var(--border);border-left:3px solid var(--accent);border-radius:10px;padding:12px 14px;font-size:12.5px;color:var(--dim);line-height:1.7;margin-bottom:12px}
.danger-zone{border:1px solid var(--err);border-radius:14px;padding:16px;background:var(--err-dim)}
.steps li::before{background:var(--accent-dim);color:var(--accent)}
[data-theme="light"] .steps li::before{color:var(--accent)}
.msg.info{background:var(--accent-dim);color:var(--accent)}
[data-theme="light"] .msg.info{color:var(--accent)}
.qrbox img{border-radius:12px}
.mmodebox{border-radius:16px}
.mmodecard{border-radius:14px}
/* 开关滑块本体：${_d(Ds(0x374))} 的 DOM 是 label.switch>span.sl（无 .sw 祖先），nimbus 的 .sw .sl 不匹配，须单独补回 */
.switch .sl{position:absolute;inset:0;background:var(--glass-field);border:1px solid var(--glass-field-brd);border-radius:22px;cursor:pointer;transition:.18s;box-shadow:inset 0 1px 2px rgba(0,0,0,.16)}
.switch .sl::before{content:"";position:absolute;width:16px;height:16px;left:3px;top:3px;background:#fff;border-radius:50%;transition:transform .18s;box-shadow:0 1px 4px rgba(0,0,0,.40)}
.switch input:checked+.sl{background:linear-gradient(135deg,var(--accent),var(--accent2));border-color:transparent;box-shadow:inset 0 1px 0 rgba(255,255,255,.40),0 2px 10px var(--accent-dim)}
.switch input:checked+.sl::before{transform:translateX(18px)}
[data-style="material"] .switch .sl{background:var(--m-surface-container-highest);border:1px solid var(--m-outline);box-shadow:none}
[data-style="material"] .switch input:checked+.sl{background:var(--m-primary);border-color:var(--m-primary);box-shadow:none}
[data-style="material"] .switch .sl::before{box-shadow:0 1px 3px rgba(0,0,0,.30)}
/* 按钮统一液态玻璃：半透明 + 模糊 + 内高光，与卡片/输入框同一材质 */
.btn{background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.12);color:var(--text);-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);box-shadow:inset 0 1px 0 rgba(255,255,255,.14),0 2px 8px rgba(0,0,0,.18);transition:border-color .15s,color .15s,box-shadow .15s,transform .15s}
[data-theme="light"] .btn{background:rgba(255,255,255,.55);border:1px solid rgba(30,45,70,.10);box-shadow:inset 0 1px 0 rgba(255,255,255,.90),0 2px 8px rgba(30,45,70,.06)}
.btn:hover{border-color:var(--accent);color:var(--accent);box-shadow:inset 0 1px 0 rgba(255,255,255,.18),0 4px 14px var(--accent-dim)}
.btn.pri,.btn.primary{background:linear-gradient(135deg,var(--accent),var(--accent2));border-color:rgba(255,255,255,.18);color:#fff;box-shadow:inset 0 1px 0 rgba(255,255,255,.35),0 6px 18px var(--accent-dim)}
.btn.pri:hover,.btn.primary:hover{filter:brightness(1.08);color:#fff;box-shadow:inset 0 1px 0 rgba(255,255,255,.45),0 8px 22px var(--accent-dim)}
.btn.dgr,.btn.danger{background:var(--err-dim);border-color:rgba(248,113,113,.28);color:var(--err);box-shadow:inset 0 1px 0 rgba(255,255,255,.10)}
.ibtn{background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.12);-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);box-shadow:inset 0 1px 0 rgba(255,255,255,.14)}
[data-theme="light"] .ibtn{background:rgba(255,255,255,.55);border-color:rgba(30,45,70,.10);box-shadow:inset 0 1px 0 rgba(255,255,255,.90)}
.nav-item{background:transparent;border-color:transparent}
.nav-item.on,.nav-item:hover{background:rgba(255,255,255,.07);border-color:rgba(255,255,255,.12);box-shadow:inset 0 1px 0 rgba(255,255,255,.12)}
[data-theme="light"] .nav-item.on,[data-theme="light"] .nav-item:hover{background:rgba(255,255,255,.55);border-color:rgba(30,45,70,.08);box-shadow:inset 0 1px 0 rgba(255,255,255,.90)}
@media (max-width:960px){.grid2,.grid3{grid-template-columns:1fr}}#f-preferred{min-height:230px}
@media (max-width:640px){#f-preferred{min-height:160px}.hwdesk{display:none}}
@media (max-width:640px){
  .pills.nowrap{gap:9px;padding:8px 10px 12px;margin:0 -2px;overflow-x:auto;overflow-y:hidden;scroll-padding-inline:10px;overscroll-behavior-inline:contain}
  .pills.nowrap .spill{flex:0 0 auto}
  #cardFilter .pills .spill span{padding:7px 13px;font-size:12.5px;line-height:1.45;box-shadow:inset 0 1px 0 rgba(255,255,255,.14),0 3px 10px rgba(0,0,0,.16)}
  #cardFilter .pills:not(.nowrap){gap:9px}
  .filter-group{min-width:100%;border-left:none;padding-left:0;padding-right:0;padding-top:14px}
  .filter-group:first-child{padding-top:0}
  .filter-row{row-gap:8px}
  html,body{width:100%;max-width:100%;overflow-x:hidden}
  .app,.main,.wrap,#cardFilter,.filter-row,.filter-region,.filter-group{min-width:0;max-width:100%;box-sizing:border-box}
  #cardFilter .filter-region{display:grid;grid-template-columns:minmax(0,1fr);gap:12px;align-items:center}
  #cardFilter .filter-group{width:100%;flex:1 1 100%}
  #cardFilter .filter-inline{display:grid;grid-template-columns:68px minmax(0,1fr);gap:10px;align-items:center}
  #cardFilter .filter-region-label,#cardFilter .filter-group-title{margin:0;font-size:13px;font-weight:600;line-height:1.35;letter-spacing:0;color:var(--text);white-space:nowrap}
  #cardFilter .pills,#cardFilter .pills.nowrap{display:grid;flex-wrap:initial;white-space:normal;overflow:visible;gap:9px;padding:0;margin:0}
  #cardFilter .pills .spill,#cardFilter .pills.nowrap .spill{display:block;min-width:0;width:100%}
  #cardFilter .pills .spill span{display:flex;align-items:center;justify-content:center;width:100%;min-width:0;min-height:36px;box-sizing:border-box;padding:7px 4px;font-size:12px;text-align:center;white-space:nowrap}
  #cardFilter .filter-regions,#cardFilter .filter-sources{grid-template-columns:repeat(4,minmax(0,1fr))}
  #cardFilter .filter-order,#cardFilter .filter-family,#cardFilter .filter-v6,#cardFilter .filter-isp{grid-template-columns:repeat(3,minmax(0,1fr))}
  #cardFilter .filter-group:last-child{display:grid;grid-template-columns:minmax(0,1fr);gap:12px;border-top:1px solid var(--border);padding-top:14px}
  #cardFilter .filter-sources .spill:nth-child(5),#cardFilter .filter-sources .spill:nth-child(6){grid-column:span 2}
  #cardFilter .filter-sources .spill:nth-child(5) span,#cardFilter .filter-sources .spill:nth-child(6) span{font-size:12.5px;font-weight:600;letter-spacing:0;border-color:transparent}
  #cardFilter .filter-sources .spill:nth-child(5) input:checked+span,#cardFilter .filter-sources .spill:nth-child(6) input:checked+span{border-color:var(--accent)}
  .topbar{transition:transform .22s ease,opacity .18s ease;will-change:transform}
  .topbar.nav-hidden{transform:translateY(calc(-100% - 14px));opacity:0;pointer-events:none}
  .fbar{left:auto;right:12px;bottom:calc(12px + env(safe-area-inset-bottom));gap:8px}
  .fbar .btn{flex:0 0 auto;white-space:nowrap}
  .fbar .saved-at{display:none}
  .wrap{padding-bottom:112px}
}
@media (max-width:350px){
  #cardFilter .filter-inline{grid-template-columns:minmax(0,1fr);gap:8px}
}

</style>
</head>
<body><div class="bgfx" aria-hidden="true"><i></i><i></i><i></i><i></i></div>
<div class="app">

<!-- ===== 侧边栏 ===== -->
<aside class="sidebar" id="sidebar">
  <div class="brand">
    <div class="mark"><svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12h4l3-7 4 14 3-7h2"/></svg></div>
    <div class="bt"><b>${__B}</b><span>Cloudflare 隧道面板</span></div>
  </div>
  <nav class="nav" id="nav"></nav>
  <div class="side-foot">
    <span>部署版本</span>
    <span class="ver-chip" id="sideVer" title="点击检测更新" onclick="checkUpdate()">v—</span>
  </div>
</aside>

<!-- ===== 主区 ===== -->
<div class="main">
  <div class="topbar" id="topbar">
    <button class="ibtn hamb" id="hamb" title="菜单"><svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg></button>
    <h1 id="pageTitle">仪表盘</h1>
    <span class="pill" id="connPill"><span class="dot"></span><span id="connText">连接中</span></span>
    <button class="ibtn" id="themeBtn" title="切换日间 / 夜间"><svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path id="themeIcon" d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg></button><button class="ibtn" id="exitBtn" title="退出当前模式，回到模式选择" onclick="exitMode()"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg></button>
  </div>
  <div class="wdwarn" id="wdwarn">当前运行在 *.workers.dev 域名上：订阅与节点下发功能正常；若遇连接不稳或访问受限，建议在 Cloudflare 面板绑定自定义域名后使用。</div>

  <div class="wrap" id="content">
    <!-- ===== 视图：仪表盘 ===== -->
    <section class="view" data-view="dashboard">
      <div class="view-head"><h2>仪表盘</h2><p>快速开始、订阅管理、配额速览与运行状态</p></div>
      <div class="card">
        <h3><span class="tick"></span>快速开始</h3>
        <ol class="steps">
          <li><b>部署即用</b>：绑定域名后客户端订阅即可获得海量节点（内置 300 条优选 IP 与地区域名源），默认已配好大陆直连分流（大陆应用、微软、苹果直连，国外服务走出口）。</li>
          <li><b>调优节点</b>：在「优选配置」在线测速，把最优 IP 加入优选列表（自定义订阅模式内置常用订阅源，可自行增删，可追加内置优选池与默认节点）。</li>
          <li><b>保障额度</b>：在「配额安全」开启用量监控与自动调节，防止免费额度超支（需在面板设置中配置 Cloudflare 账户 ID 与 API 令牌）。</li>
        </ol>
      </div>
      <div class="card">
        <h3><span class="tick"></span>订阅地址</h3>
        <div class="row" style="margin-bottom:12px">
          <div class="field grow" style="margin:0"><label>订阅格式</label>
            <select id="subFmt">
              <option value="auto">自动识别</option>
              <option value="${_d(Ds(0x3a2))}">${_d('Q2xhc2g=')} / ${_d(Ds(0x48b))}</option>
              <option value="${_d(Ds(0x2c0))}">${_d(Ds(0x152))}</option>
              <option value="${_d('djJyYXk=')}">${_d('djJyYXlO')} / ${_d(Ds(0x283))}</option>
              <option value="base64">Base64</option>
              <option value="${_d(Ds(0x42a))}">${_d(Ds(0x52a))}</option>
              <option value="${_d('c3VyZ2U=')}">${_d(Ds(0x6a7))}</option>
              <option value="${_d(Ds(0x692))}">${_d(Ds(0x575))}</option>
              <option value="${_d(Ds(0x706))}">${_d(Ds(0x6d0))} X</option>
              <option value="${_d(Ds(0x1da))}">${_d(Ds(0x548))}</option>
              <option value="${_d('c3VyZmJvYXJk')}">${_d(Ds(0x1a6))}</option>
              <option value="plain">明文 ${_d('dmxlc3M=')}</option>
            </select>
          </div>
        </div>
        <div class="field"><label>订阅链接</label>
          <div class="inrow">
            <input type="text" id="subUrl" readonly onclick="this.select()">
            <button class="btn sm" onclick="copySub()">复制</button>
            <button class="btn sm" onclick="toggleQR()">二维码</button>
            <button class="btn sm" onclick="downloadSub()">下载</button>
            <button class="btn sm primary" onclick="previewSub()">预览</button>
          </div>
        </div>
        <div id="qrWrap" style="display:none"></div>
        <p class="hint" style="margin-top:12px" id="subHint"></p>
        <div id="subPrev" style="display:none;margin-top:12px">
          <div class="kv"><span class="k">订阅类型</span><span class="v" id="prevType">—</span></div>
          <div class="kv"><span class="k">节点数量</span><span class="v" id="prevCount">—</span></div>
          <pre class="code" id="prevBody" style="margin-top:10px"></pre>
        </div>
      </div>
      <div class="card" id="cardFilter">
        <h3><span class="tick"></span>地区与线路筛选</h3>
        <div class="filter-region">
          <span class="filter-region-label">节点地区</span>
          <div class="pills filter-regions">
            <label class="spill"><input type="checkbox" id="fl-region-all" checked><span>全部地区</span></label>
            <label class="spill"><input type="checkbox" id="fl-region-HK"><span>香港</span></label>
            <label class="spill"><input type="checkbox" id="fl-region-TW"><span>台湾</span></label>
            <label class="spill"><input type="checkbox" id="fl-region-US"><span>美国</span></label>
            <label class="spill"><input type="checkbox" id="fl-region-SG"><span>新加坡</span></label>
            <label class="spill"><input type="checkbox" id="fl-region-JP"><span>日本</span></label>
            <label class="spill"><input type="checkbox" id="fl-region-KR"><span>韩国</span></label>
            <label class="spill"><input type="checkbox" id="fl-region-DE"><span>德国</span></label>
          </div>
        </div>
        <div class="filter-region filter-inline">
          <span class="filter-region-label">节点排序</span>
          <div class="pills filter-order">
            <label class="spill"><input type="radio" name="nodeorder" id="fl-order-list" value="list" checked><span>列表排序</span></label>
            <label class="spill"><input type="radio" name="nodeorder" id="fl-order-region" value="region"><span>地区排序</span></label>
            <label class="spill"><input type="radio" name="nodeorder" id="fl-order-random" value="random"><span>随机排序</span></label>
          </div>
        </div>
        <div class="filter-row">
          <div class="filter-group filter-inline">
            <div class="filter-group-title">IP 类型</div>
            <div class="pills filter-family">
              <label class="spill"><input type="checkbox" id="fl-ip4" checked><span>IPv4</span></label>
              <label class="spill"><input type="checkbox" id="fl-ip6"><span>IPv6</span></label>
            </div>
          </div>
          <div class="filter-group filter-inline">
            <div class="filter-group-title">IPv6 下发</div>
            <div class="pills nowrap filter-v6">
              <label class="spill"><input type="radio" name="ip6mode" id="ip6-off" value="off" checked><span>不下发</span></label>
              <label class="spill"><input type="radio" name="ip6mode" id="ip6-tail" value="tail"><span>仅备胎</span></label>
              <label class="spill"><input type="radio" name="ip6mode" id="ip6-full" value="full"><span>等权混合</span></label>
            </div>
          </div>
          <div class="filter-group filter-inline">
            <div class="filter-group-title">运营商偏好</div>
            <div class="pills filter-isp">
              <label class="spill"><input type="checkbox" id="fl-isp-m" checked><span>移动</span></label>
              <label class="spill"><input type="checkbox" id="fl-isp-c" checked><span>联通</span></label>
              <label class="spill"><input type="checkbox" id="fl-isp-t" checked><span>电信</span></label>
            </div>
          </div>
          <div class="filter-group">
            <div class="filter-group-title">地址来源</div>
            <div class="pills nowrap filter-sources">
              <label class="spill"><input type="checkbox" id="fl-native"><span>原生地址</span></label>
              <label class="spill"><input type="checkbox" id="fl-region-src" checked><span>地区节点</span></label>
              <label class="spill"><input type="checkbox" id="fl-pref-domain" checked><span>优选域名</span></label>
              <label class="spill"><input type="checkbox" id="fl-pref-ip" checked><span>优选 IP</span></label>
              <label class="spill"><input type="checkbox" id="fl-custom-pref"><span>自定义优选</span></label>
              <label class="spill"><input type="checkbox" id="fl-random-pref"><span>随机优选</span></label>
            </div>
          </div>
        </div>
        <p class="hint" style="margin-top:12px">「节点排序」三选一，默认随机；「节点地区 / 运营商偏好」仅筛选默认及追加的默认节点，不影响自定义列表或随机基础节点。运营商全选使用混合接口，单选或双选仅请求对应接口。<br>
          <b>默认模式</b>：四种地址来源独立开关，按实际可用来源分配目标名额，不足时只在已启用来源间补位；优选域名合并内置列表及 4 个优选 API。<br>
          <b>自定义优选 / 随机优选</b>：两者互斥。不追加时，仅使用自定义有效列表或生成指定数量的随机节点；开启追加后，以基础节点加筛选后的默认节点补足目标。<br>
          <b>IP 类型 / IPv6 下发</b>：控制默认及追加节点，并决定随机生成池与 IPv6 策略；自定义不追加时保留列表原地址族。仅 IPv6 的默认来源不请求 IPv4、地区或域名 API。Worker 节点目标上限不含家宽与配额提示。</p>
      </div>
      <div class="card">
        <h3><span class="tick"></span>配额速览 <span class="sub" id="dbSub">未配置监控</span></h3>
        <div id="dbWrap" style="display:none">
          <div class="kv"><span class="k">当日请求量</span><span class="v" id="dbReq">—</span></div>
          <div style="margin:10px 0 6px;height:8px;border-radius:6px;background:var(--card2);over${_d(Ds(0x2cc))}hidden">
            <div id="dbBar" style="height:100%;width:0%;border-radius:6px;background:linear-gradient(90deg,var(--ok),var(--accent));transition:width .5s"></div>
          </div>
          <div class="kv"><span class="k">已用额度</span><span class="v" id="dbPct">—</span></div>
        </div>
        <p class="hint" style="margin-top:10px">免费计划 100,000 次/日。在「面板设置」配置 Cloudflare 监控后即可在此查看当日用量；策略见「配额安全」。</p>
      </div>
      <div class="card">
        <h3><span class="tick"></span>运行状态</h3>
        <div class="kv"><span class="k">协议</span><span class="v" id="stProto">—</span><span class="mbadge" id="stMode">—</span></div>
        <div class="kv"><span class="k">KV 持久化</span><span class="v" id="stKv">—</span></div>
        <div class="kv"><span class="k">面板入口</span><span class="v" id="stEntry">—</span></div>
      </div>
    </section>

    <!-- ===== 视图：节点配置（协议 / TLS / ECH / 落地出站） ===== -->
    <section class="view" data-view="nodes">
      <div class="view-head"><h2>节点配置</h2><p>协议、TLS/ECH、负载均衡与落地出站（保存后立即生效）</p></div>
      <div class="grid3">
        <div class="card">
          <h3><span class="tick"></span>协议开关</h3>
          <div class="proto-row"><label class="switch"><input type="checkbox" id="en-${_d(Ds(0x160))}" checked><span class="sl"></span></label><span>${_d('VkxFU1M=')} 协议（默认开启）</span></div>
          <div class="proto-row"><label class="switch"><input type="checkbox" id="en-${_d(Ds(0x4a8))}"><span class="sl"></span></label><span>${_d(Ds(0x62f))} 协议（支持${_d('TWlob21v')}内核）</span></div>
          <div class="proto-row"><label class="switch"><input type="checkbox" id="en-${_d(Ds(0x40a))}"><span class="sl"></span></label><span>${_d(Ds(0x3dd))} 协议（支持${_d(Ds(0x48b))}内核，须绑定域名开启${_d('Z1JQQw==')}）</span></div>
          <div class="field" style="margin-top:12px"><label>${_d('VHJvamFu')} 密码（留空使用 UUID）</label><input type="text" id="tp-pass" placeholder="${_d(Ds(0x62f))} 密码" autocomplete="off"></div>
        </div>
        <div class="card">
          <h3><span class="tick"></span>TLS 与传输</h3>
          <div class="proto-row"><label class="switch"><input type="checkbox" id="tls-only"><span class="sl"></span></label><span>仅 TLS 端口（跳过 80/8080 等明文端口）</span></div>
          <div class="field" style="margin-top:12px"><label>${_d(Ds(0x64c))} 协商（留空 = 自动）</label><input type="text" id="${_d('YWxwbg==')}" placeholder="留空自动：WS→http/1.1，XHTTP→h2；WS 传输请勿填 h2" autocomplete="off"></div>
          <p class="hint">明文端口节点（80/8080/8880/2052/2082/2086/2095）开启「仅 TLS」后从订阅剔除。</p>
          <div class="proto-row" style="margin-top:14px"><label class="switch"><input type="checkbox" id="t-skipcert"><span class="sl"></span></label><span>跳过证书验证（skip-cert-verify / allowInsecure）</span></div>
          <p class="hint">默认关闭（更安全）：客户端会校验节点证书，可防中间人攻击。节点 SNI 使用 *.pages.dev / *.workers.dev 或你绑定的自定义域名时证书本身有效，一般无需开启；仅当客户端报 TLS 握手 / 证书错误、或使用自签证书时再开启。<br>
            兼容范围：Clash/Mihomo、Sing-box、Surge、Loon、Surfboard、Quantumult X 开启后生效；v2rayN / v2rayNG / Shadowrocket 等 xray 系客户端通过链接里的 allowInsecure 参数生效，但 xray 内核官方已在 2026.8.1 起停用该选项，新版客户端开启也无效。</p>
        </div>
      </div>
      <div class="grid2">
        <div class="card">
          <h3><span class="tick"></span>负载均衡</h3>
          <div class="proto-row"><label class="switch"><input type="checkbox" id="q-lb-on"><span class="sl"></span></label><span>负载均衡（打乱下发顺序）</span></div>
          <p class="hint" style="margin-top:12px">默认开启：每次生成订阅时对节点顺序做 Fisher-Yates 随机轮换，避免所有客户端集中在同一批头部 IP 上；关闭后改为固定顺序，固定规则跟随「地区与线路筛选 → 节点排序」：选「列表排序」按节点清单顺序、选「地区排序」按地区归并、选「随机排序」则等同开启轮换；自定义订阅模式下按你在列表里手动排列的先后固定下发。随机轮换只改变下发顺序，不改变节点内容与数量。<br>
            <b>保底前置</b>：「优选IP-Sxx」（实测高存活 IP）/「内置·保底-XX」/「隧道前置-XX」始终保留在清单头部（组内仍随机轮换），
            其余节点整体乱序——既保证客户端「取第一个」就是稳定节点，又不牺牲分散连接的收益；同时避免这批最稳的节点在节点数封顶时被尾部截断砍掉。</p>
        </div>
        <div class="card">
          <h3><span class="tick"></span>国家标注</h3>
          <div class="field" style="margin-top:10px"><label>无名节点默认国家</label><select id="q-clabel">
            <option value="">按订阅时机房实测（默认）</option>
            <option value="OFF">不标注</option>
            <option value="HK">固定：香港</option>
            <option value="TW">固定：台湾</option>
            <option value="MO">固定：澳门</option>
            <option value="JP">固定：日本</option>
            <option value="SG">固定：新加坡</option>
            <option value="KR">固定：韩国</option>
            <option value="US">固定：美国</option>
            <option value="DE">固定：德国</option>
            <option value="GB">固定：英国</option>
            <option value="FR">固定：法国</option>
            <option value="CA">固定：加拿大</option>
            <option value="AU">固定：澳大利亚</option>
            <option value="SE">固定：瑞典</option>
            <option value="NL">固定：荷兰</option>
            <option value="FI">固定：芬兰</option>
            <option value="IN">固定：印度</option>
            <option value="TR">固定：土耳其</option>
            <option value="BR">固定：巴西</option>
          </select></div>
          <p class="hint" style="margin-top:12px">仅影响无法从名字识别地区的节点（优选IP/保留N/自定名等）。「机房实测」= 真实路由落点，随运营商线路变化（同一网络下全部同名是正常现象）；「固定」只改节点名，不改变实际落地。订阅链接可加 ?country=HK 或 ?country=off 临时覆盖（优先于本设置）。</p>
        </div>
      </div>
      <div class="card">
        <h3><span class="tick"></span>ECH 加密（可选）</h3>
        <div class="proto-row"><label class="switch"><input type="checkbox" id="ech-on"><span class="sl"></span></label><span>启用 ECH 加密（需绑定自定义域名）</span></div>
        <div class="grid2" style="margin-top:12px">
          <div class="field" style="margin-bottom:0"><label>ECH 域名（留空用默认 cloudflare-ech.com）</label><input type="text" id="ech-host" placeholder="cloudflare-ech.com" autocomplete="off"></div>
          <div class="field" style="margin-bottom:0"><label>自定义 ECH DNS（DoH 地址，留空用客户端默认）</label><input type="text" id="ech-dns" placeholder="https://223.5.5.5/dns-query" autocomplete="off"></div>
        </div>
        <p class="hint">开启后订阅节点附带 ech 参数与 ${_d(Ds(0x2f8))} 协商，客户端需支持 ECH 才生效。</p>
      </div>
      <div class="card">
        <h3><span class="tick"></span>落地与出站</h3>
        <div class="field"><label>反代 / 落地（可填多个，英文逗号分隔；支持域名与 IP，可带两位国家代码；留空则直连失败后走内置地区出口）</label><input type="text" id="s-${_d(Ds(0x182))}" placeholder="如：Proxy-HK.a.com,HK.43.132.231.159:443,8.219.155.125:443#JP" autocomplete="off"></div>
        <p class="hint">多条时按节点落地国家自动匹配。带国家代码的条目只用于该国节点，两种写法等价：域名把国家代码放在名字里（如 Proxy-HK.… 里的 HK），IP 写成前缀式 HK.1.2.3.4:443 或后缀式 1.2.3.4:443#HK（IPv6 用方括号，如 HK.[2001:db8::1]:443）。不带国家代码的条目（含纯 IP）作为通用候选，按填写顺序依次尝试。某国无对应条目时退回列表首条；只填一条时行为与旧版一致。</p>
        <div class="field"><label>出站（可选）</label><input type="text" id="s-${_d(Ds(0x466))}" placeholder="${_d('c29ja3M1')}://user:pass@1.2.3.4:1080 或 ${_d(Ds(0x26a))}-ietf-poly1305:密码@1.2.3.4:8388" autocomplete="off"></div>
        <p class="hint">支持 ${_d(Ds(0x29f))}://（可带 user:pass@）、http(s)://、${_d('c3M6Ly8=')} 或 host:port（默认按 ${_d(Ds(0x29f))}，端口 1080）。此项控制 Worker 的真实转发出口，不会作为节点字段写进订阅；验证出口 IP 时请选择“仅走出口（only）”，默认模式在代理失败时会回退直连。SS 加密支持 ${_d(Ds(0x605))} / ${_d(Ds(0x204))} / ${_d(Ds(0x2f9))}-ietf-poly1305。</p>
        <div class="field" style="margin-bottom:0"><label>出站方式（只影响 Worker → 目标网站这一段，与订阅节点无关）</label>
          <select id="s-outmode">
            <option value="">出口优先 → 直连 → 反代</option>
            <option value="no">直连优先（与反代竞速）</option>
            <option value="only">仅走出口（忽略反代）</option>
          </select>
          <div class="hint" style="margin-top:6px">「出口」= 上面填的 socks5/http/ss 代理；「直连」= Worker 用自己的 IP 连目标；「反代」= 上面「反代/落地」里的服务器。仅走出口时不使用反代。</div>
        </div>
        <div class="grid2" style="margin-top:14px">
          <div class="field" style="margin:0"><label>直连超时</label>
            <select id="s-dialto">
              <option value="1500">1.5 秒（推荐）</option>
              <option value="2000">2 秒</option>
              <option value="4000">4 秒（慢线路）</option>
            </select>
          </div>
          <div class="field" style="margin:0"><label>直连与反代的竞速等待</label>
            <select id="s-racem">
              <option value="100">100ms</option>
              <option value="150">150ms（推荐）</option>
              <option value="250">250ms</option>
              <option value="500">500ms</option>
            </select>
          </div>
        </div>
        <div class="proto-row" style="margin-top:12px"><label class="switch"><input type="checkbox" id="s-builtinpx" checked><span class="sl"></span></label><span style="flex:1;min-width:0;line-height:1.55">启用内置公共反代（按 colo 就近选择；关闭后只用你填的反代）</span></div>
        <div class="field" style="margin-top:12px"><label>强制走反代的域名（可选，逗号或换行分隔，自动匹配子域）</label>
          <input type="text" id="s-forcepx" placeholder="如：openai.com, chatgpt.com, claude.ai">
        </div>
      </div>
      <div class="card">
        <h3><span class="tick"></span>保存与生效</h3>
        <div class="note-box" style="margin:0">配置修改后点右下角「保存全部」写入 KV 并生效，订阅与节点构成立即更新；「重置」清空 KV 全部数据并还原初始部署状态。</div>
      </div>
    </section>

    <!-- ===== 视图：优选配置 ===== -->
    <section class="view" data-view="optimizer">
      <div class="view-head"><h2>优选配置</h2><p>自定义优选 &amp; 在线优选可选 · 拉取候选 IP → 本地测速 → 最优节点加入订阅</p></div>
      <div class="card">
        <h3><span class="tick"></span>优选节点</h3>
        <div class="grid2">
          <div class="field" style="margin:0"><label>订阅模式</label>
            <select id="o-submode" onchange="onSubMode()">
              <option value="">关闭（使用面板默认节点池）</option>
              <option value="custom">自定义订阅（支持汇聚）</option>
              <option value="random">随机优选模式（官方接口）</option>
            </select>
          </div>
          <div class="field" style="margin:0"><label>追加默认节点</label>
            <select id="o-subinc" onchange="updateSourceState()">
              <option value="0">关闭（仅当前模式基础节点）</option>
              <option value="1">开启（用已启用的默认来源补足剩余名额）</option>
            </select>
          </div>
        </div>
        <div class="grid2" style="margin-top:14px">
          <div class="field" style="margin:0"><label>前置节点数量（写入「隧道前置」的节点数）</label>
            <select id="o-frontlimit">
              <option value="10">10</option>
              <option value="30">30</option>
              <option value="60" selected>60（默认）</option>
              <option value="100">100</option>
                          <option value="120">120</option>
            </select>
          </div>
          <div class="field hwdesk" style="margin:0"><label>家宽出口数量（与「家宽模式」双向同步）</label>
            <select id="o-hwlimit" onchange="syncHwLimit(this.value)">
              <option value="10">10</option>
              <option value="30">30</option>
              <option value="60" selected>60（默认）</option>
              <option value="100">100</option>
                          <option value="120">120</option>
            </select>
          </div>
        </div>
        <div class="field" id="sm-custom" style="margin-top:14px;display:none">
          <label>优选节点（域名 / 优选 API / IP，每行一个；IPv4 用 IP:端口#名称，IPv6 端口用 [IPv6]:端口#名称）</label>
          <textarea id="f-preferred" rows="6" placeholder="*.cloudflare.182682.xyz&#10;104.25.246.53:443#香港&#10;https://${_d(Ds(0x1bc))}.pages.dev/random-region/HK/100.txt"></textarea>
          <div class="hint">开启「自定义订阅」后生效；域名与优选 API 保存后自动解析为 IP 下发；测速「加入优选」写入此列表，保存后生效。</div>
          <div class="inrow" style="margin-top:8px;align-items:center">
            <button class="btn sm" onclick="fetchDomains()">拉取微测网优选域名</button>
            <span id="prefCount" class="hint" style="margin:0;color:var(--accent)">当前已输入 0 条</span>
          </div>
        </div>
        <div class="field" id="sm-random" style="margin-top:14px;display:none">
          <label>随机优选数量（1-99）</label>
          <input type="number" id="o-rand" min="1" max="99" value="16">
          <div class="hint">从 Cloudflare 地址段随机生成指定数量节点，不经域名解析；只有开启「追加默认节点」才会继续补到 Worker 目标上限。</div>
        </div>
      </div>
      <div class="card">
        <h3><span class="tick"></span>在线优选</h3>
        <div class="grid3">
          <div class="field" style="grid-column:span 2;margin:0"><label>数据源</label>
            <select id="o-source">
              <option value="wetest_v4">微测网 IPv4</option>
              <option value="wetest_v6">微测网 IPv6</option>
              <option value="${_d('YmVzdGNm')}">优选 IP 列表（${_d(Ds(0x1bc))}）</option>
              <option value="hostmonit">HostMonit 优选</option>
              <option value="cidr">内置 Cloudflare 地址段</option>
              <option value="custom">自定义 URL</option>
            </select>
          </div>
          <div class="field" style="margin:0"><label>默认端口 <span style="font-weight:400;color:var(--faint)">（源未带端口时用）</span></label>
            <select id="o-port" onchange="onPortSel()">
              <optgroup label="HTTPS"><option value="443">443</option><option value="2053">2053</option><option value="2083">2083</option><option value="2087">2087</option><option value="2096">2096</option><option value="8443">8443</option></optgroup>
              <optgroup label="HTTP"><option value="80">80</option><option value="8080">8080</option><option value="8880">8880</option><option value="2052">2052</option><option value="2082">2082</option><option value="2086">2086</option><option value="2095">2095</option></optgroup>
              <option value="custom">自定义…</option>
            </select>
            <input type="text" id="o-portC" style="display:none;margin-top:8px" placeholder="自定义端口号" autocomplete="off">
          </div>
        </div>
        <div class="field" id="o-customWrap" style="display:none;margin-top:12px"><label>自定义数据源 URL <span style="font-weight:400;color:var(--faint)">（多个用换行或分号隔开，上限 50 个，并发拉取；URL 查询串中的逗号原样保留）</span></label><input type="text" id="o-sourceURL" placeholder="https://example.com/ip.txt（多个用换行/分号隔开）" autocomplete="off"></div>
        <div class="field" style="margin-top:8px"><label>兜底优选池 URL <span style="font-weight:400;color:var(--faint)">（可选，换行/分号分隔，上限 10 个；URL 查询串中的逗号原样保留；留空用内置 ${_d(Ds(0x1bc))} 地区池）</span></label><input type="text" id="o-fbpool" placeholder="https://a.example/ips.txt;https://b.example/ips.txt" autocomplete="off"></div>
        <div class="grid3" style="margin-top:6px">
          <div class="field" style="margin:0"><label>并发线程（1-50）</label><input type="number" id="o-threads" min="1" max="50" value="5"></div>
          <div class="field" style="margin:0"><label>候选数量</label><input type="number" id="o-count" min="1" value="20"></div>
          <div class="field" style="margin:0"><label>随机补足（0 关闭）</label><input type="number" id="o-fill" min="0" value="0"></div>
        </div>
        <div class="row" style="margin-top:14px">
          <label class="switch"><input type="checkbox" id="o-useCidr" checked><span class="sl"></span></label>
          <span style="font-size:13px;color:var(--dim)">候选不足时用 Cloudflare 地址段随机补足</span>
          <span style="flex:1"></span>
          <button class="btn primary" onclick="runPick()">开始优选</button>
          <button class="btn" onclick="addAllBest()">全部加入最优</button>
        </div>
        <div class="msg" id="oMsg"></div>
      </div>
      <div class="card">
        <h3><span class="tick"></span>测速结果 <span class="sub">本地（浏览器）→ 目标 IP</span></h3>
        <div class="tbl-wrap">
          <table><colgroup><col style="width:42%"><col style="width:18%"><col style="width:16%"><col style="width:24%"></colgroup>
          <thead><tr><th>IP : 端口</th><th>延迟</th><th>状态</th><th>操作</th></tr></thead>
          <tbody id="oTableBody"><tr><td colspan="4" style="text-align:center;color:var(--faint)">尚未测速 — 点击「开始优选」拉取候选</td></tr></tbody></table>
        </div>
      </div>
      
    </section>

    <!-- ===== 视图：配额安全 ===== -->
    <section class="view" data-view="quota">
      <div class="view-head"><h2>配额安全</h2><p>监控 Cloudflare 账户当日用量，按免费额度自动调节下发规模（需在面板设置中配置 Cloudflare 账户 ID 及 API 令牌）</p></div>
      <div class="card">
        <h3><span class="tick"></span>Cloudflare 用量监控 <span class="sub" id="qQuotaSub">未配置</span></h3>
        <div id="qQuotaWrap">
          <div class="kv"><span class="k">当日请求量</span><span class="v" id="qReq">—</span></div>
          <div style="margin:10px 0 6px;height:10px;border-radius:6px;background:var(--card2);over${_d(Ds(0x2cc))}hidden">
            <div id="qBar" style="height:100%;width:0%;border-radius:6px;background:linear-gradient(90deg,var(--ok),var(--accent));transition:width .5s"></div>
          </div>
          <div class="kv"><span class="k">已用额度</span><span class="v" id="qPct">—</span></div>
          <div class="kv"><span class="k">剩余额度</span><span class="v" id="qRemain">—</span></div>
          <div class="kv"><span class="k">CPU 时间</span><span class="v" id="qCpu">—</span></div>
          <div class="kv"><span class="k">子请求数</span><span class="v" id="qSub">—</span></div>
          <div class="kv"><span class="k">数据更新</span><span class="v" id="qAt">—</span></div>
        </div>
        <div id="qQuotaEmpty" style="display:none">
          <div class="note-box" style="margin:0">尚未配置 Cloudflare 监控：在「面板设置」填写 Cloudflare 账户 ID 与 API 令牌（或部署时配置环境变量 CF_ACCOUNT_ID / CF_API_TOKEN），即可实时查看当日请求量并启用自动调节。</div>
        </div>
        <div id="qQuotaErr" style="display:none">
          <div class="note-box" style="margin:0;border-left-color:var(--err)" id="qQuotaErrText">用量查询失败</div>
        </div>
        <div class="row" style="margin-top:14px">
          <label class="switch"><input type="checkbox" id="q-auto-on"><span class="sl"></span></label>
          <span style="font-size:13px">自动调节：当日用量 ≥ 60% 时按比例收缩节点上限（保护账户免费额度）</span>
          <span style="flex:1"></span>
          <button class="btn sm" onclick="refreshQuota()">刷新用量</button>
        </div>
        <p class="hint">自动调节：用量达免费额度 60% 后节点上限按比例收缩（60%→1000 条、70%→750、80%→500、90%→250、100%→100 条保底），用量越高下发越少。</p>
        <div class="row" style="margin-top:10px">
          <label class="switch"><input type="checkbox" id="q-strict-on"><span class="sl"></span></label>
          <span style="font-size:13px">严格模式：当日用量高于 95% 时停止下发任何节点（保护账户免费额度）</span>
        </div>
        <p class="hint">严格模式：开启后，当日用量超过 95% 时订阅将不再下发任何节点（次日自动恢复）；关闭则沿用上方自动调节的比例收缩策略。需先在「面板设置」配置 Cloudflare 账户 ID 与 API 令牌。</p>
      </div>
      <div class="grid2">
        <div class="card">
          <h3><span class="tick"></span>下发控制</h3>
          <div class="proto-row"><label class="switch"><input type="checkbox" id="q-nl-on"><span class="sl"></span></label><span>精确节点数量控制</span></div>
          <div class="field" style="margin-top:10px"><label>Worker 节点目标上限（1-1000，不含家宽）</label><input type="number" id="q-nl-count" min="1" max="1000" value="150"></div>
          <p class="hint">仅约束 <b>Worker 节点</b>（vless / trojan / xhttp），不包含家宽和配额提示节点。先应用 CPU/配额保护，再按最终有效上限分配；已启用来源不足时按实际数量下发，不使用已关闭来源强行凑数。</p>
          <p class="hint" id="nl-est" style="margin-top:6px;color:var(--accent)"></p>
        </div>
        <div class="card">
          <h3><span class="tick"></span>CPU 超额限制</h3>
          <div class="proto-row"><label class="switch"><input type="checkbox" id="q-cpu-on"><span class="sl"></span></label><span>启用 CPU 超额限制（默认关闭）</span></div>
          <p class="hint" style="margin-top:12px">默认关闭：按设定数量完整下发。开启后对订阅生成降载 —— 节点按上限的 60% 下发（削减 40%），单次订阅请求的 CPU 消耗实测下降约 25%，用于规避免费计划 10ms/请求 的超额风险；代价是下发的节点数量相应减少。</p>
        </div>
      </div>
      <div class="card">
        <h3><span class="tick"></span>当前下发策略</h3>
        <div class="grid3">
          <div class="field" style="margin:0"><div class="kv"><span class="k">节点数量控制</span><span class="v" id="qNl">—</span></div><div class="kv"><span class="k">精确节点上限</span><span class="v" id="qNlCount">—</span></div></div>
          <div class="field" style="margin:0"><div class="kv"><span class="k">CPU 超额限制</span><span class="v" id="qCpuLimit">—</span></div><div class="kv"><span class="k">负载均衡</span><span class="v" id="qLb">—</span></div></div>
          <div class="field" style="margin:0"><div class="kv"><span class="k">IPv6 下发</span><span class="v" id="qIp6">—</span></div></div>
        </div>
        <p class="hint" style="margin-top:10px">每次订阅请求消耗 Worker CPU（免费计划 10ms/请求）。面板按「免费额度 → 节点数」逐层设防。</p>
      </div>
      <div class="card">
        <h3><span class="tick"></span>保护机制说明</h3>
        <div class="note-box">三道防线（优先级从高到低）：① 用量监控；② 自动调节（用量 ≥60% 时按比例收缩节点上限，只收紧不放大）；③ 数量上限精确限制。可选「CPU 超额限制」在以上基础上再降载。各层上限冲突取较小值，CPU 消耗始终在免费额度内。</div>
      </div>
    </section>

    <!-- ===== 视图：面板设置 ===== -->
    <!-- ===== 视图：家宽模式 ===== -->
    <section class="view" data-view="${_d('aG9tZQ==')}">
      <div class="view-head"><h2>家宽模式</h2><p>VPN Gate OpenVPN 家宽出口，经隧道前置拨号（仅 ${_d(Ds(0x48b))} 内核）</p></div>
      <div class="card" style="border-color:var(--accent)">
        <h3><span class="tick"></span>家宽出口</h3>
        <div class="proto-row"><label class="switch"><input type="checkbox" id="hw-on"><span class="sl"></span></label><span>VPN Gate OpenVPN （仅${_d(Ds(0x48b))}内核）</span></div>
        <p class="hint">- 该开关由运行模式自动控制：选「家宽模式」自动打开，切到其它模式自动关闭。<br>- 服务端不再自动拉取、缓存或 TCP 测活家宽节点；仅使用你手工保存的落地节点。<br>- 请在客户端完成延迟与可用性测试，避免 Worker 产生批量探测行为。<br>- 家宽须经隧道前置拨号；开启后订阅保留「默认下发 / 自定义优选」节点作为隧道前置，并额外下发家宽出口，前置节点不会被清空。</p>
      </div>
      <div class="card">
        <h3><span class="tick"></span>VPN Gate 手写参数</h3>
        <div class="field"><label>每行一条：主机 端口 协议 地区（空格或冒号分隔，留空则自动拉取）</label>
          <textarea id="hw-cfg" rows="7" placeholder="116.12.3.63 1357 tcp JP&#10;219.100.37.10 1194 udp KR&#10;1.2.3.4:443:tcp:US"></textarea></div>
        <p class="hint" style="margin-top:8px">- 手写参数<b>优先级高于自动拉取</b>：填了就不再访问 VPN Gate 列表，订阅里出现的就是你手写的这几台。<br>- 两种写法：① 直接粘贴 VPN Gate 的 base64 配置（可加地区码前缀，如 JP: 开头）；② 主机 端口 协议 地区，同时在本框内用 ca: / cert: / key: 给出证书。<br>- 内核要求 openvpn 必须带内联证书，<b>缺少证书的行会被忽略</b>（可先点「试用并预览」看解析结果）。<br>- 端口省略默认 1194；协议省略默认 tcp（只认 tcp / udp）；地区省略默认 XX，节点名形如「家宽JP」。<br>- 认证沿用 VPN Gate 公共账号 vpn / vpn；仅 ${_d(Ds(0x48b))} 内核支持 openvpn 出站。<br>- 家宽节点需以 Worker 节点作为隧道前置：若当前订阅没有任何 Worker 节点，将不再下发家宽节点（避免下发无法使用的直连 OpenVPN）。</p>
        <div class="field" style="margin-top:12px"><label>家宽节点上限（1-120，默认 60；只统计 TCP 节点）</label>
          <input type="number" id="hw-limit" min="1" max="120" step="1" value="60" style="max-width:160px"></div>
        <div class="inrow" style="margin-top:10px">
          <button class="btn sm" onclick="hwCustomApply()">试用并预览</button>
          <button class="btn sm" type="button" id="hw-upload-btn" onclick="$('hw-upload-file').click()">上传 .ovpn</button>
          <span class="hint" id="hw-cfg-stat" style="margin:0"></span>
        </div>
        <input type="file" id="hw-upload-file" accept=".ovpn,.conf,text/plain,application/x-openvpn-profile" style="display:none" onchange="hwUploadFile(this)">
        <dialog id="hw-upload-dialog" style="border:1px solid var(--line);border-radius:12px;background:var(--card);color:var(--fg);padding:18px;width:min(92vw,440px);max-width:calc(100vw - 24px)">
          <h3 style="margin:0 0 8px">导入 OpenVPN 配置</h3>
          <p id="hw-upload-summary" class="hint" style="margin:0 0 14px"></p>
          <div class="inrow" style="justify-content:flex-end;gap:8px">
            <button class="btn sm" type="button" onclick="hwUploadChoose('cancel')">取消</button>
            <button class="btn sm" type="button" onclick="hwUploadChoose('append')">追加</button>
            <button class="btn sm primary" type="button" onclick="hwUploadChoose('replace')">替换</button>
          </div>
        </dialog>
      </div>
      <div class="card">
        <h3><span class="tick"></span>使用说明</h3>
        <p class="hint" style="margin:0">本模式是 Worker 模式里的「家宽模式」独立而来，逻辑与原先完全一致：开启后订阅下发家宽出口，并保留默认下发 / 自定义优选节点作为隧道前置。切换到其它模式即恢复对应形态，互不影响。</p>
      </div>
    </section>

    <!-- ===== 视图：${_d(Ds(0x1bd))} 模式 ===== -->
    <section class="view" data-view="${_d(Ds(0x143))}">
      <div class="view-head"><h2>${_d(Ds(0x1bd))} 配置</h2><p>下发 ${_d(Ds(0x1bd))} 节点由客户端直连：需 ${_d(Ds(0x48b))} 内核支持（${_d(Ds(0x5af))} Verge Rev 建议在「设置 → 内核」切到 Alpha；${_d(Ds(0x5af))}Mi / Fl${_d(Ds(0x5af))} / ${_d('U2hhZG93cm9ja2V0')} 亦可）。不支持的内核会整份配置拒载</p></div>
      <div class="card" style="border-color:var(--accent)">
        <h3><span class="tick"></span>接入进度</h3>
        <div class="hint">${_d(Ds(0x1bd))} 走<b>证书认证</b>：本服务会在首次拉取订阅时<b>自动完成注册</b>并把凭据写入你的存储，之后一直复用。你也可以在下面手工填入自己生成的凭据（优先级更高）；未取得有效凭据时不下发节点。</div>
      </div>
      <div class="grid3">
        <div class="card">
          <h3><span class="tick"></span>凭据（自动注册，可覆盖）</h3>
          <div class="field"><label class="spill"><input type="checkbox" id="x-on"> 启用 ${_d(Ds(0x1bd))} 节点下发</label></div>
          <div class="field"><label>粘贴本地生成的凭据（EC 私钥 / 公钥）</label>
            <textarea id="x-conf" rows="6" placeholder="留空则由本服务自动注册；注册失败时请稍后重试"></textarea>
          </div>
          <div class="field"><label>节点名称</label><input type="text" id="x-name" placeholder="${_d(Ds(0x1bd))}"></div>
          <div class="hint">不填也能用：留空时本服务自动注册。凭据只保存在你自己的存储中，不外发。</div>
        </div>
        <div class="card">
          <h3><span class="tick"></span>对端候选</h3>
          <div class="field"><label>一行一个「IP:端口」，按填写顺序尝试（最多 50 个）</label>
            <textarea id="x-eps" rows="6" placeholder="留空则使用内置官方端点组合"></textarea>
          </div>
          <div class="hint">${_d(Ds(0x1bd))} 需使用本模式的官方端点；留空即使用内置组合。</div>
        </div>
        <div class="card">
          <h3><span class="tick"></span>客户端兼容</h3>
          <div class="hint">本模式产出的节点<b>只被部分客户端支持</b>；其余客户端导入后会看不到节点，或直接忽略该节点。</div>
          <div class="hint">若你的客户端不在支持范围内，请改用 Worker 模式或家宽模式。</div>
        </div>
      </div>
    </section>

    <section class="view" data-view="account">
      <div class="view-head"><h2>面板设置</h2><p>运行模式、部署基础信息：订阅名称、HOST、UUID、订阅路径与管理密码</p></div>
      <div class="card">
        <h3><span class="tick"></span>运行模式</h3>
        <div class="field"><label>当前模式（三种模式互不影响，可随时切换）</label>
          <div class="inrow">
            <select id="a-mode">
              <option value="worker">Worker 模式 — 使用内置节点，由本服务承载转发</option>
              <option value="${_d(Ds(0x143))}">${_d(Ds(0x1bd))} 模式 — 下发 ${_d('TUFTUVVF')} 节点，客户端直连</option>
              <option value="home">家宽模式 — 下发 VPN Gate 家宽出口，经隧道前置拨号</option>
            </select>
            <button class="btn sm" onclick="switchModeFromPanel()">切换</button>
          </div>
        </div>
        <div class="hint" id="modeHint">切换后左侧导航与各模式的配置区块会随之改变。</div>
      </div>
      <div class="card">
        <h3><span class="tick"></span>基础配置</h3>
        <div class="field"><label>订阅名称（客户端导入后显示的配置名称，默认 CFNext）</label><input type="text" id="a-subname" maxlength="40" placeholder="CFNext" autocomplete="off"></div>
        <div class="field"><label>HOST（节点使用的域名，点击编辑）</label><input type="text" id="a-hosts" readonly onclick="openHosts()" style="cursor:pointer" autocomplete="off">
          <p class="hint" style="margin:6px 0 0">默认跟随当前访问域名（部署后自动取 Cloudflare 分配的域名，无需手填）。填写多个域名时，按节点顺序轮询分配：节点 1 用第 1 个、节点 2 用第 2 个……用完后从第 1 个重新开始。所填域名都必须已绑定到本项目。</p></div>
        <div class="field"><label>UUID（订阅节点身份）</label>
          <div class="inrow">
            <input type="text" id="a-uuid" placeholder="xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx" autocomplete="off">
            <button class="btn sm" onclick="genUuid()">生成</button>
          </div>
        </div>
        <div class="field"><label>自定义订阅路径（至少 3 位，仅支持大小写字母和数字；如 AAZ、aaz、A1z；留空使用 UUID）</label><input type="text" id="a-suburl" placeholder="AAZ" minlength="3" maxlength="64" pattern="[A-Za-z0-9]{3,64}" autocomplete="off"></div>
        <div class="field"><label>管理密码（留空则面板免登录）</label><input type="password" id="a-admin" placeholder="设置后访问面板需登录" autocomplete="new-password"></div>
        <p class="hint" style="margin-top:4px">部署后首次访问强制要求设置管理密码；设置后此处留空并保存可恢复免登录。</p>
        <div class="field"><label>前置节点（可选，每行一个，最多 5 个）</label>
          <textarea id="a-front" rows="5" spellcheck="false" placeholder="${_d('dmxlc3M=')}://… / ${_d(Ds(0x4a8))}://… / ${_d('c3M6')}//… / ${_d('c29ja3M1')}://…"></textarea>
          <p class="hint" style="margin:6px 0 0">这是 ${_d(Ds(0x1bd))} 模式的前置节点：下发的原生节点会通过 Mihomo <code>dialer-proxy</code> 连接它。<br>多个时自动建「MASQUE前置并发」轮询负载均衡组，不同连接可并发使用不同前置。支持 ${_d(Ds(0x160))}（WS / XHTTP / gRPC）、${_d(Ds(0x4a8))}、SS、SOCKS5；<b>前置必须真实支持 UDP</b>。仅 Clash/Mihomo 格式生效，留空时 ${_d(Ds(0x1bd))} 节点直连。默认 50 个端点可能使弱前置在批量测速时过载，建议在对应模式把候选缩到 3–5 个。</p>
        </div>
      </div>
      <div class="card"><h3><span class="tick"></span>外观风格<button class="foldbtn" id="mdFoldBtn" onclick="toggleMdFold()" data-open="0" title="展开色彩设置"><svg viewBox="0 0 24 24"><path d="M6 9l6 6 6-6"/></svg></button></h3><p class="hint" style="margin:0 0 12px">两种设计语言并存，切换只影响本机显示，不改动 Worker 配置。</p><div class="field"><label>设计语言</label><div class="inrow seg" id="styleSeg"><button class="btn" data-s="glass" onclick="setStyle('glass')">液态玻璃</button><button class="btn" data-s="material" onclick="setStyle('material')">Material</button></div></div><div id="mdBox" class="fold"><div class="field"><label>种子色（单一来源色，其余 64 色由它派生）</label><div class="inrow"><div><input type="text" id="mdSeed" placeholder="#6750A4" autocomplete="off" spellcheck="false"></div><button class="btn sm" onclick="resetSeed()">默认</button></div><div class="md-seed" id="mdSeedRow"></div></div><div class="field"><label>主题方案</label><div class="inrow seg" id="mdVarSeg"></div><p class="hint" id="mdVarDesc" style="margin:8px 0 0"></p></div><div class="md-pal" id="mdPal"></div><div class="md-out" id="mdPalOut"></div><p class="hint" style="margin:10px 0 0">单击任意色块，即把该色设为新的种子色；白圈标出当前种子色在色板中的落点。采样 AOSP「Material 设计」规范：来源色经 CAM16/HCT 展开为 5 个色调调色盘 × 13 个色调共 65 色，再按文档的颜色角色表映射。标号 N 对应 HCT 色调 (1000−N)/10。</p></div></div>
      <div class="card">
        <h3><span class="tick"></span>Cloudflare 监控选项</h3>
        <div class="grid2">
          <div class="field" style="margin:0"><label>账户 ID（Account Tag）</label><input type="text" id="a-cfid" placeholder="32 位十六进制 ID，位于 dash.cloudflare.com 右侧栏「账户 ID」" autocomplete="off"></div>
          <div class="field" style="margin:0"><label>API 令牌（Bearer）</label><input type="password" id="a-cftoken" placeholder="40 位令牌（My Profile → API Tokens 创建）" autocomplete="new-password"></div>
        </div>
        <p class="hint" style="margin-top:10px">账户 ID 是 32 位十六进制字符串（非邮箱），位于 Cloudflare 控制台「管理账户 → 帐户 API 令牌」；查询 401 时请检查这两项。</p>
      </div>
      <div class="card">
        <h3><span class="tick"></span>Telegram 用量通知</h3>
        <div class="grid2">
          <div class="field" style="margin:0"><label>Bot Token</label><input type="text" id="q-tgtoken" placeholder="123456789:AAxxxx..." autocomplete="off"></div>
          <div class="field" style="margin:0"><label>Chat ID</label><input type="text" id="q-tgchat" placeholder="123456789" autocomplete="off"></div>
        </div>
        <p class="hint">填好后推送规则：80%、85%、90% 各提醒一次；90% 后每涨 1% 提醒一次（91-99）；达 99% 自动停用订阅（次日自动恢复）。需同时配置上方 Cloudflare 账户监控；停用与恢复不依赖 TG，通知依赖 TG。</p>
      </div>
      <div class="card">
        <h3><span class="tick"></span>备份与恢复</h3>
        <p class="hint" style="margin-top:0;margin-bottom:12px">以 JSON 导出/导入全部面板设置（协议、优选、筛选、配额监控），可保存或迁移；导入后点「保存全部」生效。</p>
        <div class="inrow">
          <button class="btn" onclick="exportConfig()">导出配置</button>
          <button class="btn" onclick="$('importFile').click()">导入配置</button>
          <input type="file" id="importFile" accept=".json,application/json" style="display:none" onchange="importConfig(this)">
        </div>
      </div>
      <div class="card">
        <h3><span class="tick"></span>运行信息</h3>
        <div class="kv"><span class="k">面板版本</span><span class="v" id="aVer">—</span></div>
        <div class="kv"><span class="k">KV 持久化</span><span class="v" id="aKv">—</span></div>        <div class="kv"><span class="k">构建日期</span><span class="v">2026-09-21</span></div>
      </div>
      <div class="danger-zone">
        <h3 style="margin-bottom:8px;color:var(--err)">危险操作</h3>
        <p style="font-size:13px;color:var(--dim);margin-bottom:12px">重置将清空 KV 中全部数据（面板配置 + 已下发节点记录），面板还原为初始部署状态，不可恢复。</p>
        <button class="btn danger" onclick="resetAll()">重置全部数据</button>
      </div>
    </section>

    <!-- ===== 视图：关于 ===== -->
    <section class="view" data-view="about">
      <div class="view-head"><h2>关于项目</h2><p>${__B} — Cloudflare 边缘管理面板（独立界面 + 独立实现）</p></div>
      <div class="card">
        <h3><span class="tick"></span>相关链接</h3>
        <p style="font-size:13px;color:var(--dim)">${_d(Ds(0x298))} @数字派：<a href="https://www.${_d('eW91dHViZQ==')}.com/@${_d('UEFJX0NO')}" target="_blank" rel="noopener">${_d(Ds(0x58b))}.com/@${_d(Ds(0x5ef))}</a></p>
        <p style="font-size:13px;color:var(--dim);margin-top:6px">Telegram 交流群：<a href="https://${_d(Ds(0x5ba))}${_d(Ds(0x5f4))}" target="_blank" rel="noopener">${_d(Ds(0x5ba))}${_d('U1pfUEFJ')}</a></p>
      </div>
      <div class="card">
        <h3><span class="tick"></span>特别鸣谢</h3>
        <p style="font-size:13px;color:var(--dim);margin-bottom:10px">感谢以下开源项目的启发与支持（界面与代码均为独立实现）</p>
        <div class="tbl-wrap"><table>
          <colgroup><col style="width:34%"><col style="width:66%"></colgroup>
          <thead><tr><th>开源项目</th><th>地址</th></tr></thead>
          <tbody>
            <tr><td>${_d(Ds(0x256))}/${_d(Ds(0x764))}</td><td><a href="https://github.com/${_d(Ds(0x256))}/${_d(Ds(0x764))}" target="_blank" rel="noopener">github.com/${_d(Ds(0x256))}/${_d(Ds(0x764))}</a></td></tr>
            <tr><td>${_d(Ds(0x618))}/${_d(Ds(0x290))}</td><td><a href="https://github.com/${_d(Ds(0x618))}/${_d(Ds(0x290))}" target="_blank" rel="noopener">github.com/${_d(Ds(0x618))}/${_d(Ds(0x290))}</a></td></tr>
            <tr><td>${_d(Ds(0x31d))}/${_d('bWV0YS1ydWxlcy1kYXQ=')}</td><td><a href="https://github.com/${_d('TWV0YUN1YmVY')}/${_d(Ds(0x1d8))}" target="_blank" rel="noopener">github.com/${_d(Ds(0x31d))}/${_d(Ds(0x1d8))}</a></td></tr>
            <tr><td>${_d(Ds(0x55e))}/rules</td><td><a href="https://github.com/${_d(Ds(0x55e))}/rules" target="_blank" rel="noopener">github.com/${_d(Ds(0x55e))}/rules</a></td></tr>
            <tr><td>${_d('RHVzdGluV2lu')}/${_d(Ds(0x48c))}</td><td><a href="https://github.com/${_d('RHVzdGluV2lu')}/${_d(Ds(0x48c))}" target="_blank" rel="noopener">github.com/${_d(Ds(0x58a))}/${_d('cnVsZXNldF9nZW9kYXRh')}</a></td></tr>
            <tr><td>${_d(Ds(0x20e))}/${_d(Ds(0x2aa))}</td><td><a href="https://github.com/${_d(Ds(0x20e))}/${_d(Ds(0x2aa))}" target="_blank" rel="noopener">github.com/${_d(Ds(0x20e))}/${_d(Ds(0x2aa))}</a></td></tr>
            <tr><td>${_d(Ds(0x72c))}/${_d(Ds(0x261))}-Ads-Rule</td><td><a href="https://github.com/${_d(Ds(0x72c))}/${_d(Ds(0x261))}-Ads-Rule" target="_blank" rel="noopener">github.com/${_d('VEctVHdpbGlnaHQ=')}/${_d('QVdBdmVudWU=')}-Ads-Rule</a></td></tr>
            <tr><td>${_d(Ds(0x5f8))}/${_d(Ds(0x73e))}</td><td><a href="https://github.com/${_d('S29vbHNvbg==')}/${_d(Ds(0x73e))}" target="_blank" rel="noopener">github.com/${_d(Ds(0x5f8))}/${_d('UXVyZQ==')}</a></td></tr>
          </tbody>
        </table></div>
      </div>
      <div class="card">
        <h3><span class="tick"></span>调用接口</h3>
        <div class="tbl-wrap"><table>
          <colgroup><col style="width:40%"><col style="width:60%"></colgroup>
          <thead><tr><th>用途</th><th>接口</th></tr></thead>
          <tbody>
            <tr><td>HostMonit 优选</td><td class="mono">stock.hostmonit.com/CloudFlareYes</td></tr>
            <tr><td>优选 IP 列表</td><td class="mono">cf.${_d(Ds(0x552))}.xyz/ip.164746.xyz</td></tr>
            <tr><td>${_d(Ds(0x1bc))} 地区优选池</td><td class="mono">${_d(Ds(0x1bc))}.pages.dev/random-region/{HK|TW|JP|SG|US|KR}/100.txt</td></tr>
            <tr><td>DoH 解析</td><td class="mono">cloudflare-dns.com / dns.alidns.com / doh.pub</td></tr>
            <tr><td>Cloudflare 用量监控（GraphQL）</td><td class="mono">api.cloudflare.com/client/v4/graphql</td></tr>
            <tr><td>版本更新检测</td><td class="mono">raw.githubusercontent.com/${_d(Ds(0x634))}/${_d('Q0ZOZXh0')}/...</td></tr>
            <tr><td>远程规则集（${_d(Ds(0x1dd))} / ${_d(Ds(0x5af))}）</td><td class="mono">raw.githubusercontent.com/${_d(Ds(0x31d))}/${_d('bWV0YS1ydWxlcy1kYXQ=')}/...</td></tr>
            <tr><td>面板二维码库</td><td class="mono">cdn.jsdelivr.net/npm/qrcode-generator@1.4.4/qrcode.min.js</td></tr>
          </tbody>
        </table></div>
      </div>
    </section>
  </div>
</div>
</div>

<div class="fbar">
  <span class="saved-at" id="savedAt">尚未保存</span>
  <button class="btn danger" id="resetBtn" onclick="resetAll()">重置</button>
  <button class="btn primary" id="saveBtn" onclick="saveAll()"><span class="dirty-dot"></span>保存全部</button>
</div>
<div class="mmode" id="mMode">
  <div class="mmodebox">
    <h3>选择运行模式</h3>
    <div class="msub">三种模式互不影响，之后可随时在「面板设置」里切换。模式决定面板形态与订阅下发内容，请按你的实际情况选择。</div>
    <div class="mmodegrid">
      <button class="mmodecard" onclick="pickMode('worker')">
        <b>Worker 模式</b>
        <span>使用内置节点，由本服务承载转发。开箱即用，无需额外准备任何东西。</span>
        <em>适合：先跑通、看重即开即用</em>
      </button>
      <button class="mmodecard" onclick="pickMode('${_d(Ds(0x143))}')">
        <b>${_d(Ds(0x1bd))} 模式</b>
        <span>下发 ${_d(Ds(0x1bd))} 节点，同样由客户端直连。仅部分客户端支持，凭据同样自动生成与保管，无需自备配置。</span>
        <em>适合：明确知道自己的客户端支持</em>
      </button>
      <button class="mmodecard" onclick="pickMode('home')">
        <b>家宽模式</b>
        <span>下发 VPN Gate OpenVPN 家宽出口，经隧道前置拨号，客户端直连。</span>
        <em>适合：需要真实家宽出口（仅 ${_d('TWlob21v')} 内核）</em>
      </button>
    </div>
    <div class="mmodefoot"><a href="javascript:;" onclick="pickMode('worker')">先用 Worker 模式（默认）</a></div>
  </div>
</div>
<div class="hm-mask" id="hm-mask" onclick="if(event.target===this)closeHosts()">
  <div class="hm-box">
    <h4>✏️ 编辑 HOST 域名列表</h4>
    <textarea id="hm-text" spellcheck="false" autocomplete="off" placeholder="一行一个域名"></textarea>
    <p class="hint" style="margin:8px 0 0">一行一个域名，无需添加逗号和 https://。只填当前域名（或留空）表示跟随当前访问域名。</p>
    <div class="hm-act"><button class="btn" onclick="closeHosts()">取消</button><button class="btn primary" onclick="okHosts()">确定</button></div>
  </div>
</div>
<div class="toast" id="toast"></div>

<script>
/* ===== 基础 ===== */
var APIPATH = location.pathname.replace(/\/+$/, '');
var CFG = null;
var LAST = [];
var toastTimer = null;
function $(id){ return document.getElementById(id); }
function api(p, opts){
  return fetch(APIPATH + '/api/' + p, opts).then(function(r){ return r.json(); });
}
function toast(t, ty){
  var el = $('toast');
  el.textContent = t;
  el.className = 'toast show ' + (ty || '');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(function(){ el.className = 'toast'; }, 2600);
}
function showMsg(id, t, ty){
  var el = $(id);
  el.textContent = t;
  el.className = 'msg show ' + (ty || 'info');
}
function copyText(t){
  var done = false;
  function fin(ok2){
    if (done) return; done = true;
    toast(ok2 ? '已复制' : '复制失败，请手动复制', ok2 ? 'ok' : 'err');
  }
  if (navigator.clipboard && navigator.clipboard.writeText) {
    var p = null;
    try { p = navigator.clipboard.writeText(t); } catch (e) { fin(${_d(Ds(0x553))}Copy(t)); return; }
    if (p && typeof p.then === 'function') {
      p.then(function(){ fin(true); }, function(){ fin(${_d(Ds(0x553))}Copy(t)); });
      setTimeout(function(){ fin(${_d(Ds(0x553))}Copy(t)); }, 600); // 剪贴板 API 悬空（无权限等）时回退
    } else { fin(true); }
  } else {
    fin(${_d(Ds(0x553))}Copy(t));
  }
}
function ${_d(Ds(0x553))}Copy(t){
  var ta = document.createElement('textarea');
  ta.value = t; ta.style.position = 'fixed'; ta.style.opacity = '0';
  document.body.appendChild(ta); ta.select();
  var ok2 = false;
  try { ok2 = document.execCommand('copy'); } catch (e) { ok2 = false; }
  document.body.removeChild(ta);
  return ok2;
}
function copySub(){ copyText($('subUrl').value || makeSub()); }
function markDirty(){
  if (typeof updatePrefCount === 'function') updatePrefCount();
  $('saveBtn').classList.add('dirty');
  $('savedAt').textContent = '有未保存的修改';
}

/* ===== 导航 ===== */
var NAV = [
  { id:'dashboard', name:'仪表盘', icon:'<path d="M4 4h7v7H4zM13 4h7v4h-7zM4 13h7v7H4zM13 11h7v9h-7z"/>' },
  { id:'${_d(Ds(0x143))}', name:'${_d('TUFTUVVF')} 配置', icon:'<path d="M4 7l8-4 8 4v10l-8 4-8-4zM12 3v18"/>' },
  { id:'${_d(Ds(0x2ff))}', name:'家宽配置', icon:'<path d="M3 11l9-7 9 7M5 10v10h14V10M10 20v-6h4v6"/>' },
  { id:'nodes', name:'节点配置', icon:'<path d="M12 3l8 4.5v9L12 21l-8-4.5v-9zM12 12l8-4.5M12 12L4 7.5"/>' },
  { id:'optimizer', name:'优选配置', icon:'<path d="M12 19a7 7 0 1 0 0-14 7 7 0 0 0 0 14zM12 8v4l2.5 2.5M3 3l3 3"/>' },
  { id:'quota', name:'配额安全', icon:'<path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6zM9 12l2 2 4-4"/>' },
  { id:'account', name:'面板设置', icon:'<path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM4 21c0-3.5 3.6-6 8-6s8 2.5 8 6"/>' },
  { id:'about', name:'关于项目', icon:'<path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM12 11v5M12 8h.01"/>' }
];
var TITLES = { dashboard:'仪表盘', ${_d(Ds(0x143))}:'${_d(Ds(0x1bd))} 配置', ${_d(Ds(0x2ff))}:'家宽配置', nodes:'节点配置', optimizer:'优选配置', quota:'配额安全', account:'面板设置', about:'关于项目' };

/* ===== 运行模式（三种模式互不影响，可随时切换） ===== */
var MODE_NAV = {
  worker: ['dashboard', 'nodes', 'optimizer', 'quota', 'account', 'about'],
  ${_d(Ds(0x143))}: ['dashboard', '${_d(Ds(0x143))}', 'account', 'about'],
  home: ['dashboard', '${_d(Ds(0x2ff))}', 'account', 'about']
};
var MODE_SHORT = { worker: 'Worker', ${_d('bWFzcXVl')}: '${_d(Ds(0x1bd))}', home: '家宽' };
var MODE_LABEL = { worker: 'Worker 模式', ${_d(Ds(0x143))}: '${_d(Ds(0x1bd))} 模式', home: '家宽模式' };
var MODE_DESC = {
  worker: '使用内置节点，由本服务承载转发，开箱即用；Clash 订阅自动附带家宽出口（隧道前置 + VPN Gate）。',
  ${_d(Ds(0x143))}: '下发 ${_d(Ds(0x1bd))} 节点，客户端直连；仅部分客户端支持。',
  home: 'VPN Gate OpenVPN 家宽出口，经隧道前置拨号（仅 ${_d(Ds(0x48b))} 内核）。'
};
function curMode(){ var m = CFG && CFG.mode; return MODE_NAV[m] ? m : 'worker'; }
function applyMode(){
  var m = curMode(), nav = MODE_NAV[m];
  buildNav();
  var active = document.querySelector('.nav-item.on');
  if (!active || nav.indexOf(active.getAttribute('data-v')) < 0) switchView(nav[0]);
  var h = $('modeHint');
  if (h) h.innerHTML = '当前：<b>' + MODE_LABEL[m] + '</b> — ' + MODE_DESC[m];
  var sel = $('a-mode');
  if (sel) sel.value = m;
  // 地区与线路筛选只对内置 CF 节点池有意义：${_d('TUFTUVVF')} 节点由客户端直连，不参与地区/来源筛选
  var cf = $('cardFilter');
  if (cf) cf.style.display = (m === 'worker') ? '' : 'none';
  var sm = $('stMode');
  if (sm) sm.textContent = MODE_SHORT[m] || 'Worker';
}
function exitMode(){ showMode(); }
function showMode(){ $('mMode').classList.add('show'); }
function closeMode(){ $('mMode').classList.remove('show'); }
function pickMode(m){
  if (!MODE_NAV[m]) return;
  var same = (m === curMode());
  api('config', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ mode: m }) })
    .then(function(r){
      if (!r || !r.ok) { toast((r && r.msg) || '保存失败', 'err'); return; }
      CFG = r.data;
      closeMode();
      fillForm();
      renderAll();
      applyMode();
      switchView(m === 'worker' ? 'dashboard' : m);
      toast(same ? '已应用当前模式' : ('已切换到 ' + MODE_LABEL[m]), 'ok');
    })
    .catch(function(){ toast('保存失败：无法连接服务器', 'err'); });
}
function switchModeFromPanel(){
  var m = $('a-mode').value;
  if (!MODE_NAV[m]) return;
  if (m === curMode()) { toast('已是当前模式'); return; }
  if (!confirm('切换到「' + MODE_LABEL[m] + '」？\n\n' + MODE_DESC[m] + '\n\n各模式的面板形态与订阅内容会随之改变，可随时切回。')) {
    $('a-mode').value = curMode();
    return;
  }
  pickMode(m);
}
function buildNav(){
  var nav = MODE_NAV[curMode()];
  var html = '';
  NAV.forEach(function(n){
    if (nav.indexOf(n.id) < 0) return;
    html += '<button class="nav-item" data-v="' + n.id + '" onclick="switchView(\'' + n.id + '\')"><svg viewBox="0 0 24 24" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">' + n.icon + '</svg>' + n.name + '</button>';
  });
  $('nav').innerHTML = html;
}
function switchView(id){
  document.querySelectorAll('.nav-item').forEach(function(b){
    b.classList.toggle('on', b.getAttribute('data-v') === id);
  });
  document.querySelectorAll('.view').forEach(function(x){
    x.classList.toggle('on', x.getAttribute('data-view') === id);
  });
  $('pageTitle').textContent = TITLES[id] || '';
  $('topbar').classList.remove('nav-hidden');
  $('sidebar').classList.remove('open');
  if (id === 'account' && typeof mdPaint === 'function') mdPaint();
}
$('hamb').addEventListener('click', function(){ $('sidebar').classList.toggle('open'); $('topbar').classList.remove('nav-hidden'); });

// 手机端各页面共用：向下浏览收起顶栏，向上回滚或接近顶部展开；桌面端不改变。
(function(){
  var bar=$('topbar'),last=window.scrollY||0,delta=0,ticking=false;
  function syncTopbar(force){
    if(!bar)return;
    if(!window.matchMedia('(max-width:960px)').matches||force){bar.classList.remove('nav-hidden');last=window.scrollY||0;delta=0;return}
    var y=Math.max(0,window.scrollY||0),d=y-last;
    if(y<=80){bar.classList.remove('nav-hidden');delta=0}
    else if(Math.abs(d)>=3){
      delta=d>0?Math.max(0,delta)+d:Math.min(0,delta)+d;
      if(delta>=18&&!$('sidebar').classList.contains('open'))bar.classList.add('nav-hidden');
      else if(delta<=-12)bar.classList.remove('nav-hidden');
    }
    last=y;ticking=false;
  }
  window.addEventListener('scroll',function(){if(!ticking){ticking=true;window.requestAnimationFrame(function(){syncTopbar(false)})}},{passive:true});
  window.addEventListener('resize',function(){syncTopbar(true)},{passive:true});
  document.querySelectorAll('[data-view]').forEach(function(el){el.addEventListener('click',function(){if(bar)bar.classList.remove('nav-hidden')})});
})();

/* ===== Material 动态取色（移植自参考面板） ===== */
/* ---------- sRGB ↔ XYZ ↔ CAM16 ↔ HCT ---------- */
var MD_WP = [95.047, 100.0, 108.883];
var MD_XYZ2SRGB = [
  [3.2413774792388685, -1.5376652402851851, -0.49885366846268053],
  [-0.9691452513005321, 1.8758853451067872, 0.04156585616912061],
  [0.05562093689691305, -0.20395524564742123, 1.0571799111220335]
];
var MD_PI = Math.PI;
function mdClamp(a, b, x) { return x < a ? a : (x > b ? b : x); }
function mdSign(x) { return x < 0 ? -1 : (x > 0 ? 1 : 0); }
function mdDeg(d) { d = d % 360; return d < 0 ? d + 360 : d; }
var MD_LE = 216 / 24389, MD_LK = 24389 / 27;
function mdLabF(t) { return t > MD_LE ? Math.cbrt(t) : (MD_LK * t + 16) / 116; }
function mdLabInv(ft) { var f3 = ft * ft * ft; return f3 > MD_LE ? f3 : (116 * ft - 16) / MD_LK; }
function mdYFromLstar(l) { return 100 * mdLabInv((l + 16) / 116); }
function mdLstarFromY(y) { return 116 * mdLabF(y / 100) - 16; }
function mdLinear(c) { var n = c / 255; return n <= 0.040449936 ? n / 12.92 * 100 : Math.pow((n + 0.055) / 1.055, 2.4) * 100; }
function mdDelinear(c) { var n = c / 100; var d = n <= 0.0031308 ? n * 12.92 : 1.055 * Math.pow(n, 1 / 2.4) - 0.055; return mdClamp(0, 255, Math.round(d * 255)); }

/* 观看条件：D65 白点、适应亮度 11.73、背景 L*50、平均环绕，只算一次 */
var MD_VC = (function () {
  var la = (200 / MD_PI) * mdYFromLstar(50) / 100;
  var rW = MD_WP[0] * 0.401288 + MD_WP[1] * 0.650173 + MD_WP[2] * -0.051461;
  var gW = MD_WP[0] * -0.250268 + MD_WP[1] * 1.204414 + MD_WP[2] * 0.045854;
  var bW = MD_WP[0] * -0.002079 + MD_WP[1] * 0.048952 + MD_WP[2] * 0.953127;
  var f = 1.0, cc = 0.69;
  var d = mdClamp(0, 1, f * (1 - (1 / 3.6) * Math.exp((-la - 42) / 92)));
  var rgbD = [d * (100 / rW) + 1 - d, d * (100 / gW) + 1 - d, d * (100 / bW) + 1 - d];
  var k = 1 / (5 * la + 1), k4 = k * k * k * k, k4F = 1 - k4;
  var fl = k4 * la + 0.1 * k4F * k4F * Math.cbrt(5 * la);
  var n = mdYFromLstar(50) / MD_WP[1];
  var z = 1.48 + Math.sqrt(n);
  var nbb = 0.725 / Math.pow(n, 0.2);
  var af = [Math.pow(fl * rgbD[0] * rW / 100, 0.42), Math.pow(fl * rgbD[1] * gW / 100, 0.42), Math.pow(fl * rgbD[2] * bW / 100, 0.42)];
  var aa = [400 * af[0] / (af[0] + 27.13), 400 * af[1] / (af[1] + 27.13), 400 * af[2] / (af[2] + 27.13)];
  return { n: n, aw: (2 * aa[0] + aa[1] + 0.05 * aa[2]) * nbb, nbb: nbb, ncb: nbb, c: cc, nc: f, rgbD: rgbD, fl: fl, fLRoot: Math.pow(fl, 0.25), z: z };
})();

/* 正向：8 位 sRGB → { h 色相, c 色度, t 色调 } */
function mdHctFromRgb(r, g, b) {
  var rl = mdLinear(r), gl = mdLinear(g), bl = mdLinear(b);
  var x = 0.41233895 * rl + 0.35762064 * gl + 0.18051042 * bl;
  var y = 0.2126 * rl + 0.7152 * gl + 0.0722 * bl;
  var z = 0.01932141 * rl + 0.11916382 * gl + 0.95034478 * bl;
  var rC = 0.401288 * x + 0.650173 * y - 0.051461 * z;
  var gC = -0.250268 * x + 1.204414 * y + 0.045854 * z;
  var bC = -0.002079 * x + 0.048952 * y + 0.953127 * z;
  var rD = MD_VC.rgbD[0] * rC, gD = MD_VC.rgbD[1] * gC, bD = MD_VC.rgbD[2] * bC;
  var rAF = Math.pow(MD_VC.fl * Math.abs(rD) / 100, 0.42);
  var gAF = Math.pow(MD_VC.fl * Math.abs(gD) / 100, 0.42);
  var bAF = Math.pow(MD_VC.fl * Math.abs(bD) / 100, 0.42);
  var rA = mdSign(rD) * 400 * rAF / (rAF + 27.13);
  var gA = mdSign(gD) * 400 * gAF / (gAF + 27.13);
  var bA = mdSign(bD) * 400 * bAF / (bAF + 27.13);
  var a = (11 * rA - 12 * gA + bA) / 11;
  var bb = (rA + gA - 2 * bA) / 9;
  var u = (20 * rA + 20 * gA + 21 * bA) / 20;
  var p2 = (40 * rA + 20 * gA + bA) / 20;
  var hue = mdDeg(Math.atan2(bb, a) * 180 / MD_PI);
  var J = 100 * Math.pow(p2 * MD_VC.nbb / MD_VC.aw, MD_VC.c * MD_VC.z);
  var hp = hue < 20.14 ? hue + 360 : hue;
  var eHue = 0.25 * (Math.cos(hp * MD_PI / 180 + 2) + 3.8);
  var p1 = (50000 / 13) * eHue * MD_VC.nc * MD_VC.ncb;
  var t = (p1 * Math.sqrt(a * a + bb * bb)) / (u + 0.305);
  var alpha = Math.pow(t, 0.9) * Math.pow(1.64 - Math.pow(0.29, MD_VC.n), 0.73);
  return { h: hue, c: alpha * Math.sqrt(J / 100), t: mdLstarFromY(y) };
}

/* 逆向：CAM16 (J, C, H) → 线性 sRGB（未裁剪，用于色域判定） */
function mdCamToLinear(j, c, h) {
  var alpha = (c === 0 || j === 0) ? 0 : c / Math.sqrt(j / 100);
  var t = Math.pow(alpha / Math.pow(1.64 - Math.pow(0.29, MD_VC.n), 0.73), 1 / 0.9);
  var hRad = h * MD_PI / 180;
  var eHue = 0.25 * (Math.cos(hRad + 2) + 3.8);
  var ac = MD_VC.aw * Math.pow(j / 100, 1 / MD_VC.c / MD_VC.z);
  var p1 = eHue * (50000 / 13) * MD_VC.nc * MD_VC.ncb;
  var p2 = ac / MD_VC.nbb;
  var hSin = Math.sin(hRad), hCos = Math.cos(hRad);
  var gamma = (23 * (p2 + 0.305) * t) / (23 * p1 + 11 * t * hCos + 108 * t * hSin);
  var a = gamma * hCos, b = gamma * hSin;
  var rA = (460 * p2 + 451 * a + 288 * b) / 1403;
  var gA = (460 * p2 - 891 * a - 261 * b) / 1403;
  var bA = (460 * p2 - 220 * a - 6300 * b) / 1403;
  var rB = Math.max(0, 27.13 * Math.abs(rA) / (400 - Math.abs(rA)));
  var gB = Math.max(0, 27.13 * Math.abs(gA) / (400 - Math.abs(gA)));
  var bB = Math.max(0, 27.13 * Math.abs(bA) / (400 - Math.abs(bA)));
  var rC = mdSign(rA) * (100 / MD_VC.fl) * Math.pow(rB, 1 / 0.42);
  var gC = mdSign(gA) * (100 / MD_VC.fl) * Math.pow(gB, 1 / 0.42);
  var bC = mdSign(bA) * (100 / MD_VC.fl) * Math.pow(bB, 1 / 0.42);
  var rF = rC / MD_VC.rgbD[0], gF = gC / MD_VC.rgbD[1], bF = bC / MD_VC.rgbD[2];
  var X = 1.86206786 * rF - 1.01125463 * gF + 0.14918677 * bF;
  var Y = 0.38752654 * rF + 0.62144744 * gF - 0.00897398 * bF;
  var Z = -0.01584150 * rF - 0.03412294 * gF + 1.04996444 * bF;
  return [
    MD_XYZ2SRGB[0][0] * X + MD_XYZ2SRGB[0][1] * Y + MD_XYZ2SRGB[0][2] * Z,
    MD_XYZ2SRGB[1][0] * X + MD_XYZ2SRGB[1][1] * Y + MD_XYZ2SRGB[1][2] * Z,
    MD_XYZ2SRGB[2][0] * X + MD_XYZ2SRGB[2][1] * Y + MD_XYZ2SRGB[2][2] * Z
  ];
}
function mdInGamut(v) {
  return v[0] >= -0.01 && v[0] <= 100.01 && v[1] >= -0.01 && v[1] <= 100.01 && v[2] >= -0.01 && v[2] <= 100.01;
}
function mdLinToRgb(v) { return [mdDelinear(v[0]), mdDelinear(v[1]), mdDelinear(v[2])]; }

/* 求出让量化后色调等于 tone 的 CAM16 明度 J */
function mdJForTone(h, c, tone) {
  var lo = 0.01, hi = 99.9, i, mid, rgb, lt;
  for (i = 0; i < 24; i++) {
    mid = (lo + hi) / 2;
    rgb = mdLinToRgb(mdCamToLinear(mid, c, h));
    lt = mdLstarFromY(mdLinear(rgb[0]) * 0.2126 + mdLinear(rgb[1]) * 0.7152 + mdLinear(rgb[2]) * 0.0722);
    if (lt < tone) { lo = mid; } else { hi = mid; }
  }
  return (lo + hi) / 2;
}
/* HCT → sRGB：先把色度收敛到色域内（保住色调、牺牲色度），再解明度 */
function mdRgbFromHct(hue, chroma, tone) {
  var h = mdDeg(hue), t = mdClamp(0, 100, tone);
  if (!(chroma >= 1e-4) || t >= 99.9999 || t <= 0.0001) {
    var g = mdDelinear(mdYFromLstar(t));
    return [g, g, g];
  }
  var lo = 0, hi = chroma, i, mid;
  for (i = 0; i < 16; i++) {
    mid = (lo + hi) / 2;
    if (mdInGamut(mdCamToLinear(mdJForTone(h, mid, t), mid, h))) { lo = mid; } else { hi = mid; }
  }
  if (lo < 1e-4) { var g2 = mdDelinear(mdYFromLstar(t)); return [g2, g2, g2]; }
  return mdLinToRgb(mdCamToLinear(mdJForTone(h, lo, t), lo, h));
}

/* ---------- 十六进制互转 ---------- */
function mdHexToRgb(hx) {
  var s = String(hx || '').replace(/[^0-9a-fA-F]/g, '');
  if (s.length === 3) s = s[0] + s[0] + s[1] + s[1] + s[2] + s[2];
  if (s.length !== 6) return null;
  return [parseInt(s.slice(0, 2), 16), parseInt(s.slice(2, 4), 16), parseInt(s.slice(4, 6), 16)];
}
function mdRgbToHex(v) {
  return '#' + v.map(function (x) { var s = mdClamp(0, 255, Math.round(x)).toString(16); return s.length < 2 ? '0' + s : s; }).join('');
}
function mdHctFromHex(hx) { var v = mdHexToRgb(hx); return v ? mdHctFromRgb(v[0], v[1], v[2]) : { h: 0, c: 0, t: 50 }; }
function mdHexFromHct(h, c, t) { return mdRgbToHex(mdRgbFromHct(h, c, t)); }

/* ---------- 色调与主题方案 ---------- */
/* 文档的 13 个色调标号 0/10/50/100/200…1000 ↔ HCT 色调 100/99/95/90/80…0 */
var MD_TONE_LABELS = [0, 10, 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];
function mdLabelToTone(L) { return (1000 - L) / 10; }
var MD_TONES = MD_TONE_LABELS.map(mdLabelToTone);

/* 主题方案：hue 为各调色盘相对来源色的色相偏移，chroma 为色度，
   n 为 neutral1/neutral2 色度，cap 为高色调（≥90）的色度上限。
   TONAL_SPOT 完全按文档：accent1 色度 48、高色调 40；accent2 16；accent3 色相 +60、色度 32；
   neutral1 色度 4；neutral2 色度 8。 */
var MD_VARIANTS = [
  { id: 'TONAL_SPOT', name: '色调点', desc: 'Android 默认方案，低到中等彩度', hue: [0, 0, 60], chroma: [48, 16, 32], n: [4, 8], cap: 40 },
  { id: 'VIBRANT', name: '鲜艳', desc: '次色与三色与主色同类，整体更饱和', hue: [0, 0, 60], chroma: [64, 32, 48], n: [6, 10], cap: 40 },
  { id: 'EXPRESSIVE', name: '表现力', desc: '高彩度，色相间拉开距离', hue: [0, 15, -45], chroma: [72, 36, 56], n: [8, 12], cap: 44 },
  { id: 'SPRITZ', name: '灰调', desc: '去饱和，接近灰阶', hue: [0, 0, 60], chroma: [14, 8, 18], n: [3, 5], cap: 14 }
];
function mdVariant(id) {
  for (var i = 0; i < MD_VARIANTS.length; i++) { if (MD_VARIANTS[i].id === id) return MD_VARIANTS[i]; }
  return MD_VARIANTS[0];
}

/* ---------- 由来源色派生 5 个色调调色盘 ---------- */
function mdPalettes(seedHex, variantId) {
  var src = mdHctFromHex(seedHex);
  /* 文档要求来源色的 CAM16 色度不低于 5，否则色相不稳 */
  var hue = src.h, chroma = Math.max(5, src.c);
  var V = mdVariant(variantId);
  var cap = function (c, t) { return t >= 90 ? Math.min(c, V.cap) : c; };
  var P = {
    a1: { h: hue, c: V.chroma[0] },
    a2: { h: mdDeg(hue + V.hue[1]), c: V.chroma[1] },
    a3: { h: mdDeg(hue + V.hue[2]), c: V.chroma[2] },
    n1: { h: hue, c: V.n[0] },
    n2: { h: hue, c: V.n[1] },
    err: { h: 25, c: 84 }
  };
  for (var k in P) { P[k].at = function (t) { return mdHexFromHct(this.h, cap(this.c, t), t); }; }
  P.err.at = function (t) { return mdHexFromHct(this.h, this.c, t); };
  P.seed = seedHex;
  P.sourceChroma = chroma;
  return P;
}
/* 65 色：5 个调色盘 × 13 个色调，键为文档标号 */
function mdTonal(seedHex, variantId) {
  var P = mdPalettes(seedHex, variantId);
  var out = {};
  ['a1', 'a2', 'a3', 'n1', 'n2'].forEach(function (k) {
    var row = {};
    MD_TONE_LABELS.forEach(function (L) { row[L] = P[k].at(mdLabelToTone(L)); });
    out[k] = row;
  });
  return out;
}

/* ---------- 颜色角色映射（文档「Material 库颜色属性更新」表） ---------- */
/* [角色, 调色盘, 浅色主题色调, 深色主题色调] —— 标号 N ↔ 色调 (1000-N)/10 */
var MD_ROLE_MAP = [
  ['primary', 'a1', 600, 200], ['onPrimary', 'a1', 0, 800],
  ['primaryContainer', 'a1', 100, 700], ['onPrimaryContainer', 'a1', 900, 900],
  ['secondary', 'a2', 600, 200], ['onSecondary', 'a2', 0, 800],
  ['secondaryContainer', 'a2', 100, 700], ['onSecondaryContainer', 'a2', 900, 900],
  ['tertiary', 'a3', 600, 200], ['onTertiary', 'a3', 0, 800],
  ['tertiaryContainer', 'a3', 100, 700], ['onTertiaryContainer', 'a3', 900, 900],
  ['error', 'err', 600, 200], ['onError', 'err', 0, 800],
  ['errorContainer', 'err', 100, 700], ['onErrorContainer', 'err', 900, 900],
  ['background', 'n1', 10, 900],
  ['onBackground', 'n1', 900, 100],
  ['surface', 'n1', 10, 900], ['onSurface', 'n1', 900, 100],
  ['surfaceContainerLowest', 'n1', 0, 1000], ['surfaceContainerLow', 'n1', 100, 900],
  ['surfaceContainer', 'n1', 200, 800], ['surfaceContainerHigh', 'n1', 300, 700],
  ['surfaceContainerHighest', 'n1', 400, 600],
  ['surfaceVariant', 'n2', 100, 700], ['onSurfaceVariant', 'n2', 700, 200],
  ['outline', 'n2', 500, 400], ['outlineVariant', 'n2', 200, 700],
  ['inverseSurface', 'n1', 800, 100], ['inverseOnSurface', 'n1', 100, 800],
  ['inversePrimary', 'a1', 200, 600],
  /* 遮罩与投影不随深浅翻转：M3 规定两者在任何主题下都是纯黑 */
  ['scrim', 'n1', 1000, 1000], ['shadow', 'n1', 1000, 1000],
  /* 状态层与状态内容（文档第二张表） */
  ['primaryStateContent', 'a1', 700, 200], ['primaryStateLayer', 'a1', 600, 300],
  ['secondaryStateContent', 'a2', 700, 200], ['secondaryStateLayer', 'a2', 600, 300],
  ['onPrimaryStateContent', 'a1', 0, 800], ['onPrimaryStateLayer', 'a1', 900, 800],
  ['onSecondaryStateContent', 'a2', 0, 800], ['onSecondaryStateLayer', 'a2', 900, 800],
  ['onSurfaceStateContent', 'n1', 900, 100], ['onSurfaceStateLayer', 'n1', 900, 100],
  ['onSurfaceVariantStateContent', 'n2', 700, 200], ['onSurfaceVariantStateLayer', 'n2', 700, 200],
  ['errorStateContent', 'err', 800, 200]
];
function mdRoleKey(role) {
  return role.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
}
/* 生成整套颜色角色；dark 为真时取深色主题列 */
function mdRoles(seedHex, variantId, dark) {
  var P = mdPalettes(seedHex, variantId);
  var out = {};
  MD_ROLE_MAP.forEach(function (row) {
    var pal = P[row[1]], L = dark ? row[3] : row[2];
    out[row[0]] = pal.at(mdLabelToTone(L));
  });
  return out;
}
/* 把角色写成 CSS 变量 */
function mdApply(seedHex, variantId, dark) {
  var r = mdRoles(seedHex, variantId, dark);
  var st = document.documentElement.style;
  for (var k in r) { st.setProperty('--m-' + mdRoleKey(k), r[k]); }
  return r;
}

/* ---------- Material 外观 ---------- */
var MD_SEED_DEF = '#6750A4';
var MD_PNAME = { a1: 'accent1', a2: 'accent2', a3: 'accent3', n1: 'neutral1', n2: 'neutral2' };
function storedStyle(){ try { return localStorage.getItem('nb_style') || 'glass'; } catch (e) { return 'glass'; } }
function storedSeed(){
  try { var v = localStorage.getItem('nb_seed'); return (v && mdHexToRgb(v)) ? v : MD_SEED_DEF; } catch (e) { return MD_SEED_DEF; }
}
function storedVariant(){ try { return localStorage.getItem('nb_variant') || 'TONAL_SPOT'; } catch (e) { return 'TONAL_SPOT'; } }
function savePref(k, v){ try { localStorage.setItem(k, v); } catch (e) {} }
function normHex(hx){ var v = mdHexToRgb(hx); return v ? mdRgbToHex(v) : null; }

/* 派生 65 色角色写入 CSS 变量；变量就绪后才挂 data-style，避免首帧闪烁 */
function mdSync(){
  var roles = mdApply(storedSeed(), storedVariant(), resolveTheme(storedTheme()) !== 'light');
  document.documentElement.setAttribute('data-style', storedStyle());
  return roles;
}
function setStyle(s){ savePref('nb_style', s); mdSync(); mdPaint(); }
function setSeed(hx){
  var v = normHex(hx); if (!v) return false;
  savePref('nb_seed', v); mdSync(); mdPaint(); return true;
}
function setVariant(id){ savePref('nb_variant', id); mdSync(); mdPaint(); }
function resetSeed(){ var i = $('mdSeed'); var s = setSeed(MD_SEED_DEF); if (i) i.value = storedSeed(); return s; }

/* ---------- 外观风格：色彩设置折叠（从「种子色」起收起） ---------- */
function mdFoldSet(open){
  var b = $('mdFoldBtn'), d = $('mdBox');
  if (!b || !d) return;
  d.classList[open ? 'add' : 'remove']('open');
  b.setAttribute('data-open', open ? '1' : '0');
  b.title = open ? '收起色彩设置' : '展开色彩设置';
}
function mdFoldInit(){
  var open = false;
  try { open = localStorage.getItem('nb_mdfold') === '1'; } catch (e) {}
  mdFoldSet(open);
}
function toggleMdFold(){
  var b = $('mdFoldBtn');
  var open = !(b && b.getAttribute('data-open') === '1');
  try { localStorage.setItem('nb_mdfold', open ? '1' : '0'); } catch (e) {}
  mdFoldSet(open);
  if (open && typeof mdPaint === 'function') mdPaint();
}

function buildOnce(el, html){
  if (!el || el.getAttribute('data-built')) return;
  el.innerHTML = html; el.setAttribute('data-built', '1');
}
/* 渲染外观卡片：风格段选、种子色板、方案段选、65 色预览 */
function mdPaint(){
  var seed = storedSeed(), variant = storedVariant(), style = storedStyle();
  var seg = document.querySelectorAll('#styleSeg button');
  for (var i = 0; i < seg.length; i++) seg[i].classList.toggle('on', seg[i].getAttribute('data-s') === style);

  var sr = $('mdSeedRow');
  if (sr) {
    buildOnce(sr, ["#6750A4","#0B57D0","#006A6A","#006E1C","#7A5900","#8B5000","#BA1A1A","#B90063","#7C6CFF","#5F6368"].map(function (c) {
      return '<i data-c="' + c + '" style="background:' + c + '" title="' + c + '"></i>';
    }).join(''));
    var its = sr.querySelectorAll('i');
    for (var j = 0; j < its.length; j++) {
      its[j].classList.toggle('on', normHex(its[j].getAttribute('data-c')) === normHex(seed));
    }
    if (!sr.getAttribute('data-bound')) {
      sr.setAttribute('data-bound', '1');
      sr.addEventListener('click', function (e) {
        var t = e.target;
        if (t && t.tagName === 'I') { var c = t.getAttribute('data-c'); var inp = $('mdSeed'); if (inp) inp.value = c; setSeed(c); }
      });
    }
  }
  var vs = $('mdVarSeg');
  if (vs) {
    buildOnce(vs, MD_VARIANTS.map(function (v) {
      return '<button class="btn sm" data-v="' + v.id + '" onclick="setVariant(\'' + v.id + '\')">' + v.name + '</button>';
    }).join(''));
    var vb = vs.querySelectorAll('button');
    for (var m = 0; m < vb.length; m++) vb[m].classList.toggle('on', vb[m].getAttribute('data-v') === variant);
  }
  var dsc = $('mdVarDesc');
  if (dsc) dsc.textContent = mdVariant(variant).desc;

  var pal = $('mdPal');
  if (pal) {
    buildOnce(pal, ['a1', 'a2', 'a3', 'n1', 'n2'].map(function (row) {
      return '<div class="r"><b>' + MD_PNAME[row] + '</b>' + MD_TONE_LABELS.map(function (L) {
        return '<i data-p="' + row + '" data-l="' + L + '"></i>';
      }).join('') + '</div>';
    }).join(''));
    var T = mdTonal(seed, variant);
    var cells = pal.querySelectorAll('i');
    var srgb = mdHexToRgb(seed), best = null, bestD = 1e9;
    for (var n = 0; n < cells.length; n++) {
      var cp = cells[n].getAttribute('data-p'), cl = cells[n].getAttribute('data-l');
      var hx = T[cp][cl], c = mdHexToRgb(hx);
      cells[n].style.background = hx;
      cells[n].setAttribute('data-hex', hx);
      cells[n].title = MD_PNAME[cp] + ' · ' + cl + ' · ' + hx + '\n单击设为种子色';
      cells[n].classList.remove('on');
      var d = Math.abs(c[0] - srgb[0]) + Math.abs(c[1] - srgb[1]) + Math.abs(c[2] - srgb[2]);
      if (d < bestD) { bestD = d; best = cells[n]; }   /* 种子色在色板中的落点 */
    }
    if (best) best.classList.add('on');
    /* 单击任一色块 → 该色成为新的种子色（与上方预设色板同一套交互） */
    if (!pal.getAttribute('data-bound')) {
      pal.setAttribute('data-bound', '1');
      pal.addEventListener('click', function (e) {
        var t = e.target;
        if (!t || t.tagName !== 'I') return;
        var hx = t.getAttribute('data-hex');
        if (!hx || !mdHexToRgb(hx)) return;
        if (normHex(hx) === normHex(storedSeed())) { toast('已是当前种子色 ' + hx); return; }
        var i = $('mdSeed'); if (i) i.value = hx;
        setSeed(hx);
        toast('种子色已更新 · ' + hx);
      });
    }
  }
  var po = $('mdPalOut');
  if (po) {
    var found = null;
    if (pal) {
      var cs = pal.querySelectorAll('i');
      for (var k = 0; k < cs.length; k++) if (cs[k].classList.contains('on')) { found = cs[k]; break; }
    }
    po.innerHTML = '<i class="chip" style="background:' + seed + '"></i>' +
      '<span class="hx" title="点击复制" onclick="copySeed()">' + seed + '</span>' +
      '<span class="tag">当前种子色' + (found
        ? ' · 落点 ' + MD_PNAME[found.getAttribute('data-p')] + ' · ' + found.getAttribute('data-l')
        : '') + '　单击色块即可改用该色</span>';
  }
  var inp = $('mdSeed');
  if (inp && document.activeElement !== inp) inp.value = seed;
}

/* 复制当前种子色 */
function copySeed(){ copyText(storedSeed()); }

/* ---------- 涟漪（Material 触控反馈） ---------- */
function mdRipple(e){
  if (storedStyle() !== 'material') return;
  if (!e.target || !e.target.closest) return;
  var host = e.target.closest('.btn,.ibtn,.nav-item,.sp span,.pill,.fgrp');
  if (!host) return;
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  var r = host.getBoundingClientRect();
  if (!r.width || !r.height) return;
  var d = Math.max(r.width, r.height) * 2;
  var sp = document.createElement('span');
  sp.className = 'md-rip';
  sp.style.width = sp.style.height = d + 'px';
  sp.style.left = (e.clientX - r.left - d / 2) + 'px';
  sp.style.top = (e.clientY - r.top - d / 2) + 'px';
  host.appendChild(sp);
  setTimeout(function () { if (sp.parentNode) sp.parentNode.removeChild(sp); }, 640);
}

/* ===== 主题 ===== */
function systemIsLight(){ return window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches; }
function storedTheme(){ var t = 'dark'; try { t = localStorage.getItem('tp_theme') || 'dark'; } catch(e) {} return t; }
function resolveTheme(t){ if (t === 'auto') return systemIsLight() ? 'light' : 'dark'; return t; }
function setThemeIcon(t){
  var p = document.getElementById('themeIcon');
  if (!p) return;
  if (t === 'light') p.setAttribute('d', 'M12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10zM12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M19.1 4.9l-1.4 1.4M6.3 17.7l-1.4 1.4');
  else p.setAttribute('d', 'M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z');
}
function applyTheme(){
  var t = resolveTheme(storedTheme());
  document.documentElement.setAttribute('data-theme', t);
  setThemeIcon(t);
  if (typeof mdSync === 'function') mdSync();
}
function setTheme(t){
  try { localStorage.setItem('tp_theme', t); } catch(e) {}
  applyTheme();
  toast(t === 'auto' ? '已切换为跟随系统' : (t === 'light' ? '已切换为日间模式' : '已切换为夜间模式'), 'ok');
}
$('themeBtn').addEventListener('click', function(){
  var cur = storedTheme();
  var next = (cur === 'light') ? 'dark' : 'light';
  setTheme(next);
});
applyTheme();
if (typeof mdFoldInit === 'function') mdFoldInit();

/* ===== 更新检测 ===== */
var topVerText = 'v—';
function legacyCopy(t){
  try {
    var ta = document.createElement('textarea');
    ta.value = t;
    ta.style.cssText = 'position:fixed;left:-9999px;top:0;opacity:0';
    document.body.appendChild(ta);
    ta.select();
    var ok2 = false;
    try { ok2 = document.execCommand('copy'); } catch (e) { ok2 = false; }
    document.body.removeChild(ta);
    return ok2;
  } catch (e) { return false; }
}
function copyClipboard(t){
  return new Promise(function(ok){
    var done = false;
    function finish(v){ if (done) return; done = true; ok(v); }
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        var p = null;
        try { p = navigator.clipboard.writeText(t); } catch (e) { finish(legacyCopy(t)); return; }
        if (p && typeof p.then === 'function') {
          p.then(function(){ finish(true); }, function(){ finish(legacyCopy(t)); });
          setTimeout(function(){ finish(legacyCopy(t)); }, 600); // 剪贴板 API 悬空（无权限等）时回退
        } else { finish(true); }
      } else {
        finish(legacyCopy(t));
      }
    } catch (e) { finish(legacyCopy(t)); }
  });
}
function checkUpdate(){toast("在线源码更新已移除，请手动部署新版本","ok");}

/* ===== 配置加载与回填 ===== */
function loadAll(){
  updateFreeDomainWarn();
  // 面板初始化只调用一次：分离版由前端转发一次、后端处理一次，避免 status/config/quota 三倍 invocation。
  api('bootstrap').then(function(r){
    if (r && r.ok && r.data){
      var b = r.data;
      if (b.status) renderStatus(b.status);
      CFG = b.config || {};
      fillForm();
      renderAll();
      applyMode();
      if (!CFG.mode) showMode();
      makeSub(false);
      setConn(true);
      if (b.quota) renderQuotaData(b.quota);
      else { $('qQuotaSub').textContent = '未配置'; showQuotaState('off', '未配置 Cloudflare API 用量查询'); }
      toast('配置已加载', 'ok');
    } else if (r && r.status === 403) {
      location.reload();
    } else {
      setConn(false);
      toast('无法连接服务器', 'err');
    }
  }).catch(function(){
    setConn(false);
    toast('无法连接服务器', 'err');
  });
}
function setConn(ok){
  var p = $('connPill');
  p.className = 'pill ' + (ok ? '' : 'off');
  $('connText').textContent = ok ? '运行中' : '无法连接';
}
// 免费域名（*.workers.dev / *.pages.dev）大陆直连被阻断：命中即提示绑定自定义域名
function isFreeSubDomain(h){
  return /\.(workers\.dev|pages\.dev)$/i.test(String(h || ''));
}
function updateFreeDomainWarn(){
  var effHost = (CFG && CFG.host) ? String(CFG.host) : location.hostname;
  var wd = isFreeSubDomain(location.hostname) || isFreeSubDomain(effHost);
  // Pages 部署（*.pages.dev）不展示那条 *.workers.dev 横幅：域名与文案不符
  var isPages = /\.pages\.dev$/i.test(String(location.hostname || ''));
  $('wdwarn').style.display = wd && !isPages ? 'block' : 'none';
  $('subHint').textContent = wd
    ? '节点 SNI / 订阅域名使用 *.pages.dev 或 *.workers.dev 免费域名：大陆直连会被阻断——订阅导入与更新需挂梯子，节点测延迟与连接可能全部失败。解决：在 Cloudflare 控制台为本项目绑定自定义域名，再用自定义域名打开面板重新复制订阅链接。'
    : '';
}
function renderStatus(d){
  $('stEntry').textContent = location.origin + '/' + (d.path || d.uuid || '');
  updateFreeDomainWarn();
  var kv = d.kv;
  var kvTxt = kv ? '已绑定（配置持久化）' : '未绑定（配置仅内存）';
  $('stKv').textContent = kvTxt;
  $('stKv').className = 'v ' + (kv ? 'ok' : 'bad');
  $('aKv').textContent = kvTxt;
  $('aKv').className = 'v ' + (kv ? 'ok' : 'bad');
  var v = d.version || '—';
  var kindName = (d.kind === '小说混淆版') ? '小说混淆版' : (d.kind === '混淆版') ? '混淆版' : '家宽共存版';   // 部署形态（明文版 / 混淆版 / 小说混淆版），由后端自检
  $('sideVer').textContent = 'v' + v + ' ' + kindName;
  topVerText = 'v' + v + ' ' + kindName;
  $('aVer').textContent = v + ' ' + kindName;
}
function protoText(){
  if (!CFG) return '—';
  var a = [];
  if (CFG.enable${_d('Vmxlc3M=')} !== false) a.push('${_d(Ds(0x53c))}');
  if (CFG.enable${_d(Ds(0x62f))}) a.push('${_d(Ds(0x62f))}');
  if (CFG.enable${_d(Ds(0x428))}) a.push('${_d(Ds(0x3dd))}');
  return a.length ? a.join(' / ') : '未启用';
}
function renderAll(){
  $('stProto').textContent = protoText();
  renderQuota();
}
function renderQuota(){
  var nl = !!(CFG && CFG.nodeLimit);
  $('qNl').textContent = nl ? '已开启' : '关闭（默认分档上限）';
  $('qNl').className = 'v ' + (nl ? 'ok' : '');
  $('qNlCount').textContent = nl ? (CFG.nodeLimitCount || 150) + ' 节点' : '—';
  var pc = !!(CFG && CFG.cpuLimit);
  $('qCpuLimit').textContent = pc ? '已开启（降载下发，按上限 60% 下发）' : '关闭（按设定数量完整下发）';
  $('qCpuLimit').className = 'v ' + (pc ? 'ok' : '');
  var lb = !!(CFG && CFG.nodeOrder === 'random');
  $('qLb').textContent = lb ? '已开启（随机轮换）' : '关闭（固定顺序）';
  $('qLb').className = 'v ' + (lb ? 'ok' : 'ok');
  // IPv6 下发策略：'full'（旧行为）标黄提醒——v6 备胎会拖慢客户端逐节点测延迟
  var i6 = (CFG && CFG.ipv6Mode) || 'off';
  $('qIp6').textContent = i6 === 'full' ? '等权混合（旧行为）' : (i6 === 'tail' ? '仅备胎（≤10%，排尾部）' : '不下发');
  $('qIp6').className = 'v ' + (i6 === 'full' ? 'warn' : 'ok');
}
function fmtNum(n){
  if (n == null || isNaN(n)) return '—';
  n = Number(n);
  if (n >= 1e6) return (n / 1e6).toFixed(2) + 'M';
  if (n >= 1e3) return (n / 1e3).toFixed(1) + 'k';
  return String(n);
}
function showQuotaState(kind, text){
  $('qQuotaWrap').style.display = (kind === 'data') ? '' : 'none';
  $('qQuotaEmpty').style.display = (kind === 'empty') ? '' : 'none';
  $('qQuotaErr').style.display = (kind === 'err') ? '' : 'none';
  if (kind === 'err') $('qQuotaErrText').textContent = quotaErrText(text);
  if (kind === 'data'){ $('qQuotaEmpty').style.display = 'none'; }
}
function quotaErrText(e){
  var m = String(e || '');
  if (m.indexOf('401') >= 0) return '认证失败（CF API 401）：请检查账户 ID 是否为 32 位十六进制、API 令牌是否有效且勾选 Account Analytics 读取权限';
  if (m.indexOf('403') >= 0) return '无权限（CF API 403）：API 令牌缺少账户 Analytics 读取权限';
  if (m.indexOf('429') >= 0) return 'CF API 限流（429）：已自动退避 15 分钟，期间沿用缓存数据';
  if (m.indexOf('未找到账户') >= 0) return m + '：请核对 dash.cloudflare.com 右侧栏的 32 位账户 ID';
  return m || '用量查询失败';
}
function renderQuotaData(d){
  updDbQuota(d);
  if (!d || !d.configured){
    $('qQuotaSub').textContent = '未配置';
    showQuotaState('empty');
    return;
  }
  if (d.error && !d.stale){
    $('qQuotaSub').textContent = '查询失败';
    showQuotaState('err', d.error);
    return;
  }
  $('qQuotaSub').textContent = d.stale ? '缓存数据' : '已连接';
  showQuotaState('data');
  $('qReq').textContent = fmtNum(d.today.requests) + ' / ' + fmtNum(d.limit);
  var p = d.percent || 0;
  $('qBar').style.width = Math.min(100, p) + '%';
  $('qBar').style.background = p >= 90 ? 'linear-gradient(90deg,var(--err),var(--warn))' : (p >= 60 ? 'linear-gradient(90deg,var(--warn),var(--accent))' : 'linear-gradient(90deg,var(--ok),var(--accent))');
  $('qPct').textContent = p + '%';
  $('qPct').className = 'v ' + (p >= 90 ? 'bad' : (p >= 60 ? '' : 'ok'));
  $('qRemain').textContent = fmtNum(d.remaining != null ? d.remaining : (d.limit - d.today.requests));
  $('qCpu').textContent = (d.today.cpuTime != null) ? (d.today.cpuTime / 1000).toFixed(2) + ' s' : '—';
  $('qSub').textContent = fmtNum(d.today.subrequests);
  $('qAt').textContent = (d.updatedAt ? String(d.updatedAt).replace('T', ' ').replace('Z', '') + ' UTC' : '—') + (d.stale ? '（限流缓存）' : '');
}
function updDbQuota(d){
  if (!d || !d.configured){ $('dbSub').textContent = '未配置监控'; $('dbWrap').style.display = 'none'; return; }
  if (d.error && !d.stale){ $('dbSub').textContent = '查询失败'; $('dbWrap').style.display = 'none'; return; }
  $('dbSub').textContent = d.stale ? '缓存数据' : '已连接';
  $('dbWrap').style.display = '';
  $('dbReq').textContent = fmtNum(d.today.requests) + ' / ' + fmtNum(d.limit);
  var p = d.percent || 0;
  $('dbBar').style.width = Math.min(100, p) + '%';
  $('dbBar').style.background = p >= 90 ? 'linear-gradient(90deg,var(--err),var(--warn))' : (p >= 60 ? 'linear-gradient(90deg,var(--warn),var(--accent))' : 'linear-gradient(90deg,var(--ok),var(--accent))');
  $('dbPct').textContent = p + '%';
  $('dbPct').className = 'v ' + (p >= 90 ? 'bad' : (p >= 60 ? '' : 'ok'));
}
function refreshQuota(){
  $('qQuotaSub').textContent = '查询中…';
  api('quota').then(function(r){
    if (r && r.ok) renderQuotaData(r.data);
    else { $('qQuotaSub').textContent = '查询失败'; showQuotaState('err', (r && r.msg) || '查询失败'); }
  }).catch(function(){ $('qQuotaSub').textContent = '查询失败'; showQuotaState('err', '无法连接服务器'); });
}
function parseIps(t){
  var out = [];
  String(t || '').split(/[\n,;]+/).map(function(s){ return s.trim(); }).filter(Boolean).forEach(function(s){
    var name = '';
    if (s.indexOf('#') >= 0){ var a = s.split('#'); s = a[0]; name = a[1]; }
    var m;
    if ((m = s.match(/^\[([0-9a-fA-F:]+)\](?::(\d+))?$/))){ out.push({ ip: m[1], port: parseInt(m[2]) || 443, name: name }); return; }
    if ((m = s.match(/^(\d+\.\d+\.\d+\.\d+)(?::(\d+))?$/))){ out.push({ ip: m[1], port: parseInt(m[2]) || 443, name: name }); }
  });
  return out;
}
function renderPreferred(){
  if (!CFG) return;
  var lines = [];
  String(CFG.preferredDomains || '').split(/[\n;]+/).map(function(s){ return s.trim(); }).filter(Boolean).forEach(function(s){ lines.push(s); });  // URL 感知：含查询串逗号的 URL 整行保留，不按逗号切碎
  (CFG.preferredIPs || []).forEach(function(x){
    lines.push((String(x.ip).indexOf(':') >= 0 ? '[' + x.ip + ']' : x.ip) + ':' + (x.port || 443) + (x.name ? ('#' + x.name) : ''));
  });
  var seq = Array.isArray(CFG.preferredOrder) ? CFG.preferredOrder : [];
  if (seq.length){
    var pos = Object.create(null);
    seq.forEach(function(h, i){ h = String(h || '').toLowerCase(); if (h && pos[h] === undefined) pos[h] = i; });
    var keyOf = function(x){
      if (x.indexOf('://') >= 0) return null;
      x = x.split('#')[0].trim();
      if (x.charAt(0) === '['){ var e1 = x.indexOf(']'); x = e1 > 0 ? x.slice(1, e1) : x.slice(1); }
      else if (x.indexOf(':') >= 0 && x.indexOf(':') === x.lastIndexOf(':')) x = x.slice(0, x.indexOf(':'));
      return x.replace(/^\*\./, '').toLowerCase();
    };
    var slots = [], items = [];
    lines.forEach(function(x, i){ var k = keyOf(x); if (k !== null && pos[k] !== undefined){ slots.push(i); items.push({ s: x, p: pos[k], i: i }); } });
    items.sort(function(a, b){ return a.p - b.p || a.i - b.i; });
    slots.forEach(function(slot, j){ lines[slot] = items[j].s; });
  }
  $('f-preferred').value = lines.join('\n');
}
function fillPort(pv){
  pv = String(pv == null ? 443 : pv);
  var sel = $('o-port');
  var found = false;
  for (var i = 0; i < sel.options.length; i++){ if (sel.options[i].value === pv){ found = true; break; } }
  if (found){ sel.value = pv; $('o-portC').style.display = 'none'; }
  else { sel.value = 'custom'; $('o-portC').value = pv; $('o-portC').style.display = ''; }
}
function fillForm(){
  if (!CFG) return;
  $('en-${_d(Ds(0x160))}').checked = CFG.enable${_d('Vmxlc3M=')} !== false;
  $('en-${_d(Ds(0x4a8))}').checked = !!CFG.enable${_d(Ds(0x62f))};
  $('tp-pass').value = CFG.${_d(Ds(0x4a8))}Password || '';
  $('en-${_d('eGh0dHA=')}').checked = !!CFG.enable${_d('WGh0dHA=')};
  $('tls-only').checked = !!CFG.tlsOnly;
  $('t-skipcert').checked = !!CFG.skipCertVerify;
  $('${_d(Ds(0x2f8))}').value = CFG.${_d(Ds(0x2f8))} || '';
  $('ech-on').checked = !!CFG.ech;
  $('ech-host').value = CFG.echHost || '';
  $('ech-dns').value = CFG.echDns || '';
  var fl = CFG.filter || {};
  var region = fl.region || 'all';
  var regionArr = Array.isArray(region) ? region : (region === 'all' ? ['all'] : [region]);
  $('fl-region-all').checked = regionArr.indexOf('all') >= 0;
  var nOrd = (CFG.nodeOrder === 'region' || CFG.nodeOrder === 'random') ? CFG.nodeOrder : 'list';
  $('fl-order-list').checked = nOrd === 'list';
  $('fl-order-region').checked = nOrd === 'region';
  $('fl-order-random').checked = nOrd === 'random';
  ['HK', 'TW', 'US', 'SG', 'JP', 'KR', 'DE'].forEach(function(r){ $('fl-region-' + r).checked = regionArr.indexOf(r) >= 0; });
  var ipType = fl.ipType || ['IPv4'];
  $('fl-ip4').checked = ipType.indexOf('IPv4') >= 0;
  $('fl-ip6').checked = ipType.indexOf('IPv6') >= 0;
  var ip6 = CFG.ipv6Mode || 'off';
  $('ip6-off').checked = ip6 !== 'tail' && ip6 !== 'full';
  $('ip6-tail').checked = ip6 === 'tail';
  $('ip6-full').checked = ip6 === 'full';
  var isp = fl.isp || ['移动', '联通', '电信'];
  $('fl-isp-m').checked = isp.indexOf('移动') >= 0;
  $('fl-isp-c').checked = isp.indexOf('联通') >= 0;
  $('fl-isp-t').checked = isp.indexOf('电信') >= 0;
  var src = CFG.src || {};
  $('fl-native').checked = src.native === true;
  $('fl-region-src').checked = src.region == null ? src.prefIp !== false : src.region !== false;
  $('fl-pref-domain').checked = src.prefDomain !== false;
  $('fl-pref-ip').checked = src.prefIp !== false;
  $('fl-custom-pref').checked = src.customPref === true;
  var o = CFG.optimizer || {};
  $('o-source').value = o.source || 'wetest_v4';
  $('o-sourceURL').value = o.sourceURL || '';
  $('o-fbpool').value = o.${_d(Ds(0x553))}Pool || '';
  fillPort(o.port);
  $('o-threads').value = o.threads || 5;
  $('o-count').value = o.count || 20;
  $('o-fill').value = (o.fillCount == null ? 0 : o.fillCount);
  $('o-useCidr').checked = o.useCidr !== false;
  $('o-submode').value = o.subMode || '';
  $('o-subinc').value = (o.subIncludeDefault ? '1' : '0');
  $('o-rand').value = o.subRandomCount == null ? 16 : o.subRandomCount;
  $('q-nl-on').checked = !!CFG.nodeLimit;
  $('q-nl-count').value = CFG.nodeLimitCount || 150;
  $('q-cpu-on').checked = !!CFG.cpuLimit;
  $('q-clabel').value = CFG.countryLabel || '';
  $('q-lb-on').checked = CFG.nodeOrder === 'random';  $('q-auto-on').checked = !!CFG.quotaAuto;
  $('q-strict-on').checked = !!CFG.quotaStrict;
  $('a-subname').value = CFG.subName || 'CFNext';
  HOSTS = Array.isArray(CFG.hosts) ? CFG.hosts.slice() : [];
  renderHosts();
  $('a-uuid').value = CFG.uuid || '';
  $('a-suburl').value = CFG.subUrl || '';
  $('a-admin').value = CFG.admin || '';
  $('a-cfid').value = CFG.cfAccountId || '';
  $('q-tgtoken').value = CFG.tgBotToken || '';
  $('q-tgchat').value = CFG.tgChatID || '';
  $('a-cftoken').value = CFG.cfApiToken || '';
  $('hw-on').checked = !!CFG.homeWan;
  $('hw-cfg').value = CFG.hwCfg || '';
  $('hw-limit').value = CFG.hwLimit || 60;
  setSelV('o-frontlimit', CFG.frontLimit || 60);
  setSelV('o-hwlimit', CFG.hwLimit || 60);
  $('alpn').value = CFG.alpn || '';
  $('s-${_d('cHJveHlJUA==')}').value = CFG.${_d('cHJveHlJUA==')} || '';
  $('s-${_d(Ds(0x466))}').value = CFG.${_d('b3V0Ym91bmQ=')}Proxy || '';
  $('s-outmode').value = CFG.${_d(Ds(0x466))}Mode || '';
  $('s-builtinpx').checked = CFG.useBuiltinProxy !== false;
  $('s-dialto').value = String(CFG.dialTimeout || 1500);
  $('s-racem').value = String(CFG.raceMs == null ? 150 : CFG.raceMs);
  $('s-forcepx').value = CFG.forceProxyDomains || '';
  $('a-mode').value = curMode();
  $('a-front').value = CFG.masqueFront || '';
  $('x-on').checked = !!CFG.${_d(Ds(0x143))}Enable;
  $('x-conf').value = CFG.${_d('bWFzcXVl')}Conf || '';
  $('x-name').value = CFG.${_d(Ds(0x143))}Name || '${_d(Ds(0x1bd))}';
  $('x-eps').value = CFG.${_d(Ds(0x143))}Eps || '';
  renderPreferred();
  bindRegionPills();
  onSubMode(false);
  $('o-customWrap').style.display = ($('o-source').value === 'custom') ? '' : 'none';
  if (typeof updateNlEst === 'function') setTimeout(updateNlEst, 0);
  if (typeof updatePrefCount === 'function') setTimeout(updatePrefCount, 0);
}
// 节点地区多选互斥：勾选具体地区时取消「全部地区」；全部取消时自动恢复「全部地区」（保证筛选非空）
function bindRegionPills(){
  if (window.__regionPillsBound) return;
  window.__regionPillsBound = true;
  var codes = ['HK', 'TW', 'US', 'SG', 'JP', 'KR', 'DE'];
  var all = $('fl-region-all');
  all.addEventListener('change', function(){
    if (all.checked) codes.forEach(function(r){ $('fl-region-' + r).checked = false; });
  });
  codes.forEach(function(c){
    $('fl-region-' + c).addEventListener('change', function(){
      if ($('fl-region-' + c).checked) all.checked = false;
      var any = codes.some(function(r){ return $('fl-region-' + r).checked; });
      if (!any) all.checked = true;
    });
  });
}
function collectForm(){
  if (!CFG) return null;
  var ipLines = [], domLines = [];
  // URL 感知收集：URL（含 ://）整行原样保留（查询串自带逗号不打碎，如 ?region=NL,GB,FI）；
  // 非 URL 行仍支持逗号/分号分隔多条 IP（兼容 "1.2.3.4:443#名, 5.6.7.8" 旧用法）
  String($('f-preferred').value).split(/\n+/).map(function(s){ return s.trim(); }).filter(Boolean).forEach(function(s){
    if (s.indexOf('://') >= 0){ domLines.push(s); return; }
    s.split(/[;,]+/).map(function(x){ return x.trim(); }).filter(Boolean).forEach(function(x){
      if (parseIps(x).length) ipLines.push(x); else domLines.push(x);
    });
  });
  var ips = [], seen = {};
  ipLines.forEach(function(s){
    var p = parseIps(s);
    if (!p.length) return;
    var k = p[0].ip + ':' + (p[0].port || 443);
    if (seen[k]) return;
    seen[k] = 1;
    ips.push(p[0]);
  });
  var orderKeys = [], okSeen = Object.create(null);
  String($('f-preferred').value).split(/\n+/).map(function(s){ return s.trim(); }).filter(Boolean).forEach(function(s){
    if (s.indexOf('://') >= 0) return;
    s.split(/[;,]+/).forEach(function(x){
      x = x.trim().split('#')[0].trim();
      if (!x) return;
      if (x.charAt(0) === '['){ var e1 = x.indexOf(']'); x = e1 > 0 ? x.slice(1, e1) : x.slice(1); }
      else if (x.indexOf(':') >= 0 && x.indexOf(':') === x.lastIndexOf(':')) x = x.slice(0, x.indexOf(':'));
      x = x.replace(/^\*\./, '').toLowerCase();
      if (x && !okSeen[x]){ okSeen[x] = 1; orderKeys.push(x); }
    });
  });
  return {
    mode: $('a-mode').value || '',
    masqueFront: $('a-front').value,
    ${_d(Ds(0x143))}Enable: $('x-on').checked,
    ${_d('bWFzcXVl')}Conf: $('x-conf').value,
    ${_d(Ds(0x143))}Name: $('x-name').value.trim() || '${_d(Ds(0x1bd))}',
    ${_d('bWFzcXVl')}Eps: $('x-eps').value,
    subName: ($('a-subname').value || '').trim(),
    hosts: HOSTS.slice(),
    uuid: $('a-uuid').value.trim(),
    subUrl: $('a-suburl').value.trim(),
    admin: $('a-admin').value,
    ${_d(Ds(0x2f8))}: $('${_d(Ds(0x2f8))}').value,
    ech: $('ech-on').checked,
    echHost: $('ech-host').value.trim() || 'cloudflare-ech.com',
    echDns: $('ech-dns').value.trim(),
    tlsOnly: $('tls-only').checked,
    skipCertVerify: $('t-skipcert').checked,
    nodeLimit: $('q-nl-on').checked,
    nodeLimitCount: parseInt($('q-nl-count').value) || 150,
    cpuLimit: $('q-cpu-on').checked,
    countryLabel: $('q-clabel').value,
    loadBalance: $('fl-order-random').checked,
    nodeOrder: $('fl-order-region').checked ? 'region' : ($('fl-order-random').checked ? 'random' : 'list'),
    preferredOrder: orderKeys,
    ipv6Mode: $('ip6-tail').checked ? 'tail' : ($('ip6-full').checked ? 'full' : 'off'),    cfAccountId: $('a-cfid').value.trim(),
    tgBotToken: $('q-tgtoken').value.trim(),
    tgChatID: $('q-tgchat').value.trim(),
    cfApiToken: $('a-cftoken').value.trim(),
    quotaAuto: $('q-auto-on').checked,
    quotaStrict: $('q-strict-on').checked,
    enable${_d(Ds(0x37c))}: $('en-${_d(Ds(0x160))}').checked,
    enable${_d('VHJvamFu')}: $('en-${_d(Ds(0x4a8))}').checked,
    ${_d(Ds(0x4a8))}Password: $('tp-pass').value,
    enable${_d(Ds(0x428))}: $('en-${_d(Ds(0x40a))}').checked,
    homeWan: $('hw-on').checked,
    hwCfg: $('hw-cfg').value,
    hwLimit: Math.min(120, Math.max(1, parseInt($('hw-limit').value, 10) || 60)),
    frontLimit: Math.min(100, Math.max(1, parseInt($('o-frontlimit').value, 10) || 60)),
    alpn: String($('alpn').value || '').split(',').map(function(x){ return x.trim(); }).filter(function(x){ return /^(h2|h3|http\/1\.1)$/.test(x); }).join(','),
    ${_d('cHJveHlJUA==')}: $('s-${_d(Ds(0x182))}').value.trim(),
    ${_d(Ds(0x466))}Proxy: $('s-${_d(Ds(0x466))}').value.trim(),
    ${_d(Ds(0x466))}Mode: $('s-outmode').value,
    useBuiltinProxy: $('s-builtinpx').checked,
    dialTimeout: parseInt($('s-dialto').value, 10) || 1500,
    raceMs: parseInt($('s-racem').value, 10) || 150,
    forceProxyDomains: $('s-forcepx').value.trim(),
    preferredDomains: domLines.join('\n'),
    preferredIPs: ips,
    optimizer: {
      source: $('o-source').value,
      sourceURL: $('o-sourceURL').value.trim(),
      ${_d(Ds(0x553))}Pool: $('o-fbpool').value.trim(),
      port: parseInt($('o-port').value === 'custom' ? $('o-portC').value : $('o-port').value) || 443,
      threads: parseInt($('o-threads').value) || 5,
      count: parseInt($('o-count').value) || 20,
      fillCount: parseInt($('o-fill').value) || 0,
      useCidr: $('o-useCidr').checked,
      subMode: $('o-submode').value,
      subRandomCount: parseInt($('o-rand').value) || 16,
      subIncludeDefault: $('o-subinc').value === '1'
    },
    filter: {
      region: (function(){
        if ($('fl-region-all').checked) return ['all'];
        var a = [];
        ['HK', 'TW', 'US', 'SG', 'JP', 'KR', 'DE'].forEach(function(r){ if ($('fl-region-' + r).checked) a.push(r); });
        return a.length ? a : ['all'];
      })(),
      ipType: (function(){ var a = []; if ($('fl-ip4').checked) a.push('IPv4'); if ($('fl-ip6').checked) a.push('IPv6'); return a; })(),
      isp: (function(){ var a = []; if ($('fl-isp-m').checked) a.push('移动'); if ($('fl-isp-c').checked) a.push('联通'); if ($('fl-isp-t').checked) a.push('电信'); return a; })()
    },
    src: {
      native: $('fl-native').checked,
      region: $('fl-region-src').checked,
      prefDomain: $('fl-pref-domain').checked,
      prefIp: $('fl-pref-ip').checked,
      customPref: $('fl-custom-pref').checked
    }
  };
}
function saveAll(){
  var _fl = String($('a-front').value || '').split(/[\n\r]+/).filter(function(x){ return x.trim(); }).length;
  if (_fl > 5) { toast('MASQUE 前置节点最多支持 5 个', 'err'); return; }
  if (!CFG){ toast('配置尚未加载', 'err'); return; }
  var alias = $('a-suburl').value.trim().replace(/^\/+/, '').replace(/\/+$/, '').replace(/\/sub$/i, '');
  if (alias && !/^[A-Za-z0-9]{3,64}$/.test(alias)){
    toast('自定义订阅路径至少 3 位，且只能包含大小写字母和数字', 'err');
    $('a-suburl').focus();
    return;
  }
  $('a-suburl').value = alias;
  var body = collectForm();
  var btn = $('saveBtn');
  btn.disabled = true;
  api('config', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) })
    .then(function(r){
      if (r && r.ok){
        CFG = r.data;
        // UUID 即入口路径：改 UUID 会改变入口与订阅地址，需跳转到新入口，否则停留在旧路径会落到欢迎页
        var nEntry = '/' + String((r.data && r.data.path) || '').replace(/^\/+/, '');
        if (nEntry !== '/' && nEntry !== APIPATH){
          toast('入口地址已随 UUID 变更，正在跳转…', 'ok');
          setTimeout(function(){ location.href = nEntry; }, 1200);
          return;
        }
        fillForm();
        renderAll();
        makeSub(false);
        refreshQuota();
        btn.classList.remove('dirty');
        $('savedAt').textContent = '已保存：' + new Date().toLocaleTimeString();
        toast('已保存并生效，正在刷新…', 'ok');
        setTimeout(function(){ location.reload(); }, 800);
      } else toast((r && r.msg) || '保存失败', 'err');
    })
    .catch(function(){ toast('保存失败：无法连接服务器', 'err'); })
    .then(function(){ btn.disabled = false; });
}

${B[Ds(0x165)]()}
${_hwParse[Ds(0x165)]()[Ds(0x344)](Ds(0x18d),Ds(0x265))}
var HW_UPLOAD_PENDING = null;
function hwUploadEntry(text){
  var content = String(text || '').replace(/^\uFEFF/, '').replace(/\r\n?/g, '\n');
  var parsed = B(content), remote = String(parsed.remote || '').trim().split(/\s+/);
  if (!remote[0] || !parsed.ca) throw new Error('配置必须包含 remote 地址和内联 <ca> 证书；不支持仅引用外部证书文件的配置');
  var port = remote[1] == null ? 1194 : Number(remote[1]);
  if (!Number.isInteger(port) || port < 1 || port > 65535) throw new Error('remote 端口无效');
  var bytes = new TextEncoder().encode(content), binary = '';
  for (var i = 0; i < bytes.length; i += 16384) binary += String.fromCharCode.apply(null, bytes.subarray(i, i + 16384));
  var entry = 'XX:' + btoa(binary);
  var nodes = _hwParse(entry);
  if (nodes.length !== 1 || !nodes[0].server) throw new Error('未解析到有效 OpenVPN 配置');
  return { entry: entry, node: nodes[0] };
}
async function hwUploadFile(input){
  var file = input && input.files && input.files[0], button = $('hw-upload-btn');
  if (!file) return;
  if (input) input.value = '';
  if (button && button.disabled) return;
  if (button) button.disabled = true;
  HW_UPLOAD_PENDING = null;
  try {
    if (file.size > 2 * 1024 * 1024) throw new Error('配置文件不能超过 2 MB');
    var imported = hwUploadEntry(await file.text());
    HW_UPLOAD_PENDING = imported;
    if (!$('hw-cfg').value.trim()) hwUploadPut('replace');
    else {
      $('hw-upload-summary').textContent = String(file.name || 'OpenVPN') + '：' + imported.node.server + ':' + imported.node.port + '/' + imported.node.proto;
      $('hw-upload-dialog').showModal();
    }
  } catch (err) {
    HW_UPLOAD_PENDING = null;
    toast('导入失败：' + (err && err.message || err), 'err');
  } finally { if (button) button.disabled = false; }
}
function hwUploadPut(mode){
  var input = $('hw-cfg'), pending = HW_UPLOAD_PENDING;
  if (!input || !pending) return;
  if (mode === 'append' && input.value.trim()) {
    input.value += (/\n$/.test(input.value) ? '' : '\n') + pending.entry;
  } else input.value = pending.entry;
  HW_UPLOAD_PENDING = null;
  markDirty();
  hwCustomApply();
}
function hwUploadChoose(mode){
  var dialog = $('hw-upload-dialog');
  if (mode === 'replace' || mode === 'append') hwUploadPut(mode);
  else HW_UPLOAD_PENDING = null;
  if (dialog && dialog.open) dialog.close();
}
function hwCustomApply(){
  var el = $('hw-cfg'), st = $('hw-cfg-stat');
  if (!el || !st) return;
  var hosts = [], hasCrypto = false;
  String(el.value || '').split(/\n+/).forEach(function(line){
    var s = String(line || '').trim();
    if (!s || s.charAt(0) === '#') return;
    if (/^(ca|cert|key|tls-auth|tls-crypt)\s*[:=]/i.test(s)) { hasCrypto = true; return; }
    if (/^-{3,}/.test(s) || /^[A-Za-z0-9+/=\s]{16,}$/.test(s)) return;
    var m = /^([A-Za-z]{2})\s*[:|]\s*([\s\S]+)$/.exec(s);
    var body = s, code = '';
    if (m) { code = m[1].toUpperCase(); body = m[2].trim(); }
    var b64 = body.replace(/\s+/g, '');
    if (b64.length >= 200 && /^[A-Za-z0-9+/=]+$/.test(b64)) { hosts.push('配置(' + (code || 'XX') + ')'); return; }
    var p = body.split(/[\s:]+/).filter(Boolean);
    if (p.length) hosts.push(p[0] + ':' + (parseInt(p[1], 10) || 1194) + '/' + (/udp/i.test(p[2] || '') ? 'udp' : 'tcp'));
  });
  st.textContent = hosts.length
    ? ('解析到 ' + hosts.length + ' 条：' + hosts.slice(0, 4).join('、') + (hosts.length > 4 ? ' …' : '') + (hasCrypto ? '（含证书块）' : '（无证书块的行会被忽略）'))
    : '未解析到有效条目';
  toast(hosts.length ? ('解析到 ' + hosts.length + ' 条') : '没有解析到条目', hosts.length ? 'ok' : 'err');
}
function resetAll(){
  if (!confirm('确定重置？将清空 KV 中全部面板配置与节点记录，面板还原为初始部署状态。此操作不可恢复！')) return;
  var btn = $('resetBtn');
  btn.disabled = true;
  api('reset', { method: 'POST' })
    .then(function(r){
      if (r && r.ok){ toast(r.msg || '已重置', 'ok'); setTimeout(function(){ location.href = APIPATH; }, 900); }
      else toast((r && r.msg) || '重置失败', 'err');
    })
    .catch(function(){ toast('重置失败：无法连接服务器', 'err'); })
    .then(function(){ btn.disabled = false; });
}
function genUuid(){
  var u = '';
  if (window.crypto && crypto.randomUUID){ u = crypto.randomUUID(); }
  else {
    var tpl = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx';
    u = tpl.replace(/[xy]/g, function(c){
      var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 3 | 8);
      return v.toString(16);
    });
  }
  $('a-uuid').value = u;
  markDirty();
  toast('已生成新 UUID', 'ok');
}
var HOSTS = [];
function curHost(){ return String(location.hostname || '').toLowerCase(); }
function cleanHostsText(t){
  var out = [], seen = {};
  String(t || '').split(/[\n,;、]+/).forEach(function(x){
    x = x.trim().toLowerCase().replace(/^https?:\/\//, '').split('/')[0].split(':')[0];
    if (!x || x.indexOf('.') < 1 || seen[x]) return;
    if (!/^[a-z0-9]([a-z0-9._-]{0,251}[a-z0-9])?$/.test(x)) return;
    seen[x] = 1; out.push(x);
  });
  return out.slice(0, 20);
}
function renderHosts(){
  var el = $('a-hosts');
  el.value = HOSTS.length ? HOSTS.join('、') : curHost();
  el.style.opacity = HOSTS.length ? '' : '.65';
}
function openHosts(){
  $('hm-text').value = (HOSTS.length ? HOSTS : [curHost()]).join('\n');
  $('hm-mask').classList.add('show');
  setTimeout(function(){ try { $('hm-text').focus(); } catch (e) {} }, 60);
}
function closeHosts(){ $('hm-mask').classList.remove('show'); }
function okHosts(){
  var l = cleanHostsText($('hm-text').value);
  HOSTS = (!l.length || (l.length === 1 && l[0] === curHost())) ? [] : l;
  renderHosts(); markDirty(); closeHosts();
}
function subName(){
  var n = String((CFG && CFG.subName) || '').replace(/[\/:*?"<>|\r\n\t]/g, ' ').trim().slice(0, 40);
  return n || __B;
}
// 备份：把当前面板表单值收集成 JSON 下载（与保存配置同一套字段，恢复后可直接保存）
function exportConfig(){
  try {
    var data = collectForm();
    var blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    var a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    var ts = new Date();
    var pad = function(n){ return String(n).padStart(2, '0'); };
    a.download = '${_d(Ds(0x536))}-backup-' + ts.getFullYear() + pad(ts.getMonth()+1) + pad(ts.getDate()) + '-' + pad(ts.getHours()) + pad(ts.getMinutes()) + '.json';
    document.body.appendChild(a); a.click(); document.body.removeChild(a);
    setTimeout(function(){ URL.revokeObjectURL(a.href); }, 1000);
    toast('配置已导出为 JSON', 'ok');
  } catch (e) { toast('导出失败：' + e.message, 'err'); }
}
// 恢复：读取 JSON 填充表单，标记未保存，由用户点「保存全部」写盘
function importConfig(input){
  var file = input.files && input.files[0];
  if (!file) return;
  var reader = new FileReader();
  reader.onload = function(){
    try {
      var data = JSON.parse(reader.result);
      CFG = Object.assign({}, CFG, data);
      fillForm();
      renderAll();
      markDirty();
      toast('配置已导入，请点「保存全部」生效', 'ok');
    } catch (e) { toast('导入失败：JSON 格式不正确', 'err'); }
    input.value = '';
  };
  reader.readAsText(file, 'utf-8');
}
document.querySelectorAll('input,select,textarea').forEach(function(el){
  var id = el.id || '';
  var prefixes = ['f-', 'o-', 'a-', 's-', 'q-', 'e-', 't-', 'fl-', 'en-'];
  for (var i = 0; i < prefixes.length; i++){ if (id.indexOf(prefixes[i]) === 0){ el.addEventListener('change', markDirty); break; } }
});

/* ===== 订阅 ===== */
function subUrlOf(fmt){
  // 自定义订阅路径优先：自动保留当前域名（location.origin），只替换路径段；
  // 用户只填 UUID/别名段（如 AAZ），拼成 https://当前域名/AAZ/sub；留空用 UUID。
  // 填了 /sub 结尾或带前后斜杠时自动归一，格式后缀（${_d('Y2xhc2g=')}/${_d(Ds(0x2c0))} 等）拼为 /sub/<格式>
  var custom = (window.CFG && CFG.subUrl) ? String(CFG.subUrl).trim().replace(/^\/+/, '').replace(/\/+$/, '').replace(/\/sub$/i, '') : '';
  if (custom && !/^[A-Za-z0-9]{3,64}$/.test(custom)) custom = '';
  var canonical = (window.CFG && (CFG.path || CFG.uuid)) ? ('/' + String(CFG.path || CFG.uuid).replace(/^\/+|\/+$/g, '')) : APIPATH;
  var base = custom ? (location.origin + '/' + custom) : (location.origin + canonical);
  var u = base + '/sub';
  return fmt ? (u + '/' + fmt) : u;
}
function makeSub(showQR){
  var fmt = $('subFmt').value;
  var url = subUrlOf(fmt === 'auto' ? '' : fmt);
  $('subUrl').value = url;
  if (showQR) showQRCode(url);
}
$('subFmt').addEventListener('change', function(){ makeSub(false); });
function toggleQR(){
  var w = $('qrWrap');
  if (w.style.display === 'block'){ w.style.display = 'none'; return; }
  showQRCode($('subUrl').value || subUrlOf(''));
}
function showQRCode(url){
  var w = $('qrWrap');
  w.style.display = 'block';
  if (typeof qrcode === 'undefined'){ w.innerHTML = '<div class="hint">二维码库加载失败，请直接复制链接</div>'; return; }
  try {
    var fmt = ($('subFmt') && $('subFmt').value) || 'auto';
    var q = qrcode(0, 'M');
    q.addData(qrPayloadOf(fmt, url));
    q.make();
    w.innerHTML = '<div class="qrbox">' + q.createImgTag(4, 10) + '</div>';
  } catch(e) { w.innerHTML = '<div class="hint">二维码生成失败：' + e.message + '</div>'; }
}
// 二维码内容随订阅格式（客户端）联动：
// ${_d(Ds(0x5af))}/${_d(Ds(0x48b))}、${_d(Ds(0x52a))} → ${_d(Ds(0x3a2))}://install-config（Fly${_d(Ds(0x5af))} / ${_d(Ds(0x5af))} Verge / ${_d(Ds(0x52a))} 扫码装订阅，配置名取订阅响应头 filename=${_d(Ds(0x374))}）
// ${_d('U2luZy1ib3g=')} → ${_d(Ds(0x1dd))}://import-remote-profile?url=...#${_d(Ds(0x374))}（官方 scheme，# 后为配置文件名称）
// ${_d(Ds(0x6a7))} → ${_d(Ds(0x647))}:///install-config（${_d(Ds(0x6a7))} 官方 scheme）
// auto / ${_d(Ds(0x124))}+${_d(Ds(0x283))} / ${_d('TG9vbg==')} / ${_d(Ds(0x6d0))} X / 明文 → 直接使用订阅链接（${_d(Ds(0x283))} / ${_d(Ds(0x575))} / ${_d(Ds(0x1c4))} 扫码识别）
function qrPayloadOf(fmt, url){
  var enc = encodeURIComponent(url);
  if (fmt === '${_d(Ds(0x3a2))}' || fmt === '${_d(Ds(0x42a))}') return '${_d('Y2xhc2g=')}://install-config?url=' + enc;
  if (fmt === '${_d(Ds(0x2c0))}') return '${_d(Ds(0x1dd))}://import-remote-profile?url=' + enc + '#' + encodeURIComponent(subName());
  if (fmt === '${_d('c3VyZ2U=')}') return '${_d(Ds(0x647))}:///install-config?url=' + enc;
  return url;
}
var __B = 'CFN' + 'ext';
function downloadSub(){
  var fmt = $('subFmt').value;
  var url = subUrlOf(fmt === 'auto' ? '' : fmt);
  // 保存名按所选格式给出（内容随管理接口返回，不再依赖响应头里的文件名）
  var names = { ${_d(Ds(0x3a2))}:subName()+'.yaml', ${_d(Ds(0x42a))}:subName()+'.yaml', ${_d('c2luZ2JveA==')}:subName()+'.json', ${_d(Ds(0x647))}:subName()+'.conf', ${_d('c3VyZmJvYXJk')}:subName()+'.conf', ${_d('bG9vbg==')}:subName()+'.conf', ${_d(Ds(0x706))}:subName()+'.conf' };
  var name = names[fmt] || subName() + '.txt';
  var w = $('qrWrap');
  // 兜底出口：脚本触发的保存若被浏览器或内置 WebView 拦下，就给出一个真实链接
  // （用户手势点它一定会走浏览器原生下载，不经过脚本）
  function alt(msg){
    toast(msg, 'err');
    if (!w) return;
    w.style.display = 'block';
    w.innerHTML = '<div class="hint" style="margin-top:0">' + msg + ' 可<a href="' + url + '" download="' + name + '" style="text-decoration:underline">点此直接下载</a>，也可复制订阅链接导入客户端。</div>';
  }
  toast('正在生成 ' + name + ' …', '');
  // 与「预览」共用管理通道：订阅正文随 JSON 一并返回，
  // 不再依赖 /sub 的 Content-Disposition —— 那条响应头在部分托管环境会被改写
  api('sub?fmt=' + encodeURIComponent(fmt === 'auto' ? '' : fmt))
    .then(function(r){
      if (!r || !r.ok) throw new Error((r && r.msg) || '服务端未返回内容');
      var body = r.body || '';
      if (!body) throw new Error('订阅内容为空');
      var bu = URL.createObjectURL(new Blob([body], { type: 'application/octet-stream' }));
      var a = document.createElement('a');
      a.href = bu;
      a.download = name;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      setTimeout(function(){ URL.revokeObjectURL(bu); }, 6e4);
      toast('已保存 ' + name + '（' + Math.max(1, Math.round(body.length / 1024)) + ' KB）', 'ok');
    })
    .catch(function(e){ alt('下载失败：' + ((e && e.message) || e)); });
}
function previewSub(){
  var fmt = $('subFmt').value;
  var box = $('subPrev');
  box.style.display = 'block';
  $('prevType').textContent = '请求中…';
  $('prevCount').textContent = '—';
  $('prevBody').textContent = '';
  api('sub?fmt=' + encodeURIComponent(fmt === 'auto' ? '' : fmt))
    .then(function(r){
      if (!r || !r.ok){ $('prevType').textContent = '预览失败'; $('prevBody').textContent = (r && r.msg) || '未知错误'; return; }
      var body = r.body || '';
      var type = r.type || '';
      $('prevType').textContent = type || '—';
      var n = 0;
      if (/${_d(Ds(0x3a2))}|yaml/i.test(type)) n = (body.match(/- name:/g) || []).length;
      else if (/json/i.test(type)) n = (body.match(/"tag"/g) || []).length;
      else {
        var t = body;
        if (!/^(${_d(Ds(0x160))}|${_d('dHJvamFu')}|ss|${_d('eGh0dHA=')}):\/\//m.test(t)) {
          try { t = atob(t); } catch (e) { /* 保持原样 */ }
        }
        n = t.split('\n').filter(function(l){ return /^(${_d(Ds(0x160))}|${_d(Ds(0x4a8))}|ss|${_d('eGh0dHA=')}):\/\//.test(l.trim()); }).length;
      }
      $('prevCount').textContent = n + ' 个节点';
      $('prevBody').textContent = body.length > 2600 ? body.slice(0, 2600) + '\n…（已截断，完整内容请下载）' : body;
    })
    .catch(function(){ $('prevType').textContent = '预览失败：无法连接服务器'; $('prevBody').textContent = ''; });
}

/* ===== 优选配置 ===== */
function onPortSel(){
  var sel = $('o-port');
  var c = $('o-portC');
  c.style.display = sel.value === 'custom' ? '' : 'none';
}
function updateSourceState(){
  var m = $('o-submode').value;
  var inc = $('o-subinc').value === '1';
  var enabled = (m === '' || inc);
  ['fl-native','fl-region-src','fl-pref-domain','fl-pref-ip'].forEach(function(id){
    var el = $(id); if (!el) return;
    el.disabled = !enabled;
    var lab = el.closest('label'); if (lab) lab.style.opacity = enabled ? '' : '.45';
  });
}
function onSubMode(_force){
  var m = $('o-submode').value;
  $('sm-custom').style.display = (m === 'custom') ? '' : 'none';
  $('sm-random').style.display = (m === 'random') ? '' : 'none';
  // 「追加内置优选池与默认地区源」仅在自定义订阅 / 随机优选模式下可选；
  // 订阅模式关闭（使用面板默认节点池）时强制为关闭并禁用，避免默认模式下误开追加导致行为不符
  if (m === '') {
    $('o-subinc').value = '0';
    $('o-subinc').disabled = true;
  } else {
    $('o-subinc').disabled = false;
  }
  // 订阅模式与仪表盘「地址来源」胶囊互斥同步（三态全部明确跟随）：
  // custom → 自定义优选开、随机优选关；random → 随机优选开、自定义优选关；关闭 → 两个胶囊都关
  if (m === 'custom') {
    $('fl-custom-pref').checked = true;
    $('fl-random-pref').checked = false;
  } else if (m === 'random') {
    $('fl-custom-pref').checked = false;
    $('fl-random-pref').checked = true;
  } else {
    $('fl-custom-pref').checked = false;
    $('fl-random-pref').checked = false;
  }
  // 仅在用户主动切换模式时联动一次排序；页面加载(true=false)不覆盖已保存的选择
  if (_force !== false) {
    if (m === 'custom') { $('fl-order-list').checked = true; $('q-lb-on').checked = false; }
    else { $('fl-order-random').checked = true; $('q-lb-on').checked = true; }
  }
  updateSourceState();
}
function setSelV(id, v){
  var el = $(id); if (!el) return;
  v = String(v == null ? '' : v);
  var found = false;
  for (var i = 0; i < el.options.length; i++){ if (el.options[i].value === v){ found = true; break; } }
  if (!found && v){
    var o = document.createElement('option');
    o.value = v; o.textContent = v + '（自定义）';
    el.appendChild(o);
  }
  el.value = v;
}
function updatePrefCount(){
  var el = $('f-preferred'), out = $('prefCount');
  if (!el || !out) return;
  var n = String(el.value || '').split(/\r?\n/).filter(function(x){ return x.trim(); }).length;
  out.textContent = '当前已输入 ' + n + ' 条';
  var capEl = $('q-nl-count'), onEl = $('q-nl-on');
  var cap = parseInt(capEl && capEl.value, 10) || 150;
  var on = !!(onEl && onEl.checked);
  out.style.color = (on && n > cap) ? 'var(--err)' : 'var(--accent)';
}
function updateNlEst(){
  var el = $('nl-est'); if (!el) return;
  var on = $('q-nl-on') && $('q-nl-on').checked;
  var cnt = parseInt(($('q-nl-count') || {}).value, 10) || 150;
  cnt = Math.min(Math.max(cnt, 1), 1000);
  var cpu = $('q-cpu-on') && $('q-cpu-on').checked;
  var base = on ? (cpu ? Math.max(10, Math.floor(cnt * 0.6)) : cnt) : null;
  var hwOn = ($('hw-on') && $('hw-on').checked) || ($('a-mode') && $('a-mode').value === 'home');
  var hwN = hwOn ? Math.min(120, Math.max(1, parseInt(($('hw-limit') || {}).value, 10) || 60)) : 0;
  var workerTxt = base === null ? '未限制' : (base + ' 个 Worker' + (cpu ? '（已按 60% 折算）' : ''));
  var total = base === null ? '未限制' : (String(base + hwN + 1) + ' 条');
  el.textContent = '当前估算：' + workerTxt + (hwN ? ' + ' + hwN + ' 个家宽' : '') + ' + 1 个额度节点 ≈ ' + total;
}
(function(){
  (function(){ var el = $('f-preferred'); if (el){ el.addEventListener('input', updatePrefCount); el.addEventListener('change', updatePrefCount); } })();
['q-nl-on','q-nl-count','q-cpu-on','hw-limit','hw-on','a-mode'].forEach(function(id){
    var e = $(id); if (!e) return;
    e.addEventListener('input', updateNlEst);
    e.addEventListener('change', updateNlEst);
  });
})();
function syncHwLimit(v){ var e = $('hw-limit'); if (e) e.value = v; }
// 家宽模式里的数量输入与优选配置里的下拉互相同步
(function(){
  var inp = $('hw-limit');
  if (inp) inp.addEventListener('change', function(){
    var v = String(this.value || ''), sel = $('o-hwlimit');
    if (sel && ['10','30','60','100'].indexOf(v) >= 0) sel.value = v;
  });
})();
// 仪表盘「地址来源 → 自定义优选」与优选配置「订阅模式」联动：
// 勾选 → 订阅模式切为「自定义订阅（支持汇聚）」并关闭随机优选；取消 → 订阅模式关闭（使用面板默认节点池）
$('fl-custom-pref').addEventListener('change', function(){
  if (this.checked) {
    $('fl-random-pref').checked = false;   // 与随机优选互斥
    $('o-submode').value = 'custom';
  } else {
    if ($('o-submode').value === 'custom') $('o-submode').value = '';
  }
  onSubMode();
});
// 仪表盘「地址来源 → 随机优选」与优选配置「订阅模式 → 随机优选模式（官方接口）」联动：
// 勾选 → 订阅模式切为 random 并关闭自定义优选；取消 → 订阅模式关闭（若当前为 random）
$('fl-random-pref').addEventListener('change', function(){
  if (this.checked) {
    $('fl-custom-pref').checked = false;   // 与自定义优选互斥
    $('o-submode').value = 'random';
  } else {
    if ($('o-submode').value === 'random') $('o-submode').value = '';
  }
  onSubMode();
});
// 「节点排序」与「负载均衡（打乱下发顺序）」开关联动：随机排序 = 负载均衡开启
['list', 'region', 'random'].forEach(function(k){
  $('fl-order-' + k).addEventListener('change', function(){ $('q-lb-on').checked = $('fl-order-random').checked; });
});
$('q-lb-on').addEventListener('change', function(){
  if (this.checked) $('fl-order-random').checked = true;
  else if ($('fl-order-random').checked) $('fl-order-list').checked = true;
});
$('o-source').addEventListener('change', function(){
  $('o-customWrap').style.display = ($('o-source').value === 'custom') ? '' : 'none';
});
function pingIp(ip, port, timeout){
  var t0 = Date.now();
  var addr = ip.indexOf(':') >= 0 ? '[' + ip + ']' : ip;
  var proto = (port === 80 || port === 8080 || port === 8880 || port === 2052 || port === 2082 || port === 2086 || port === 2095) ? 'http' : 'https';
  var ctrl = new AbortController();
  var timer = setTimeout(function(){ ctrl.abort(); }, timeout);
  return fetch(proto + '://' + addr + ':' + port + '/', { mode: 'no-cors', cache: 'no-store', redirect: 'manual', signal: ctrl.signal })
    .then(function(){ clearTimeout(timer); return { ok: true, latency: Date.now() - t0 }; })
    .catch(function(){
      clearTimeout(timer);
      var ms = Date.now() - t0;
      if (proto === 'http' && ms < 100) return pingHttps(ip, port, timeout);
      return { ok: ms < timeout, latency: ms };
    });
}
function pingHttps(ip, port, timeout){
  var t0 = Date.now();
  var addr = ip.indexOf(':') >= 0 ? '[' + ip + ']' : ip;
  var ctrl = new AbortController();
  var timer = setTimeout(function(){ ctrl.abort(); }, timeout);
  return fetch('https://' + addr + ':' + port + '/', { mode: 'no-cors', cache: 'no-store', redirect: 'manual', signal: ctrl.signal })
    .then(function(){ clearTimeout(timer); return { ok: true, latency: Date.now() - t0 }; })
    .catch(function(){ clearTimeout(timer); var ms = Date.now() - t0; return { ok: ms < timeout, latency: ms }; });
}
function localTest(cands, threads, timeout){
  var results = [], idx = 0, pending = 0;
  return new Promise(function(resolve){
    function next(){
      while (pending < threads && idx < cands.length) {
        (function(c){
          pending++;
          pingIp(c.ip, c.port, timeout).then(function(r){
            pending--;
            results.push({ ip: c.ip, port: c.port, name: c.name || '', ok: r.ok, latency: r.latency });
            if (results.length === cands.length) resolve(results);
            else next();
          });
        })(cands[idx++]);
      }
    }
    next();
  });
}
function runPick(){
  if (!CFG){ toast('配置尚未加载', 'err'); return; }
  var o = collectForm().optimizer;
  showMsg('oMsg', '正在拉取候选 IP…', 'info');
  api('candidates', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(o) })
    .then(function(r){
      if (!r || !r.ok){ showMsg('oMsg', (r && r.msg) || '拉取失败', 'err'); return; }
      var cands = r.data || [];
      if (!cands.length){ showMsg('oMsg', (r && r.msg) || '没有可测的 IP，请换一个数据源', 'err'); return; }
      var st = r.stats || {};
      var parts = [];
      if (st.preset) parts.push('预设源 ' + st.preset + ' 条');
      if (st.presetErr) parts.push('预设源失败(' + st.presetErr + ')');
      if (st.custom) parts.push('自定义源 ' + st.custom + ' 条');
      if (st.customErr) parts.push('自定义源失败(' + st.customErr + ')');
      if (st.cidr) parts.push('CF 补足 ' + st.cidr + ' 条');
      // 候选数量截断：自定义 URL 源可能拉取上千条候选（第三方优选 IP 文档动辄上千条），全量测速耗时过长；
      // 按「候选数量」只测前 N 条（可调高数值测更多），测速列表与「全部加入最优」均基于该子集
      var candSub = (o.count > 0 && cands.length > o.count) ? cands.slice(0, o.count) : cands;
      showMsg('oMsg', '拉取 ' + cands.length + ' 条（' + (parts.join('，') || '无') + '），本地测速前 ' + candSub.length + ' 条…', 'info');
      localTest(candSub, o.threads || 5, 3000).then(function(results){
        results.sort(function(a, b){ return (a.latency < 0 ? 1e9 : a.latency) - (b.latency < 0 ? 1e9 : b.latency); });
        renderResults(results);
        var okc = results.filter(function(x){ return x.ok; }).length;
        showMsg('oMsg', '测速完成：' + okc + '/' + results.length + ' 可用（本地 → 目标）', okc ? 'ok' : 'err');
      });
    })
    .catch(function(){ showMsg('oMsg', '拉取失败：无法连接服务器', 'err'); });
}
function renderResults(list){
  var seen = {};
  var dedup = [];
  (list || []).forEach(function(r){
    if (seen[r.ip]) return;
    seen[r.ip] = 1;
    dedup.push(r);
  });
  LAST = dedup;
  var tb = $('oTableBody');
  tb.innerHTML = '';
  if (!LAST.length){ tb.innerHTML = '<tr><td colspan="4" style="text-align:center;color:var(--faint)">没有可用结果</td></tr>'; return; }
  LAST.forEach(function(r, i){
    var tr = document.createElement('tr');
    var ok = r.ok;
    var lag = ok ? (r.latency + 'ms') : '超时';
    var badge = '<span class="badge ' + (ok ? 'g' : 'r') + '">' + (ok ? '可用' : '超时') + '</span>';
    var btn = ok ? '<button class="btn sm primary" onclick="useIp(' + i + ')">加入优选</button>' : '<span style="color:var(--faint)">—</span>';
    tr.innerHTML = '<td class="ip">' + r.ip + ':' + r.port + '</td><td>' + lag + '</td><td>' + badge + '</td><td>' + btn + '</td>';
    tb.appendChild(tr);
  });
}
function useIp(i){
  var r = LAST[i];
  if (!r) return;
  var ta = $('f-preferred');
  var line = r.ip + ':' + r.port + (r.name ? ('#' + r.name) : '');
  var exists = false;
  String(ta.value || '').split(/[\n,;]+/).forEach(function(s){
    var p = parseIps(s);
    if (p.length && p[0].ip === r.ip) exists = true;
  });
  if (exists){ toast('该 IP 已在优选列表中', 'warn'); return; }
  var s = ta.value.trim();
  ta.value = s ? (s + '\n' + line) : line;
  markDirty();
  toast('已加入优选列表，点击「保存全部」下发', 'ok');
}
function addAllBest(){
  var n = parseInt($('o-count').value) || 20;
  var seen = {};
  var list = [];
  LAST.filter(function(r){ return r.ok; }).forEach(function(r){
    if (seen[r.ip] || list.length >= n) return;
    seen[r.ip] = 1;
    list.push(r);
  });
  if (!list.length){ toast('没有可用结果', 'err'); return; }
  var arr = [];
  // 保留原节点名：防地区信息丢失导致订阅无国家显示；无名条目才编「优选N」
  list.forEach(function(r, i){ arr.push(r.ip + ':' + r.port + (r.name ? ('#' + r.name) : ('#优选' + (i + 1)))); });
  $('f-preferred').value = arr.join('\n');
  markDirty();
  toast('已加入最快的 ' + list.length + ' 个优选 IP，点击「保存全部」下发', 'ok');
}
function fetchDomains(){
  api('domains').then(function(r){
    if (r && r.ok && r.data && r.data.length){ $('f-preferred').value = r.data.join('\n'); markDirty(); toast('已拉取优选域名', 'ok'); }
    else toast((r && r.msg) || '拉取失败', 'err');
  }).catch(function(){ toast('拉取失败：无法连接服务器', 'err'); });
}

/* ===== 启动 ===== */
buildNav();
var initView = 'dashboard';
try {
  var qv = new URLSearchParams(location.search).get('v');
  if (qv && TITLES[qv]) initView = qv;
} catch(e) {}
switchView(initView);
loadAll();

/* 液态玻璃：高光跟随指针 */
var GLASS_EL=null,GLASS_EV=null,GLASS_RAF=0;
function glassTick(){GLASS_RAF=0;if(!GLASS_EL||!GLASS_EV)return;var r=GLASS_EL.getBoundingClientRect();if(!r.width||!r.height)return;GLASS_EL.style.setProperty('--mx',((GLASS_EV.clientX-r.left)/r.width*100).toFixed(1)+'%');GLASS_EL.style.setProperty('--my',((GLASS_EV.clientY-r.top)/r.height*100).toFixed(1)+'%');}
function bindGlass(){if(window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;if (typeof mdPaint === 'function') mdPaint();
document.addEventListener('pointerdown', function(e){ if (typeof mdRipple === 'function') mdRipple(e); }, true);
/* 鼠标跟随高光已按用户要求移除（原 pointermove → glassTick 沿光标刷新卡片高光） */
document.addEventListener('pointerleave',function(){GLASS_EL=null;});}
bindGlass();
</script>
</body>
</html>

`;function pn(H){const qp=V,W='/'+String(H||'')[qp(0x344)](/^\/+/,'')[qp(0x344)](/\/+$/,''),n=Xe[qp(0x1c9)](qp(0x5e2)),G=n<0x0?-0x1:Xe['indexOf'](';',n),a=n>=0x0&&G>n?Xe[qp(0x14f)](0x0,n)+qp(0x2a1)+JSON[qp(0x251)](W)+Xe['slice'](G):Xe;return new Response(a,{'status':0xc8,'headers':{'Content-Type':qp(0x31b),'Cache-Control':'no-store,\x20no-cache,\x20must-revalidate','Pragma':qp(0x390)}});}function Ye(H,W){const qC=V;return!H[qC(0x6a1)]&&!H['adminInit']&&!(!W['K']||qC(0x4bf)!=typeof W['K'][qC(0x30b)]);}function Ck(H){const qw=V;return F(String(H&&H[qw(0x137)]||'')+qw(0x5be))[qw(0x14f)](0x0,0xc);}function Qe(H){const qQ=V;return(H||'')[qQ(0x154)]()[qQ(0x3bc)](qQ(0x30c));}function Ze(H,W){const qv=V;return!!Qe(W)&&(!!(H[qv(0x72f)]['get'](qv(0x186))||'')[qv(0x154)]()['includes'](qv(0x4bc))||qv(0x246)===(H[qv(0x72f)][qv(0x30b)]('Sec-Fetch-Dest')||'')[qv(0x154)]()||!!H[qv(0x72f)]['get'](qv(0x121)));}async function tn(H,W){const qV=V;if(!W['admin'])return!0x0;if(!W[qV(0x73c)])return!0x1;const G=(H[qV(0x72f)][qV(0x30b)](qV(0x36b))||'')[qV(0x499)](new RegExp(qV(0x377)+__AC+'=([^;]+)'));return!(!G||G[0x1]!==String(W[qV(0x73c)]));}const en=new Map(),nn={'sub':{'cap':0x1e,'burst':0xa,'refillMs':0xea60},'panel':{'cap':0x3c,'burst':0x14,'refillMs':0xea60}};function rn(H,W){const qx=V,G=nn[W];if(!G)return!0x0;const J=H[qx(0x72f)][qx(0x30b)](qx(0x21d)+_d(qx(0x5eb))+'ing-IP')||H[qx(0x72f)][qx(0x30b)]('X-Real-IP')||'';if(!J)return!0x0;const e0=Date[qx(0x549)]();en['size']>0x7d0&&en[qx(0x2a9)]();const e1=W+'|'+J;let e2=en[qx(0x30b)](e1);e2||(e2={'tokens':G[qx(0x4f2)],'t':e0},en['set'](e1,e2));const e3=Math[qx(0x5d3)]((e0-e2['t'])/G[qx(0x645)]);return e3>0x0&&(e2[qx(0x32b)]=Math['min'](G['cap'],e2[qx(0x32b)]+e3*G[qx(0xdc)]),e2['t']=e2['t']+e3*G[qx(0x645)]),!(e2[qx(0x32b)]<=0x0||(e2[qx(0x32b)]--,0x0));}function an(){return NF();}function _gt(H,W,n,G,a){const ql=V;try{const o=String(W&&W[ql(0x3a6)]||W&&W[ql(0x546)]||'')[ql(0x1df)]();if(!o)return!0x0;if(H[ql(0x72f)]['get'](ql(0x444))===o||H['headers']['get'](ql(0x49e))===o)return!0x0;if('crules'===n[0x0])return!0x0;if('websocket'===G)return!0x0;if(ql(0x174)===H[ql(0x2ed)]&&a&&a[ql(0x758)])return!0x0;return!0x1;}catch(J){return!0x0;}}function _uq(H){try{return decodeURIComponent(H);}catch(W){return H;}}const _WH=Ds(0x1d0);function _W(){const qh=V;return new Response(_WH,{'status':0xc8,'headers':{'Content-Type':qh(0x31b),'Cache-Control':qh(0x34e),'Pragma':qh(0x390)}});}function NF(){const qT=V,H=Be&&(Be[qT(0x6db)]||'');return'1101'===H?_M1():'522'===H?_M5():qT(0x114)===H||'0'===H?new Response(qT(0x668),{'status':0x194}):_W();}function _EM(){const qF=V;try{return NF();}catch(H){return new Response(qF(0x760),{'status':0x1f7,'headers':{'Content-Type':qF(0x279),'Cache-Control':qF(0x526)}});}}function _H(){const qf=V;try{return new URL(_rq[qf(0x49f)])[qf(0x234)];}catch(H){return qf(0x187);}}function _M1(){const qK=V,H=_H(),W=new Date(),n=function(J){const qg=V;return String(J)[qg(0x4ea)](0x2,'0');},G=W[qK(0x119)]()+'-'+n(W[qK(0x2f4)]()+0x1)+'-'+n(W[qK(0x63c)]())+'\x20'+n(W[qK(0x591)]())+':'+n(W[qK(0x3e7)]())+':'+n(W[qK(0x1a2)]()),a=Array[qK(0x4c2)](crypto[qK(0x18f)](new Uint8Array(0x8)),function(J){const qH=V;return J[qH(0x165)](0x10)[qH(0x4ea)](0x2,'0');})['join'](''),o=_rq&&_rq['headers']['get'](qK(0x21d)+_d(qK(0x5eb))+qK(0xc6))||'';return new Response(qK(0x75a)+H+qK(0x673)+a+'\x20&bull;\x20'+G+qK(0x5fb)+H+qK(0x3de)+a+qK(0x72e)+o+qK(0x64e),{'status':0x1f4,'headers':{'Content-Type':'text/html;\x20charset=UTF-8','Cache-Control':'no-store,\x20no-cache,\x20must-revalidate','Pragma':'no-cache'}});}function _M5(){const qE=V,H=_H(),W=new Date(),n=function(J){const qd=V;return String(J)[qd(0x4ea)](0x2,'0');},G=W['getUTCFullYear']()+'-'+n(W[qE(0x2f4)]()+0x1)+'-'+n(W[qE(0x63c)]())+'\x20'+n(W[qE(0x591)]())+':'+n(W[qE(0x3e7)]())+':'+n(W[qE(0x1a2)]()),a=Array[qE(0x4c2)](crypto[qE(0x18f)](new Uint8Array(0x8)),function(J){const qM=V;return J[qM(0x165)](0x10)[qM(0x4ea)](0x2,'0');})[qE(0x5da)](''),o=_rq&&_rq[qE(0x72f)][qE(0x30b)](qE(0x21d)+_d('Q29ubmVjdA==')+'ing-IP')||'';return new Response(qE(0x250)+H+qE(0x4b6)+_d(qE(0x5eb))+qE(0x155)+a+qE(0x4d2)+G+qE(0x1b5)+_d(qE(0x5eb))+qE(0x1a3)+H+qE(0x6ea)+_d(qE(0x209))+qE(0x2bc)+a+'</strong></p><p>Your\x20IP:\x20'+o+qE(0x64e),{'status':0x20a,'headers':{'Content-Type':qE(0x620),'Cache-Control':qE(0x34e),'Pragma':qE(0x390)}});}export default{'fetch':async(H,W,n)=>async function(G,J){const qI=V;Be=J,_rq=G;const e0=new URL(G[qI(0x49f)]),e1=G[qI(0x72f)][qI(0x30b)](qI(0x32d))||'',e2=(G['headers']['get'](qI(0x317))||'')[qI(0x154)]();if(qI(0x1f9)===e0['protocol'])return Response[qI(0x2ee)](e0[qI(0x6e0)][qI(0x344)](qI(0x140),qI(0x221)),0x12d);const e3=await lt(J);delete e3[qI(0x711)];if(e3[qI(0x69a)])return it({'ok':!0x1,'msg':e3[qI(0x69a)]},0x1f4);const e4=e3[qI(0x347)]||e3[qI(0x137)],e5=String(e3[qI(0x2ab)]||e3['admin']||'')[qI(0x344)](/^\/+|\/+$/g,''),e6=e0[qI(0x17c)][qI(0x344)](/^\/+|\/+$/g,'')[qI(0x59c)]('/');if(!_gt(G,J,e6,e2,e3))return an();if(qI(0x459)===e6[0x0]&&0x3===e6[qI(0x1c8)]&&e6[0x1]===Ck(e3))return async function(e9,eD){const qW=V,eX=String(eD||'')[qW(0x344)](/\.(mrs|yaml|yml|txt|list)$/i,''),em=l[eX];if(!em)return it({'ok':!0x1,'msg':qW(0x171)},0x194);const eP=Date['now'](),eb=c[qW(0x30b)](eX);if(eb&&eP-eb['t']<0x36ee80)return d(eb[qW(0x4ec)],em['ct']);try{const er=await _cacheRead('crule:'+eX,qW(0x4d9));if(er&&er[qW(0x181)])return c[qW(0x598)](eX,{'t':eP,'buf':er}),d(er,em['ct']);}catch(ep){}let eq=p[qW(0x30b)](eX);if(!eq){eq=((async()=>{const qy=V,ew=_crUrls(em),eQ=[];let ev=null;for(const eV of ew){try{const ex=await oe(eV,{'headers':{'User-Agent':__B+'/'+VERSION,'Accept':qy(0x1ba)}},0x2710);if(!ex||!ex['ok']){eQ[qy(0x3b4)](eV+qy(0x1a0)+(ex&&ex['status']||qy(0x34a)));continue;}const el=await ex['arrayBuffer'](),eh=Ht(el);if(!el||!el[qy(0x181)]||/yaml/i['test'](em['ct'])&&!/^\s*(?:#.*\n)*payload\s*:/m['test'](eh)){eQ[qy(0x3b4)](eV+qy(0x1bb));continue;}ev=el;break;}catch(eT){eQ['push'](eV+'\x20'+(eT&&eT[qy(0x3f0)]||qy(0x34a)));}}if(!ev)throw new Error(_d(qy(0x5bf))+qy(0x586)+eQ[qy(0x5da)](';\x20'));return _cacheWrite(qy(0x726)+eX,ev,em['ct'],0x15180,e9&&e9[qy(0x6e8)]),(c[qy(0x598)](eX,{'t':Date[qy(0x549)](),'buf':ev}),ev);})()),p[qW(0x598)](eX,eq);const eC=()=>p[qW(0x1ce)](eX);eq[qW(0x273)](eC,eC);}try{return d(await eq,em['ct']);}catch(ew){return new Response(qW(0x561)+_d(qW(0x5bf))+qW(0x522)+(ew[qW(0x3f0)]||ew),{'status':0x1f6,'headers':{'Retry-After':qW(0x579)}});}}(J,_uq(e6[0x2]));if(e5&&(e6[0x0]===e5||_uq(e6[0x0])===e5)||qI(0x2ab)===e6[0x0]&&!e5){const e9=!e3['admin'];if(qI(0x174)===G['method']){const eD=await G[qI(0x1a7)](),eX=new URLSearchParams(eD);if(e9){const em=String(eX[qI(0x30b)](qI(0x346))||'');if(em[qI(0x1c8)]<0x4)return it({'ok':!0x1,'msg':qI(0x21f)},0x190);const eP=JSON[qI(0x651)](JSON[qI(0x251)](e3));if(eP[qI(0x6a1)]=em,eP[qI(0x44e)]=!0x0,eP[qI(0x73c)]=_sessionToken(),J['U']||(eP[qI(0x137)]=genUUID()),J['D']||J['PATH']||(eP[qI(0x347)]=eP[qI(0x137)]),!await ct(J,eP))return it({'ok':!0x1,'msg':qI(0x50d)},0x1f4);const eb=eP['adminSession'];return new Response(JSON[qI(0x251)]({'ok':!0x0,'next':eX['get'](qI(0x213))||'/'+e5}),{'status':0xc8,'headers':{'Content-Type':qI(0x148),'Set-Cookie':__AC+'='+eb+qI(0x22e)}});}if(e3[qI(0x6a1)]&&eX[qI(0x30b)](qI(0x346))===e3['admin']){let eq=String(e3[qI(0x73c)]||'');if(!eq){eq=_sessionToken();const er=Object['assign']({},e3,{'adminSession':eq});if(!J['K']||'function'!=typeof J['K'][qI(0x25d)]||!await ct(J,er))return it({'ok':!0x1,'msg':'会话创建失败：请确认已绑定\x20KV\x20命名空间'},0x1f4);}return new Response(JSON['stringify']({'ok':!0x0,'next':eX['get'](qI(0x213))||'/'+e5}),{'status':0xc8,'headers':{'Content-Type':qI(0x148),'Set-Cookie':__AC+'='+eq+qI(0x22e)}});}return it({'ok':!0x1,'msg':qI(0x4c0)},0x193);}if(e3[qI(0x6a1)]&&await tn(G,e3))return pn(e4);return e3[qI(0x6a1)]?new Response(qI(0x5e6),{'status':0xc8,'headers':{'Content-Type':qI(0x31b),'Cache-Control':qI(0x34e),'Pragma':qI(0x390)}}):e9?new Response('\x0a<!DOCTYPE\x20html>\x0a<html\x20lang=\x22zh-CN\x22\x20data-theme=\x22dark\x22>\x0a<head>\x0a<meta\x20charset=\x22utf-8\x22>\x0a<meta\x20name=\x22viewport\x22\x20content=\x22width=device-width,\x20initial-scale=1\x22>\x0a<title>初始化</title>\x0a<link\x20rel=\x22icon\x22\x20href=\x22data:image/svg+xml,%3Csvg\x20xmlns=\x27http://www.w3.org/2000/svg\x27\x20viewBox=\x270\x200\x2024\x2024\x27%3E%3Crect\x20x=\x273\x27\x20y=\x273\x27\x20width=\x2718\x27\x20height=\x2718\x27\x20rx=\x275\x27\x20fill=\x27%23f6821f\x27/%3E%3Cpath\x20d=\x27M8\x2015V9l8\x206V9\x27\x20stroke=\x27%230d131b\x27\x20stroke-width=\x272\x27\x20fill=\x27none\x27\x20stroke-linecap=\x27round\x27\x20stroke-linejoin=\x27round\x27/%3E%3C/svg%3E\x22>\x0a<style>\x0a*{box-sizing:border-box;margin:0;padding:0}\x0a:root{--bg:#0d1117;--card:#151d29;--border:#25303f;--text:#e9eef7;--dim:#93a3b8;--accent:#7c6cff;--accent2:#22d3ee;--accent-dim:rgba(124,108,255,.16);--err:#f87171;--err-dim:rgba(248,113,113,.13);--glass:rgba(255,255,255,.06);--glass-brd:rgba(255,255,255,.10);--hi:rgba(255,255,255,.10)}\x0a[data-theme=\x22light\x22]{--bg:#eef1f7;--card:#ffffff;--border:#dde4ee;--text:#1b2634;--dim:#5d6b7d;--accent:#6a58f5;--accent2:#0891b2;--accent-dim:rgba(106,88,245,.12);--err:#d94848;--err-dim:rgba(217,72,72,.10);--glass:rgba(255,255,255,.55);--glass-brd:rgba(255,255,255,.75);--hi:rgba(255,255,255,.85)}\x0abody{background:var(--bg);color:var(--text);font-family:\x22PingFang\x20SC\x22,\x22Microsoft\x20YaHei\x22,\x22Segoe\x20UI\x22,system-ui,sans-serif;display:flex;align-items:center;justify-content:center;min-height:100vh;padding:20px;position:relative}\x0abody::before,body::after{content:\x22\x22;position:fixed;border-radius:50%;filter:blur(90px);pointer-events:none;z-index:0}\x0abody::before{width:480px;height:480px;left:-140px;top:-160px;background:rgba(124,108,255,.16)}\x0abody::after{width:420px;height:420px;right:-120px;bottom:-140px;background:rgba(34,211,238,.10)}\x0a.box{position:relative;z-index:1;width:340px;max-width:100%;background:rgba(21,29,41,.72);border:1px\x20solid\x20var(--glass-brd);border-radius:20px;padding:30px\x2028px;box-shadow:0\x2024px\x2060px\x20rgba(0,0,0,.35),inset\x200\x201px\x200\x20var(--hi);-webkit-backdrop-filter:blur(18px);backdrop-filter:blur(18px)}\x0a[data-theme=\x22light\x22]\x20.box{background:rgba(255,255,255,.66);border-color:rgba(30,45,70,.08);box-shadow:0\x2016px\x2044px\x20rgba(30,45,70,.12),inset\x200\x201px\x200\x20var(--hi)}\x0a.brand{display:flex;align-items:center;gap:10px;margin-bottom:22px}\x0a.mark{width:38px;height:38px;border-radius:12px;background:linear-gradient(135deg,var(--accent),var(--accent2));display:flex;align-items:center;justify-content:center;box-shadow:0\x208px\x2020px\x20var(--accent-dim),inset\x200\x201px\x200\x20var(--hi)}\x0a.mark\x20svg{width:20px;height:20px}\x0a.mark\x20path{stroke:#fff}\x0a.brand\x20.bt{display:flex;flex-direction:column;line-height:1.25}\x0a.brand\x20.bt\x20b{font-size:16px}\x0a.brand\x20.bt\x20span{font-size:11.5px;color:var(--dim)}\x0ah1{font-size:15px;margin-bottom:4px}\x0ap{color:var(--dim);font-size:13px;margin-bottom:18px}\x0ainput{width:100%;background:var(--glass);border:1px\x20solid\x20var(--glass-brd);color:var(--text);border-radius:12px;padding:11px\x2013px;font-size:14px;outline:none;margin-bottom:12px;font-family:inherit;box-shadow:inset\x200\x201px\x200\x20var(--hi);transition:border-color\x20.15s,box-shadow\x20.15s}\x0ainput:focus{border-color:var(--accent);box-shadow:inset\x200\x201px\x200\x20var(--hi),0\x200\x200\x203px\x20var(--accent-dim)}\x0abutton{width:100%;background:linear-gradient(135deg,rgba(124,108,255,.85),rgba(34,211,238,.75));border:1px\x20solid\x20rgba(255,255,255,.22);color:#fff;border-radius:12px;padding:11px;font-size:14px;font-weight:600;cursor:pointer;font-family:inherit;-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);box-shadow:inset\x200\x201px\x200\x20rgba(255,255,255,.38),0\x208px\x2022px\x20var(--accent-dim);transition:transform\x20.15s,filter\x20.15s,box-shadow\x20.15s}\x0abutton:hover{filter:brightness(1.08);box-shadow:inset\x200\x201px\x200\x20var(--hi),0\x2010px\x2026px\x20var(--accent-dim)}\x0abutton:active{transform:translateY(1px)}\x0abutton:disabled{opacity:.6;cursor:not-allowed}\x0a.msg{color:var(--err);font-size:13px;margin-bottom:12px;display:none;background:var(--err-dim);padding:8px\x2012px;border-radius:8px}\x0a.foot{margin-top:16px;text-align:center;font-size:11.5px;color:var(--dim)}\x0a</style>\x0a</head>\x0a<body>\x0a<div\x20class=\x22box\x22>\x0a\x20\x20<div\x20class=\x22brand\x22>\x0a\x20\x20\x20\x20<div\x20class=\x22mark\x22><svg\x20viewBox=\x220\x200\x2024\x2024\x22\x20fill=\x22none\x22\x20stroke-width=\x222\x22\x20stroke-linecap=\x22round\x22\x20stroke-linejoin=\x22round\x22><path\x20d=\x22M4\x2012h4l3-7\x204\x2014\x203-7h2\x22/></svg></div>\x0a\x20\x20\x20\x20<div\x20class=\x22bt\x22><b>CF&#78;ext\x20控制台</b></div>\x0a\x20\x20</div>\x0a\x20\x20<h1>设置管理密码</h1>\x0a\x20\x20<p>部署后首次访问请设置管理密码。设置后访问面板需登录。</p>\x0a\x20\x20<div\x20class=\x22msg\x22\x20id=\x22msg\x22>设置失败，请重试</div>\x0a\x20\x20<form\x20id=\x22form\x22>\x0a\x20\x20\x20\x20<input\x20type=\x22password\x22\x20id=\x22pwd\x22\x20placeholder=\x22设置管理密码（至少\x204\x20位）\x22\x20autofocus\x20autocomplete=\x22new-password\x22>\x0a\x20\x20\x20\x20<input\x20type=\x22password\x22\x20id=\x22pwd2\x22\x20placeholder=\x22确认管理密码\x22\x20autocomplete=\x22new-password\x22>\x0a\x20\x20\x20\x20<button\x20type=\x22submit\x22\x20id=\x22btn\x22>设置并进入面板</button>\x0a\x20\x20</form>\x0a\x20\x20<div\x20class=\x22foot\x22>密码保存在\x20Cloudflare\x20KV\x20中，之后可在「面板设置」中修改</div>\x0a</div>\x0a<script>\x0a(function(){\x0a\x20\x20var\x20t\x20=\x20\x27dark\x27;\x0a\x20\x20try\x20{\x20t\x20=\x20localStorage.getItem(\x27tp_theme\x27)\x20||\x20\x27dark\x27;\x20}\x20catch(e)\x20{}\x0a\x20\x20var\x20resolved\x20=\x20t\x20===\x20\x27auto\x27\x0a\x20\x20\x20\x20?\x20(window.matchMedia\x20&&\x20matchMedia(\x27(prefers-color-scheme:\x20light)\x27).matches\x20?\x20\x27light\x27\x20:\x20\x27dark\x27)\x0a\x20\x20\x20\x20:\x20t;\x0a\x20\x20document.documentElement.setAttribute(\x27data-theme\x27,\x20resolved);\x0a\x20\x20var\x20next\x20=\x20new\x20URLSearchParams(location.search).get(\x27next\x27)\x20||\x20location.pathname;\x0a\x20\x20document.getElementById(\x27form\x27).addEventListener(\x27submit\x27,\x20function(e){\x0a\x20\x20\x20\x20e.preventDefault();\x0a\x20\x20\x20\x20var\x20p1\x20=\x20document.getElementById(\x27pwd\x27).value,\x20p2\x20=\x20document.getElementById(\x27pwd2\x27).value;\x0a\x20\x20\x20\x20var\x20msg\x20=\x20document.getElementById(\x27msg\x27);\x0a\x20\x20\x20\x20var\x20btn\x20=\x20document.getElementById(\x27btn\x27);\x0a\x20\x20\x20\x20if\x20(p1.length\x20<\x204)\x20{\x20msg.textContent\x20=\x20\x27密码至少\x204\x20位\x27;\x20msg.style.display\x20=\x20\x27block\x27;\x20return;\x20}\x0a\x20\x20\x20\x20if\x20(p1\x20!==\x20p2)\x20{\x20msg.textContent\x20=\x20\x27两次输入的密码不一致\x27;\x20msg.style.display\x20=\x20\x27block\x27;\x20return;\x20}\x0a\x20\x20\x20\x20btn.disabled\x20=\x20true;\x20msg.style.display\x20=\x20\x27none\x27;\x0a\x20\x20\x20\x20fetch(location.pathname,\x20{\x20method:\x20\x27POST\x27,\x20headers:\x20{\x20\x27Content-Type\x27:\x20\x27application/x-www-form-urlencoded\x27\x20},\x20body:\x20\x27setup=1&password=\x27\x20+\x20encodeURIComponent(p1)\x20+\x20\x27&next=\x27\x20+\x20encodeURIComponent(next)\x20})\x0a\x20\x20\x20\x20\x20\x20.then(function(r){\x20return\x20r.json();\x20})\x0a\x20\x20\x20\x20\x20\x20.then(function(r){\x0a\x20\x20\x20\x20\x20\x20\x20\x20if\x20(r\x20&&\x20r.ok){\x20location.href\x20=\x20r.next\x20||\x20\x27/\x27;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20else\x20{\x20msg.textContent\x20=\x20(r\x20&&\x20r.msg)\x20||\x20\x27设置失败，请重试\x27;\x20msg.style.display\x20=\x20\x27block\x27;\x20btn.disabled\x20=\x20false;\x20}\x0a\x20\x20\x20\x20\x20\x20})\x0a\x20\x20\x20\x20\x20\x20.catch(function(){\x20msg.textContent\x20=\x20\x27网络错误，请重试\x27;\x20msg.style.display\x20=\x20\x27block\x27;\x20btn.disabled\x20=\x20false;\x20});\x0a\x20\x20});\x0a})();\x0a</script>\x0a</body>\x0a</html>\x0a\x0a',{'status':0xc8,'headers':{'Content-Type':'text/html;\x20charset=utf-8','Cache-Control':qI(0x34e),'Pragma':qI(0x390)}}):an();}const e7=(ep=>/^[A-Za-z0-9]{3,64}$/[qI(0x6b1)](ep)?ep:'')(String(e3[qI(0x417)]||'')[qI(0x1df)]()[qI(0x344)](/^\/+/,'')['replace'](/\/+$/,'')[qI(0x344)](/\/sub$/i,'')),e8=e6[0x0]===e4||!!e7&&e6[0x0]===e7;if(''===e6[0x0])return an();if(e8&&0x1===e6['length']){if(qI(0x70b)===e2)return Gt(G,e3);if(qI(0x174)===G[qI(0x2ed)]&&e3[qI(0x758)])try{return await async function(ep,eC){const qR=V,ew=ep['body'][qR(0x770)](),eQ=await ew[qR(0x732)]();if(eQ[qR(0x59e)])return new Response(qR(0xc1),{'status':0x190});const ev=bt(eQ['value']);if(!eC['homeWan']&&_blockedPublicTarget(ev[qR(0x4d0)]))throw new Error(qR(0x665));if(!eC['homeWan']&&[0x19,0x1d1,0x24b,0x9dd][qR(0x3bc)](ev['port']))throw new Error(qR(0x4fe));const eV=await Bt(ev,eC,ep['cf']&&ep['cf'][qR(0x743)],0x0,jt(eQ[qR(0x162)]['subarray'](ev['headerLength']))),ex=eV['writable'][qR(0x567)]();await ex[qR(0x763)](eQ[qR(0x162)][qR(0x304)](ev['headerLength'])),((async()=>{const qn=V;try{for(;;){const {done:eh,value:eT}=await ew[qn(0x732)]();if(eh)break;await ex[qn(0x763)](eT);}}catch(eF){}try{await ex[qn(0x753)]();}catch(ef){}})());const el=new ReadableStream({async 'start'(eh){const qG=V;eh[qG(0x365)](new Uint8Array([0x0,0x0])),eV[qG(0x73b)]&&eV[qG(0x73b)][qG(0x181)]>0x0&&eh[qG(0x365)](eV[qG(0x73b)]);const eT=eV[qG(0x127)][qG(0x770)]();try{for(;;){const {done:eF,value:ef}=await eT[qG(0x732)]();if(eF)break;eh[qG(0x365)](ef);}}catch(eg){}try{eh[qG(0x753)]();}catch(eK){}try{eV[qG(0x753)]();}catch(eH){}},'cancel'(){const qc=V;try{eV[qc(0x753)]();}catch(eh){}}});return new Response(el,{'status':0xc8,'headers':{'content-type':qR(0x518),'x-accel-buffering':'no','cache-control':qR(0x526)}});}(G,e3);}catch(ep){return it({'ok':!0x1,'msg':_d(qI(0x40a))+qI(0x57d)+(ep['message']||ep)},0x1f4);}}if(e8&&qI(0x666)===e6[0x1]){if(!rn(G,qI(0x666)))return an();const eC=e6[qI(0x1c8)]>=0x3?e6[0x2]:'';try{if(J[qI(0x6e8)]&&'function'==typeof J[qI(0x6e8)][qI(0x358)])J[qI(0x6e8)]['waitUntil'](mt(J,e3));else try{await mt(J,e3);}catch(eh){}if(e3[qI(0x49d)])return new Response(__B+qI(0x3ab),{'status':0x193,'headers':{'Content-Type':qI(0x279)}});if(e3[qI(0x332)])try{const eT=await gt(J,e3);if(eT&&eT[qI(0x38d)]&&qI(0x30a)==typeof eT['percent']&&eT[qI(0x28e)]>0x5f)return new Response(__B+qI(0x2fe)+eT[qI(0x28e)]+qI(0x624),{'status':0x193,'headers':{'Content-Type':qI(0x279)}});}catch(eF){}const ew=e3;if(e3[qI(0x3fc)])try{const ef=await gt(J,e3);if(ef[qI(0x38d)]&&ef['today']&&ef[qI(0x382)][qI(0x470)]>=Math[qI(0x248)](0xea60)){const eg=ef[qI(0x382)][qI(0x470)]/ef[qI(0x2b1)],eK=Math[qI(0x60a)](0.1,(0x1-eg)/0.4);ew[qI(0x64d)]=Math[qI(0x60a)](0x14,Math[qI(0x248)](0x3e8*eK));}}catch(eH){}const eQ=await(async function(){const qs=V,ed=e3[qs(0x13b)]||[],eE=(function(){const qa=V;try{let eG=0x811c9dc5;const ec=JSON['stringify'](e3);for(let es=0x0;es<ec[qa(0x1c8)];es++)eG=Math[qa(0x296)](eG^ec[qa(0x74f)](es),0x1000193);return(eG>>>0x0)['toString'](0x24);}catch(ea){return'0';}}()),eM=Math[qs(0x60a)](0x3c,Math[qs(0x6b7)](0xe10,Number(e3[qs(0x59d)])||0x12c))*0x3e8,eI=[e3[qs(0x137)],G[qs(0x49f)],eC,e1,ed['length'],ed[0x0]&&ed[0x0]['ip']||'',e3[qs(0x70c)],e3[qs(0x596)]?0x1:0x0,e3[qs(0x292)]?0x1:0x0,e3[qs(0x758)]?0x1:0x0,e3[qs(0x21b)]&&e3[qs(0x21b)][qs(0x65b)]||'',e3[qs(0x234)]||'',e3[qs(0x259)]?0x1:0x0,!0x1===e3['hwCoexist']?0x0:0x1,e3[qs(0x64d)]||0x0,String(e3['mode']||''),e3[qs(0x1b4)]?0x1:0x0,(e3[qs(0x46e)]||'')[qs(0x1c8)],eE][qs(0x5da)]('|'),eW=Date[qs(0x549)](),ey=_SUBC[qs(0x30b)](eI);if(ey&&eW-ey['t']<eM)return ey['r'];const eR=await Je(ew,G[qs(0x49f)],eC,e1,G['cf']&&G['cf'][qs(0x743)],G['cf']&&G['cf']['country'],J);return _SUBC[qs(0x43e)]>=0x20&&(function(){let eG=null,ec=0x1/0x0;for(const [es,ea]of _SUBC)ea['t']<ec&&(ec=ea['t'],eG=es);eG&&_SUBC['delete'](eG);}()),_SUBC['set'](eI,{'r':eR,'t':eW}),eR;}()),ev=_subName(e3),eV={[_d(qI(0x3a2))]:ev+qI(0x5e8),[_d(qI(0x42a))]:ev+qI(0x5e8),[_d(qI(0x2c0))]:ev+qI(0x41f),[_d(qI(0x647))]:ev+qI(0x373),[_d(qI(0x52d))]:ev+qI(0x373),[_d(qI(0x692))]:ev+qI(0x373),[_d(qI(0x706))]:ev+qI(0x373)}[eC]||ev,ex=await _subUserinfo(J,e3),el={'Content-Type':eQ[qI(0x462)]+qI(0x6c7),'Cache-Control':qI(0x526),'Content-Disposition':_cdName(eV,ev)};return ex&&(el[qI(0x130)]=ex,el['Profile-Update-Interval']='1'),new Response(eQ[qI(0x6cd)],{'status':0xc8,'headers':el});}catch(ed){return new Response(qI(0x746)+(ed&&ed['message']||ed),{'status':0x1f4,'headers':{'Content-Type':qI(0x279)}});}}if(e8&&0x1===e6['length']&&Ze(G,e1))return rn(G,qI(0x604))?await tn(G,e3)?pn(e4):an():an();if(e8&&qI(0xca)===e6[0x1]){if(!rn(G,qI(0x604)))return an();const eE=e6[0x2]||'';if(Ye(e3,J))return Ze(G,e1)||G[qI(0x72f)]['get']('Cookie')?it({'ok':!0x1,'status':0x193,'msg':qI(0x6de)},0x193):NF();if(!await tn(G,e3))return Ze(G,e1)||G['headers'][qI(0x30b)]('Cookie')?it({'ok':!0x1,'status':0x193,'msg':qI(0xf0)},0x193):NF();if(qI(0x206)===eE){if(qI(0x5fa)===G[qI(0x2ed)]){const eM=Object[qI(0x534)]({},e3,{'version':VERSION});return delete eM[qI(0x73c)],it({'ok':!0x0,'data':eM});}if(qI(0x174)===G[qI(0x2ed)])try{const eI=await G['json']();if(Object['prototype'][qI(0x2da)]['call'](eI,qI(0x417))){const ea=String(eI[qI(0x417)]||'')[qI(0x1df)]()[qI(0x344)](/^\/+/,'')[qI(0x344)](/\/+$/,'')['replace'](/\/sub$/i,'');if(ea&&!/^[A-Za-z0-9]{3,64}$/['test'](ea))return it({'ok':!0x1,'msg':qI(0x25e)},0x190);eI[qI(0x417)]=ea;}let eW=!0x1;if(J['K']&&qI(0x4bf)==typeof J['K']['get'])try{const eU=await J['K'][qI(0x30b)](qI(0x206)),ej=eU?await _cfgOpen(J,eU):null;ej&&void 0x0!==ej[qI(0x3fc)]&&(eW=!0x0);}catch(ek){}const ey=Object['assign'](JSON[qI(0x651)](JSON['stringify'](e3)),eI);let eR=!0x1;Object['prototype'][qI(0x2da)][qI(0x627)](eI,qI(0x4ac))&&(ey['hosts']=_cleanHosts(eI[qI(0x4ac)])),Object[qI(0x2bd)][qI(0x2da)]['call'](eI,qI(0x75c))&&(ey['subName']=_subName({'subName':eI[qI(0x75c)]})),(Object[qI(0x2bd)]['hasOwnProperty'][qI(0x627)](eI,qI(0x6a1))&&String(eI[qI(0x6a1)])!==String(e3[qI(0x6a1)])&&(ey[qI(0x73c)]=_sessionToken(),eR=!0x0),qI(0x6d3)===String(ey[qI(0x2ec)]||'')['toLowerCase']()?ey[qI(0x259)]=!0x0:ey[qI(0x259)]=!0x1,eW||!0x1!==ey[qI(0x3fc)]||Boolean(ey[qI(0x685)]&&ey[qI(0x4a9)]||J[qI(0x58f)]&&J[qI(0x27a)])&&(ey[qI(0x3fc)]=!0x0),eI['optimizer']&&qI(0x485)==typeof eI[qI(0x21b)]&&(ey[qI(0x21b)]=Object[qI(0x534)](ey['optimizer'],eI[qI(0x21b)])),eI[qI(0x13b)]&&Array[qI(0x636)](eI[qI(0x13b)])&&(ey['preferredIPs']=eI['preferredIPs']),delete ey[qI(0x711)],await ct(J,ey));const eG=await lt(J,G[qI(0x49f)]),ec=Object[qI(0x534)]({},eG,{'version':VERSION});delete ec[qI(0x73c)];const es=it({'ok':!0x0,'data':ec,'msg':qI(0x49c)});return eR&&ey[qI(0x73c)]&&es['headers'][qI(0x5ff)](qI(0x26f),__AC+'='+ey[qI(0x73c)]+qI(0x22e)),es;}catch(ez){return it({'ok':!0x1,'msg':'保存失败:\x20'+(ez['message']||ez)},0x1f4);}}if(qI(0x6ac)===eE){if(qI(0x174)!==G['method'])return it({'ok':!0x1,'msg':qI(0x4f6)},0x195);try{if(!J['K']||qI(0x4bf)!=typeof J['K'][qI(0x1ce)])return it({'ok':!0x1,'msg':qI(0x641)},0x190);await J['K'][qI(0x1ce)](qI(0x206));const eu=__AC+qI(0x503);return new Response(JSON[qI(0x251)]({'ok':!0x0,'msg':qI(0x31e)}),{'status':0xc8,'headers':{'Content-Type':qI(0x148),'Set-Cookie':eu}});}catch(eo){return it({'ok':!0x1,'msg':qI(0x67e)+(eo[qI(0x3f0)]||eo)},0x1f4);}}if('bootstrap'===eE&&qI(0x5fa)===G[qI(0x2ed)]){let eY=null;try{eY=await gt(J,e3);}catch(eJ){}return it({'ok':!0x0,'data':{'config':Object[qI(0x534)]({},e3,{'version':VERSION}),'status':{'version':VERSION,'kind':qI(0x58d)===e()?qI(0x4a4):'obfuscated'===e()?qI(0x241):qI(0x1e0),'host':e0[qI(0x46f)],'path':e4,'region':G['cf']&&G['cf']['colo']||'unknown','visitorCountry':G['cf']&&G['cf'][qI(0x5dd)]||'','usageColo':G['cf']&&G['cf']['colo']||'','kv':!(!J['K']||qI(0x4bf)!=typeof J['K'][qI(0x30b)]),'workersDev':/\.workers\.dev$/i[qI(0x6b1)](e0['hostname']),'adminEnv':!!(J[qI(0x437)]||J[qI(0x6a1)])},'quota':eY}});};if(qI(0x5fd)===eE)return it({'ok':!0x0,'data':{'version':VERSION,'kind':'novel'===e()?qI(0x4a4):qI(0x388)===e()?qI(0x241):qI(0x1e0),'host':e0[qI(0x46f)],'path':e4,'region':G['cf']&&G['cf']['colo']||qI(0x541),'visitorCountry':G['cf']&&G['cf'][qI(0x5dd)]||'','usageColo':G['cf']&&G['cf'][qI(0x743)]||'','kv':!(!J['K']||qI(0x4bf)!=typeof J['K'][qI(0x30b)]),'workersDev':/\.workers\.dev$/i[qI(0x6b1)](e0[qI(0x46f)]),'adminEnv':!!(J[qI(0x437)]||J[qI(0x6a1)])}});if('update'===eE)return it({'ok':!0x1,'msg':'在线源码更新已移除，请手动部署新版本'},0x19a);if('quota'===eE)try{return it({'ok':!0x0,'data':await gt(J,e3)});}catch(eS){return it({'ok':!0x1,'msg':qI(0x54e)+(eS[qI(0x3f0)]||eS)},0x1f4);}if(qI(0x666)===eE){const ei=e0[qI(0x3d3)][qI(0x30b)](qI(0x709))||'';try{const eB=await Je(e3,G[qI(0x49f)],ei,e1,G['cf']&&G['cf'][qI(0x743)],G['cf']&&G['cf'][qI(0x5dd)],J);return it({'ok':!0x0,'type':eB[qI(0x462)],'body':eB[qI(0x6cd)]});}catch(eO){return it({'ok':!0x1,'msg':qI(0x746)+(eO[qI(0x3f0)]||eO)},0x1f4);}}if(qI(0x50a)===eE){if(qI(0x174)!==G[qI(0x2ed)])return it({'ok':!0x1,'msg':qI(0x4f6)},0x195);try{const eN=await G[qI(0x103)]()[qI(0x2eb)](()=>({})),eZ=await Jt(Object[qI(0x534)]({},e3[qI(0x21b)],eN));if(!eZ[qI(0x50a)][qI(0x1c8)]){const eL=eZ[qI(0x345)]||{},eA=[eL['presetErr']&&qI(0x77f)+eL[qI(0x51b)],eL['customErr']&&qI(0x271)+eL[qI(0x189)]]['filter'](Boolean)[qI(0x5da)]('；');return it({'ok':!0x1,'msg':qI(0x34c)+(eA?'（'+eA+'）':qI(0x572))},0x190);}return it({'ok':!0x0,'data':eZ[qI(0x50a)],'stats':eZ[qI(0x345)]});}catch(D0){return it({'ok':!0x1,'msg':qI(0x269)+(D0[qI(0x3f0)]||D0)},0x1f4);}}if(qI(0x714)===eE||qI(0x6f3)===eE)return it({'ok':!0x1,'msg':qI(0x44a)},0x19a);if(qI(0x70e)===eE)try{const D1=N[e0[qI(0x3d3)][qI(0x30b)](qI(0x700))||qI(0x328)]||N['wetest_cname'],D2=await fetch(D1[qI(0x49f)],{'headers':{'User-Agent':qI(0x57f)},'signal':AbortSignal[qI(0x64a)](0x1770)});return D2['ok']?it({'ok':!0x0,'data':function(D3){const qU=V,D4=new Set(),D5=[],D6=/(?:\*\.)?(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z]{2,}/gi;let D7;for(;D7=D6[qU(0x13c)](D3);){const D8=D7[0x0][qU(0x154)]();!D4[qU(0x1cf)](D8)&&(D8[qU(0x3bc)](qU(0xce))||D8[qU(0x3bc)](_d(qU(0x1bc)))||D8[qU(0x3bc)](qU(0x607))||D8[qU(0x3bc)](_d('MDkwMjI3'))||D8[qU(0x326)](qU(0x3d8))||D8['endsWith'](qU(0x3e5)))&&(D4[qU(0x4c4)](D8),D5[qU(0x3b4)](D8));}return D5[qU(0x14f)](0x0,0xa);}(await D2['text']())}):it({'ok':!0x1,'msg':'拉取失败\x20HTTP\x20'+D2['status']});}catch(D3){return it({'ok':!0x1,'msg':qI(0x269)+(D3[qI(0x3f0)]||D3)},0x1f4);}}return NF();}(H,Object[Ds(0x534)]({},W,{'_ctx':n}))[Ds(0x2eb)](_EM),'scheduled':async(H,W,G)=>{const qj=V;try{const a=await lt(W);(a[qj(0x337)]&&a[qj(0x128)]||a[qj(0x3fc)]||a[qj(0x332)])&&await mt(W,a);}catch(o){}}};