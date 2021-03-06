<?php               
class CategoriesOfRestaurantModel extends CI_Model
{
    private $table = 'categoriesofrestaurant';  
    private $restaurantcategories = 'restaurantcategories';  
    function __construct()
    {
        parent::__construct();
    }
    function ListAll()
    {                                          
        $query = $this->db->get($this->table);
        return $query->result();
    }
    
    function GetById($id)
    {
        $query = $this->db->get_where($this->table, array('categoryOfResID'=>$id), 1);
        $record = $query->row();
        return $record;
    }
    
    function ListByStatus($status=1)
    {                                          
        $query = $this->db->get_where($this->table, array('statusCOR'=>$status));
        return $query->result();
    }
    
    function ListCateByResId($restaurantID=0)
    {                                          
        $sql = 'select distinct '.$this->table.'.* ';
        $sql.= ' from '.$this->table;
        $sql.= ' left join '.$this->restaurantcategories.' on '
                .$this->table.'.categoryOfResID = '.$this->restaurantcategories.'.categoryOfResID ';
        $sql.= ' where '.$this->restaurantcategories.'.restaurantID = '.$restaurantID;
        $query = $this->db->query($sql);
        return $query->result();
    }
    
    function Count_All()
    {
        return $this->db->count_all($this->table);
    }
    
    function Create($info)
    {   
        //Bat dau trans
        $this->db->trans_begin();        
        //Insert du lieu vao bang user
        $this->db->insert($this->table, $info);
        
        if ($this->db->trans_status() == false)
        {
            $this->db->trans_rollback();
            return false;
        }
        else
        {
            $this->db->trans_commit();
            return true;
        }        
    }
    
    function Update($id, $info)
    {
        $this->db->trans_begin();
        $this->db->update($this->table, $info, array('categoryOfResID'=>$id));         
        if ($this->db->trans_status() == false)
        {
            $this->db->trans_rollback();
            return false;
        }
        else
        {
            $this->db->trans_commit();
            return true;
        }
    }
    //Xoa thong tin user trong bang users
    function Delete($id)
    {
        //Bat dau trans
        $this->db->trans_begin(); 
        $this->db->delete($this->table, array('categoryOfResID'=>$id)); 
        if ($this->db->trans_status() == false)
        {
            $this->db->trans_rollback();
            return false;
        }
        else
        {
            $this->db->trans_commit();
            return true;
        }
    }
    
}

?>