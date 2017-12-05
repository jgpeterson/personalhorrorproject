class CreateMovies < ActiveRecord::Migration[5.1]
  def change
    create_table :movies do |t|
      t.string :tagline
      t.string :poster
      t.string :purchase
      t.string :trailer
      t.string :screenshot
      t.string :review

      t.timestamps
    end
  end
end
