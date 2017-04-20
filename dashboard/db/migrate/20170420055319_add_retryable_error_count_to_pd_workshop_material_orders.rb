class AddRetryableErrorCountToPdWorkshopMaterialOrders < ActiveRecord::Migration[5.0]
  def change
    add_column :pd_workshop_material_orders, :retryable_error_count, :integer
  end
end
