"""Rebuild data.csv from the Eurostat API (table isoc_eb_ai).
Usage: python3 build.py [out.csv]   (stdlib only)"""
import json, csv, sys, itertools, urllib.request, datetime
GEOS=['FR','EU27_2020','DE','IT','ES','NL','DK']
URL='https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/isoc_eb_ai?format=JSON&lang=EN&'+'&'.join('geo='+g for g in GEOS)
d=json.load(urllib.request.urlopen(URL, timeout=60))
out=sys.argv[1] if len(sys.argv)>1 else 'data.csv'
TODAY=datetime.date.today().isoformat()
UPDATED=d.get('updated','')[:10]
dims=d['id']; dim=d['dimension']
cats=[[c for c,_ in sorted(dim[k]['category']['index'].items(), key=lambda x:x[1])] for k in dims]
lab=lambda k,c: dim[k]['category']['label'][c]
def category(code):
    c=code.replace('E_AI_','')
    if code.startswith(('E_AIX','E_DI3')) or '_CC' in code or code.endswith('_DA') or code=='E_AI_EC': return 'context'
    if c=='TANY': return 'any_ai'
    return {'T':'technology','P':'purpose','A':'sourcing','B':'barrier'}.get(c[0],'context')
KEEP_SIZE={'GE10','10-49','50-249','GE250'}
def keep_unit(cat,u):
    if u=='PC_ENT': return True
    if cat in('technology','purpose','sourcing'): return u=='PC_ENT_AI_TANY'
    if cat=='barrier': return u in('PC_ENT_AI_EC','PC_ENT_AI_TX')
    return False
FL={'b':'break in time series','u':'low reliability','c':'confidential','e':'estimated','p':'provisional'}
rows=[]
for idx, combo in enumerate(itertools.product(*cats)):
    r=dict(zip(dims,combo)); s=str(idx)
    v=d['value'].get(s); flag=d.get('status',{}).get(s,'')
    if v is None and not flag: continue
    cat=category(r['indic_is'])
    if r['size_emp'] not in KEEP_SIZE or not keep_unit(cat,r['unit']): continue
    note=FL.get(flag,'')
    if v is None: note=(note+'; ' if note else '')+'value not published by Eurostat'
    rows.append([r['geo'],lab('geo',r['geo']),r['time'],r['size_emp'],lab('size_emp',r['size_emp']),
      r['indic_is'],lab('indic_is',r['indic_is']),cat,r['unit'],'' if v is None else v,flag,
      'Eurostat, isoc_eb_ai (updated '+UPDATED+')','https://ec.europa.eu/eurostat/databrowser/view/isoc_eb_ai/default/table',TODAY,note])
order={'any_ai':0,'purpose':1,'technology':2,'barrier':3,'sourcing':4,'context':5}
rows.sort(key=lambda x:(order[x[7]],x[5],x[8],x[3],x[0],x[2]))
with open(out,'w',newline='') as f:
    w=csv.writer(f); w.writerow(['geo','geo_label','year','size_class','size_label','indicator_code','indicator_label','category','unit','value_pct','flag','source_name','source_url','last_checked','notes']); w.writerows(rows)
print(len(rows))
