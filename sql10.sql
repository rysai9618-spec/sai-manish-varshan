create database if not exists companydb;
use companydb;
create table employee(
    emp_id int primary key auto_increment,
    emp_name varchar(50),
    salary int,
    role varchar(20)
);
create table product(
    product_id int primary key auto_increment,
    product_name varchar(50),
    stock int
);
create table orders(
    order_id int primary key auto_increment,
    product_id int,
    quantity int,
    foreign key(product_id) references product(product_id)
);
delimiter //
create procedure insert_employee(
    in p_name varchar(50),
    in p_salary int,
    in p_role varchar(20)
)
begin
insert into employee(emp_name,salary,role)
values(p_name,p_salary,p_role);
end //
delimiter ;
delimiter //
create procedure update_salary(
    in p_id int,
    in new_salary int
)
begin
update employee
set salary = new_salary
where emp_id = p_id;
end //
delimiter ;
delimiter //
create trigger update_stock
after insert on orders
for each row
begin
update product
set stock = stock - new.quantity
where product_id = new.product_id;
end //
delimiter ;
delimiter //
create trigger prevent_last_admin
before delete on employee
for each row
begin
declare admin_count int;
select count(*) into admin_count
from employee
where role='admin';
if admin_count = 1 and old.role='admin' then
signal sqlstate '45000'
set message_text='cannot delete last admin';
end if;
end //
delimiter ;
delimiter //
create procedure get_employees()
begin
select * from employee;
end //
delimiter ;
call insert_employee('kumar',25000,'admin');
call insert_employee('raj',22000,'staff');
call update_salary(1,30000);
call get_employees();
drop procedure insert_employee;
drop procedure update_salary;
drop procedure get_employees;
drop trigger update_stock;
drop trigger prevent_last_admin;