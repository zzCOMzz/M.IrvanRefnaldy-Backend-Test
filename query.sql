select m.id, m.name, p.status as Pendidikan_Terakhir, m.time_create, p.time_create as time_update from pendidikan as p
inner join murid as m
on m.id = p.id_murid
group by m.id asc;