create table res_cat_rel(
res_id int references restaurant(id),
cat_id int references res_category(id),
primary key(res_id,cat_id));

SELECT r.name, rc.cat_name
FROM restaurant r
INNER JOIN (
    SELECT rcat.cat_name, rel.res_id
    FROM res_category rcat
    INNER JOIN res_cat_rel rel ON rcat.id = rel.cat_id
) rc ON r.id = rc.res_id;


SELECT name,cat_name,res_id,cat_id
FROM restaurant r
INNER JOIN (
    SELECT *
    FROM res_category rcat
    INNER JOIN res_cat_rel rel ON rcat.id = rel.cat_id
) rc ON r.id = rc.res_id order by res_id,cat_id;



select a.name,a.price,b.name,b.cat_name from res_cat_items a inner join (SELECT name,cat_name,res_id,cat_id
FROM restaurant r
INNER JOIN (
    SELECT *
    FROM res_category rcat
    INNER JOIN res_cat_rel rel ON rcat.id = rel.cat_id
) rc ON r.id = rc.res_id

order by res_id,cat_id)b on a.res_cat_id=b.cat_id and a.res_id=b.res_id;





select name,cat_name from res_cat_items r inner join res_category s on r.res_cat_id=s.id;

select * from res_category order by id;

insert into res_cat_rel values(220,167);
insert into res_cat_rel values(220,168);
insert into res_cat_rel values(220,169);
insert into res_cat_rel values(220,170);
insert into res_cat_rel values(220,171);


 insert into restaurant(image_cdn,name,cuisine,ratings,costoftwo,delievery_time) values('2b4f62d606d1b2bfba9ba9e5386fabb7', 'Pizza Hut', 'Pizzas', 4.1, 350, interval '23 minutes');
 insert into restaurant(image_cdn,name,cuisine,ratings,costoftwo,delievery_time) values('byilgyrcfz690ryoasww', 'Andhra Gunpowder', 'Andhra,Biryani,South Indian', 4.5, 350, interval '19 minutes');
 insert into restaurant(image_cdn,name,cuisine,ratings,costoftwo,delievery_time) values('195876a3181ef63f76e45e3a7b49b585', 'Nandhana Palace', 'Biryani,Andhra,South Indian,North Indian', 4.2, 500, interval '19 minutes');
insert into restaurant(image_cdn,name,cuisine,ratings,costoftwo,delievery_time) values('f01666ac73626461d7455d9c24005cd4', 'KFC', 'Burgers,Biryani,American,Snacks,Fast Food', 4.2, 400, interval '19 minutes');
insert into restaurant(image_cdn,name,cuisine,ratings,costoftwo,delievery_time) values('b2edbc28b7b8219d6e0a9c049ce06658', 'Leons - Burgers & Wings (Leon Grill)', 'American,Snacks,Turkish,Portuguese,Continental', 4.4, 300, interval '21 minutes');
insert into restaurant(image_cdn,name,cuisine,ratings,costoftwo,delievery_time) values('yktanq9i7yfjrixaghuj', 'Ambur Star Briyani Since 1890', 'Biryani,Chettinad,Andhra,Beverages,Seafood', 4.4, 500, interval '28 minutes');
insert into restaurant(image_cdn,name,cuisine,ratings,costoftwo,delievery_time) values('f62564e14944753903849c4ef673af4d', 'McDonalds', 'Burgers,Beverages,Cafe,Desserts', 4.5, 400, interval '20 minutes');
insert into restaurant(image_cdn,name,cuisine,ratings,costoftwo,delievery_time) values('e33e1d3ba7d6b2bb0d45e1001b731fcf', 'Burger King', 'Burgers,American', 4.3, 350, interval '22 minutes');
 insert into restaurant(image_cdn,name,cuisine,ratings,costoftwo,delievery_time) values('vw6n5betlssnqelt7rmu', 'Dominos Pizza', 'Pizzas,Italian,Pastas,Desserts', 4.4, 400, interval '25 minutes');
 insert into restaurant(image_cdn,name,cuisine,ratings,costoftwo,delievery_time) values('exhzkyd9pjoqlobruy4v', 'Dindigul Thalappakatti', 'Biryani,Barbecue,South Indian,Chinese,North Indian', 4.2, 650, interval '31 minutes');
 insert into restaurant(image_cdn,name,cuisine,ratings,costoftwo,delievery_time) values('d1331113564b015c9d55c48ff48a2553', 'Candices Gourmet Sandwiches & Wraps', 'Continental,American,Salads,Desserts,Beverages,Healthy Food', 4.5, 600, interval '22 minutes');
insert into restaurant(image_cdn,name,cuisine,ratings,costoftwo,delievery_time) values('29fc772cc06b07a4b018e4971d96c9a3', 'Chinita Real Mexican Food', 'Mexican,Salads,Desserts,Beverages', 4.5, 750, interval '22 minutes');
insert into restaurant(image_cdn,name,cuisine,ratings,costoftwo,delievery_time) values('un4omn7rcunkmlw6vikr', 'Hotel Empire', 'North Indian,Kebabs,Biryani', 4.3, 450, interval '25 minutes');
insert into restaurant(image_cdn,name,cuisine,ratings,costoftwo,delievery_time) values('9ca4ac15ca5cdee1e71efe15909d465f', 'Sharief Bhai', 'Biryani,Kebabs,Mughlai,Arabian,South Indian,Rolls & Wraps,Street Food,Fast Food,Desserts,Beverages', 4.3, 400, interval '27 minutes');
insert into restaurant(image_cdn,name,cuisine,ratings,costoftwo,delievery_time) values('b15a2367ff3d6f0bf92d1def3c1e5c59', 'ITC Master Chef Creations', 'North Indian,Biryani,Kebabs,Mediterranean,Mughlai', 4.4, 650, interval '31 minutes');
 insert into restaurant(image_cdn,name,cuisine,ratings,costoftwo,delievery_time) values('o8t0w5gdlujpigauaflw', 'Lo! - Low Carb and Keto Foods', 'Healthy Food,Keto,Continental', 4.4, 150, interval '27 minutes');
 insert into restaurant(image_cdn,name,cuisine,ratings,costoftwo,delievery_time) values('bb6049fae59b8a2413a9177eb0338b49', 'The Bowl Company', 'Pan-Asian,Continental,Desserts,American,Asian,Beverages,Biryani,Chinese,European,Grill,Hyderabadi,Indian,Italian,Kebabs,Lucknowi,Mediterranean,Mexican,Mughlai,Oriental,Pastas,Punjabi,Rajasthani,Snacks', 4.5, 300, interval '27 minutes');
 insert into restaurant(image_cdn,name,cuisine,ratings,costoftwo,delievery_time) values('gxydb9wvkadarapno4hk', 'A2B - Adyar Ananda Bhavan', 'South Indian,North Indian,Sweets,Chinese', 4.3, 300, interval '23 minutes');
 insert into restaurant(image_cdn,name,cuisine,ratings,costoftwo,delievery_time) values('a564ace38895abd960157ac2a76aaf2a', 'EatFit', 'Chinese,Healthy Food,Tandoor,Pizzas,Thalis,Biryani', 4.5, 270, interval '19 minutes');
insert into restaurant(image_cdn,name,cuisine,ratings,costoftwo,delievery_time) values('cace805a6ba74137571d0f7ac92302b1', 'Chaayos Chai+Snacks=Relax', 'Bakery,Beverages,Chaat,Desserts,Home Food,Italian,Maharashtrian,Snacks,Street Food,Sweets', 4.5, 250, interval '18 minutes');