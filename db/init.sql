
drop table if exists houses;
 
create table houses(
id serial,
name text,
address text,
city text,
stateAbbr text,
zip text,
image_url text, 
mortgage text,
rent text
);

insert into houses(name, address, city, stateAbbr, zip, image_url, mortgage, rent)
values('Duplex', '123 Main Ave', 'San Francisco', 'CA', '94015', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb0ls7ZOgg4yTUIYEEtVCHbRewEZAJ49HIgHWoj8lFlUEtha3g', '2000', '4000'),
('House', '897 1st Ave', 'Portland', 'OR', '20349', 'https://cdn.pixabay.com/photo/2016/06/24/10/47/architecture-1477041__340.jpg', '1000', '5000'),
('Apartment', '405 Crossroad Dr', 'San Jose', 'CA', '95112', 'https://cdn.pixabay.com/photo/2016/01/19/17/32/apartment-building-1149751__340.jpg', '3144', '1000' ),
('Dorm', '520 Central Ln', 'Dallas', 'TX', '52921', 'http://www.cndajin.com/data/wls/218/19896067.jpg', '324', '765');

select * from houses;
